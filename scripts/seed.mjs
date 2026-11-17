// Loads the fictional demo company (seed/demo-data.json, assets/logo.png, assets/demo/*) into a deployed instance.
//   BASE_URL=https://signature.example.com ADMIN_KEY=... node scripts/seed.mjs
import { readFileSync, readdirSync } from 'node:fs';
const base = (process.env.BASE_URL || '').replace(/\/$/, ''), key = process.env.ADMIN_KEY;
if (!base || !key) { console.error('Set BASE_URL and ADMIN_KEY.'); process.exit(1); }
const H = { 'x-admin-key': key };
const data = JSON.parse(readFileSync(new URL('../seed/demo-data.json', import.meta.url), 'utf8'));
const logo = readFileSync(new URL('../assets/logo.png', import.meta.url));
let r = await fetch(base + '/api/img/logo', { method: 'POST', headers: { ...H, 'content-type': 'image/png' }, body: logo });
if (!r.ok) { console.error('Logo upload failed:', r.status); process.exit(1); }
const TYPES = { jpg: 'image/jpeg', gif: 'image/gif', mp4: 'video/mp4' };
for (const f of readdirSync(new URL('../assets/demo/', import.meta.url))) {
  const [id, ext] = [f.replace(/\.[a-z0-9]+$/, ''), f.split('.').pop()];
  r = await fetch(base + '/api/img/' + id, { method: 'POST', headers: { ...H, 'content-type': TYPES[ext] }, body: readFileSync(new URL('../assets/demo/' + f, import.meta.url)) });
  if (!r.ok) { console.error('Upload failed for ' + f + ':', r.status); process.exit(1); }
}
const now = Date.now();
data.members.forEach(m => { if (m.photo) m.photo = now; if (m.video) m.video = now; });
data.company.logo = now;
r = await fetch(base + '/api/data', { method: 'PUT', headers: { ...H, 'content-type': 'application/json' }, body: JSON.stringify(data) });
if (!r.ok) { console.error('Data upload failed:', r.status, await r.text()); process.exit(1); }
console.log('Demo data loaded. Open ' + base + '/admin');
