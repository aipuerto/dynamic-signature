// Loads the fictional demo company (seed/demo-data.json + assets/logo.png) into a deployed instance.
//   BASE_URL=https://signature.example.com ADMIN_KEY=... node scripts/seed.mjs
import { readFileSync } from 'node:fs';
const base = (process.env.BASE_URL || '').replace(/\/$/, ''), key = process.env.ADMIN_KEY;
if (!base || !key) { console.error('Set BASE_URL and ADMIN_KEY.'); process.exit(1); }
const H = { 'x-admin-key': key };
const data = JSON.parse(readFileSync(new URL('../seed/demo-data.json', import.meta.url), 'utf8'));
const logo = readFileSync(new URL('../assets/logo.png', import.meta.url));
let r = await fetch(base + '/api/img/logo', { method: 'POST', headers: { ...H, 'content-type': 'image/png' }, body: logo });
if (!r.ok) { console.error('Logo upload failed:', r.status); process.exit(1); }
data.company.logo = Date.now();
r = await fetch(base + '/api/data', { method: 'PUT', headers: { ...H, 'content-type': 'application/json' }, body: JSON.stringify(data) });
if (!r.ok) { console.error('Data upload failed:', r.status, await r.text()); process.exit(1); }
console.log('Demo data loaded. Open ' + base + '/admin');
