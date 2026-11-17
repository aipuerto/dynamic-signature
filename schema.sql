-- Click analytics (card views, WhatsApp / vCard / web / social taps).
CREATE TABLE IF NOT EXISTS clicks (
  id      INTEGER PRIMARY KEY AUTOINCREMENT,
  ts      INTEGER NOT NULL,   -- epoch ms
  slug    TEXT,               -- person slug, e.g. elif-demir
  target  TEXT,               -- view | wa | vcf | web | linkedin | instagram
  src     TEXT,               -- sig (e-mail signature) | card | direct | qr ...
  country TEXT                -- Cloudflare country code
);
CREATE INDEX IF NOT EXISTS idx_clicks_ts ON clicks(ts);
