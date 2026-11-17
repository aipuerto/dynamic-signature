// Dependency-free smoke test and local preview server.
//   node scripts/smoke.mjs            -> runs the checks
//   node scripts/smoke.mjs --serve    -> serves the app on http://localhost:8787 (in-memory KV, ADMIN_KEY=demo)
import worker from '../src/worker.mjs';
import http from 'node:http';

export function mockEnv(key = 'demo') {
  const store = new Map();
  return {
    ADMIN_KEY: key,
    KV: {
      async get(k, t) { const v = store.get(k); if (!v) return null; return t === 'json' ? JSON.parse(v.value) : v.value; },
      async getWithMetadata(k) { const v = store.get(k); return v ? { value: v.value, metadata: v.metadata } : { value: null, metadata: null }; },
      async put(k, value, o) { store.set(k, { value, metadata: o && o.metadata }); },
      async delete(k) { store.delete(k); }
    }
  };
}
const call = (env, path, init = {}) => worker.fetch(new Request('http://local.test' + path, init), env, { waitUntil() {} });

if (process.argv.includes('--serve')) {
  const env = mockEnv('demo'), port = +process.env.PORT || 8787;
  http.createServer(async (rq, rs) => {
    const chunks = []; for await (const c of rq) chunks.push(c);
    const body = chunks.length ? Buffer.concat(chunks) : undefined;
    const r = await worker.fetch(new Request('http://localhost:' + port + rq.url, { method: rq.method, headers: rq.headers, body: ['GET', 'HEAD'].includes(rq.method) ? undefined : body }), env, { waitUntil() {} });
    rs.writeHead(r.status, Object.fromEntries(r.headers)); rs.end(Buffer.from(await r.arrayBuffer()));
  }).listen(port, () => console.log('Preview: http://localhost:' + port + '/admin  (admin key: demo)'));
} else {
  const env = mockEnv('k'), H = { 'x-admin-key': 'k' };
  let fail = 0;
  const ok = (c, m) => { console.log((c ? 'ok   ' : 'FAIL ') + m); if (!c) fail++; };
  const txt = async (p, i) => { const r = await call(env, p, i); return [r, await r.text()]; };
  let [r, t] = await txt('/'); ok(r.status === 200 && t.includes('Meridian'), 'team page');
  [r, t] = await txt('/elif-demir'); ok(r.status === 200 && t.includes('Elif Demir'), 'digital card');
  [r, t] = await txt('/elif-demir.vcf'); ok(t.includes('BEGIN:VCARD') && t.includes('Elif Demir'), 'vCard download');
  [r, t] = await txt('/elif-demir/imza?lang=en'); ok(r.status === 200 && t.includes('<table'), 'signature page');
  [r, t] = await txt('/elif-demir/imza?tpl=cdemo1'); ok(t.includes('Georgia'), 'studio template renders');
  [r, t] = await txt('/elif-demir/kurulum'); ok(r.status === 200, 'install guide');
  [r] = await txt('/go/elif-demir/wa'); ok(r.status === 302 && r.headers.get('location').startsWith('https://wa.me/'), 'WhatsApp redirect');
  [r] = await txt('/api/data'); ok(r.status === 401, 'admin API locked without key');
  [r, t] = await txt('/api/data', { headers: H }); const d = JSON.parse(t); ok(r.status === 200 && d.members.length === 9, 'admin API returns demo data');
  [r] = await txt('/api/data', { method: 'PUT', headers: { ...H, 'content-type': 'application/json' }, body: JSON.stringify(d) }); ok(r.status === 200, 'save round-trip');
  [r, t] = await txt('/api/sigprev', { method: 'POST', headers: { ...H, 'content-type': 'application/json' }, body: JSON.stringify({ cfg: { lay: 'top', font: 'verdana' }, mid: 'm1', lang: 'tr' }) });
  ok(r.status === 200 && JSON.parse(t).html.includes('Verdana'), 'studio live preview endpoint');
  [r] = await txt('/admin'); ok(r.status === 200, 'admin page');
  console.log(fail ? fail + ' check(s) failed' : 'all checks passed'); process.exit(fail ? 1 : 0);
}
