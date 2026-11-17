const W=(function(){
const SEED={"company":{"name":"Meridian Bedding Fabrics","tagline":"Mattress ticking & bedding fabrics","address":"Demo OSB, 12. Cadde No: 8","city":"Istanbul","country":"Türkiye","phone":"+90 212 000 00 00","web":"www.meridian-fabrics.example","email":"info@meridian-fabrics.example","hours":"Mon–Fri 08:30–17:30","color":"#14508c","logo":0,"palette":["#14508c","#1f9d57","#1a1d24"],"roles":{"primary":"","accent":"","text":"","line":""},"season":{"on":false,"name":"New Year","color":"#b3202a","from":"2026-12-20","to":"2027-01-05","logo":0},"banner":{"on":true,"text":"Meet us at Heimtextil – Hall 8.0, Stand B21","link":"https://example.com/fairs"}},"teams":[{"id":"t1","name":"Management & Marketing"},{"id":"t2","name":"Latin America"},{"id":"t3","name":"Africa & Middle East"},{"id":"t4","name":"Asia"}],"members":[{"id":"m1","name":"Elif Demir","title":"General Manager","teamId":"t1","phone":"+90 555 000 00 01","office":"+90 212 000 00 00 ext. 101","wa":"905550000001","email":"elif@meridian-fabrics.example","instagram":"demo.elif","linkedin":"demo-elif","photo":0,"video":0,"boss":"","orgOn":true,"up":0,"down":9},{"id":"m2","name":"Kerem Yıldız","title":"Sales Director","teamId":"t1","phone":"+90 555 000 00 02","office":"+90 212 000 00 00 ext. 102","wa":"905550000002","email":"kerem@meridian-fabrics.example","instagram":"demo.kerem","linkedin":"demo-kerem","photo":0,"video":0,"boss":"m1","orgOn":true,"up":1,"down":9},{"id":"m3","name":"Carlos Mendoza","title":"Regional Sales Manager – Latin America","teamId":"t2","phone":"+90 555 000 00 03","office":"+90 212 000 00 00 ext. 103","wa":"905550000003","email":"carlos@meridian-fabrics.example","instagram":"demo.carlos","linkedin":"demo-carlos","photo":0,"video":0,"boss":"m2","orgOn":true,"up":2,"down":1},{"id":"m4","name":"Lucía Fernández","title":"Sales Executive – Latin America","teamId":"t2","phone":"+90 555 000 00 04","office":"+90 212 000 00 00 ext. 104","wa":"905550000004","email":"lucia@meridian-fabrics.example","instagram":"demo.lucia","linkedin":"demo-lucia","photo":0,"video":0,"boss":"m3","orgOn":true,"up":2,"down":0},{"id":"m5","name":"Daniel Okoye","title":"Regional Sales Manager – Africa","teamId":"t3","phone":"+90 555 000 00 05","office":"+90 212 000 00 00 ext. 105","wa":"905550000005","email":"daniel@meridian-fabrics.example","instagram":"demo.daniel","linkedin":"demo-daniel","photo":0,"video":0,"boss":"m2","orgOn":true,"up":2,"down":1},{"id":"m6","name":"Fatima Al-Sayed","title":"Sales Executive – Middle East","teamId":"t3","phone":"+90 555 000 00 06","office":"+90 212 000 00 00 ext. 106","wa":"905550000006","email":"fatima@meridian-fabrics.example","instagram":"demo.fatima","linkedin":"demo-fatima","photo":0,"video":0,"boss":"m5","orgOn":true,"up":2,"down":0},{"id":"m7","name":"Mei Lin","title":"Regional Sales Manager – Asia","teamId":"t4","phone":"+90 555 000 00 07","office":"+90 212 000 00 00 ext. 107","wa":"905550000007","email":"mei@meridian-fabrics.example","instagram":"demo.mei","linkedin":"demo-mei","photo":0,"video":0,"boss":"m2","orgOn":true,"up":2,"down":1},{"id":"m8","name":"Arjun Mehta","title":"Sales Executive – Asia","teamId":"t4","phone":"+90 555 000 00 08","office":"+90 212 000 00 00 ext. 108","wa":"905550000008","email":"arjun@meridian-fabrics.example","instagram":"demo.arjun","linkedin":"demo-arjun","photo":0,"video":0,"boss":"m7","orgOn":true,"up":2,"down":0},{"id":"m9","name":"Zeynep Çelik","title":"Marketing Specialist","teamId":"t1","phone":"+90 555 000 00 09","office":"+90 212 000 00 00 ext. 109","wa":"905550000009","email":"zeynep@meridian-fabrics.example","instagram":"demo.zeynep","linkedin":"demo-zeynep","photo":0,"video":0,"boss":"m2","orgOn":true,"up":1,"down":0}],"faq":[{"q":"What do you produce?","a":"Knitted and woven mattress ticking, quilting fabrics and bedding textiles."},{"q":"What is the minimum order quantity?","a":"Sample metres are available on request; production MOQ depends on the quality."},{"q":"Which incoterms do you offer?","a":"EXW, FCA, FOB and CIF are available for most destinations."},{"q":"Can I get samples?","a":"Yes. Message us on WhatsApp with your address and the qualities you are interested in."}],"sig":{"tpl":"t1","blocks":[{"id":"bfair","type":"fair","on":true,"dyn":false,"title":"","col":"1","items":[{"name":"Heimtextil Frankfurt","date":"12–15 Jan 2027","place":"Hall 8.0 · Stand B21","cc":"de"},{"name":"Istanbul Home Show","date":"3–7 Mar 2027","place":"Hall 4 · Stand 112","cc":"tr"},{"name":"Home Textiles Expo Sao Paulo","date":"14–17 Jun 2027","place":"Pavilion B · Stand 37","cc":"br"}]},{"id":"bhol","type":"holiday","on":true,"dyn":false,"title":"","col":"2","text":"Our office is closed 24 Dec – 2 Jan. Orders are answered from 3 Jan.","from":"2026-12-10","to":"2027-01-03"},{"id":"blink","type":"link","on":true,"title":"","col":"2","label":"Download the 2027 catalogue","url":"https://example.com/catalogue"},{"id":"bpdf","type":"pdf","on":false,"title":"","col":"2","label":"Product catalogue (PDF)"},{"id":"bimg","type":"image","on":false,"title":"","col":"1","width":360},{"id":"bgif","type":"gif","on":false,"title":"","col":"1","width":360},{"id":"btxt","type":"text","on":false,"dyn":false,"title":"Notice","col":"1","text":"Free-text announcement block."}]},"ctpl":[{"id":"cdemo1","name":"Executive","cfg":{"lay":"left","ps":88,"pr":12,"dv":true,"dw":3,"sp":14,"font":"georgia","cs":"stack","bs":"outline","br":6,"ns":17,"rows":[{"k":"logo","on":true},{"k":"name","on":true},{"k":"tagline","on":false},{"k":"contact","on":true},{"k":"buttons","on":true},{"k":"text","on":false}]}},{"id":"cdemo2","name":"Card","cfg":{"lay":"right","ps":72,"pr":36,"dv":false,"cf":true,"cr":12,"cg":"#f5f7fb","bs":"link","rows":[{"k":"logo","on":true},{"k":"name","on":true},{"k":"tagline","on":true},{"k":"contact","on":true},{"k":"buttons","on":true},{"k":"text","on":false}]}}]};
const L={
 en:{save:'Save contact',wa:'WhatsApp',call:'Call',mail:'Email',card:'My digital card',company:'Company',faq:'Questions & answers',team:'Team',search:'Search questions…',hi:'Hello {n}, I got your contact from your email signature.',phone:'Phone',email:'Email',web:'Web',addr:'Address',hours:'Hours',qr:'Share by QR',qr1:'Contact (works offline)',qr2:'Link to this card',none:'No matching question. Ask on WhatsApp.'},
 es:{save:'Guardar contacto',wa:'WhatsApp',call:'Llamar',mail:'Correo',card:'Mi tarjeta digital',company:'Empresa',faq:'Preguntas frecuentes',team:'Equipo',search:'Buscar preguntas…',hi:'Hola {n}, tengo su contacto por su firma de correo.',phone:'Teléfono',email:'Correo',web:'Web',addr:'Dirección',hours:'Horario',qr:'Compartir por QR',qr1:'Contacto (sin internet)',qr2:'Enlace a esta tarjeta',none:'Sin resultados. Pregunte por WhatsApp.'},
 tr:{save:'Rehbere ekle',wa:'WhatsApp',call:'Ara',mail:'E-posta',card:'Dijital kartım',company:'Firma',faq:'Sık sorulanlar',team:'Ekip',search:'Sorularda ara…',hi:'Merhaba {n}, iletişim bilginizi e-posta imzanızdan aldım.',phone:'Telefon',email:'E-posta',web:'Web',addr:'Adres',hours:'Saatler',qr:'QR ile paylaş',qr1:'Rehber kaydı (internetsiz)',qr2:'Bu kartın bağlantısı',none:'Eşleşen soru yok. WhatsApp\'tan sorun.'},
 pt:{save:'Salvar contato',wa:'WhatsApp',call:'Ligar',mail:'E-mail',card:'Meu cartão digital',company:'Empresa',faq:'Perguntas frequentes',team:'Equipe',search:'Buscar perguntas…',hi:'Olá {n}, obtive seu contato pela sua assinatura de e-mail.',phone:'Telefone',email:'E-mail',web:'Web',addr:'Endereço',hours:'Horário',qr:'Compartilhar por QR',qr1:'Contato (funciona offline)',qr2:'Link deste cartão',none:'Nenhuma pergunta encontrada. Pergunte no WhatsApp.'},
 fr:{save:'Enregistrer le contact',wa:'WhatsApp',call:'Appeler',mail:'E-mail',card:'Ma carte de visite numérique',company:'Entreprise',faq:'Questions fréquentes',team:'Équipe',search:'Rechercher une question…',hi:'Bonjour {n}, j\'ai obtenu vos coordonnées via votre signature e-mail.',phone:'Téléphone',email:'E-mail',web:'Web',addr:'Adresse',hours:'Horaires',qr:'Partager par QR',qr1:'Contact (fonctionne hors ligne)',qr2:'Lien vers cette carte',none:'Aucune question correspondante. Demandez sur WhatsApp.'},
 zh:{save:'保存联系人',wa:'WhatsApp',call:'拨打电话',mail:'电子邮件',card:'我的电子名片',company:'公司',faq:'常见问题',team:'团队',search:'搜索问题…',hi:'您好 {n}，我是通过您的邮件签名获取到您的联系方式的。',phone:'电话',email:'邮箱',web:'网站',addr:'地址',hours:'营业时间',qr:'二维码分享',qr1:'联系人（离线可用）',qr2:'此名片的链接',none:'没有匹配的问题，请通过 WhatsApp 咨询。'}};
const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const slug=n=>String(n).toLocaleLowerCase('tr').replace(/ç/g,'c').replace(/ğ/g,'g').replace(/ı/g,'i').replace(/ö/g,'o').replace(/ş/g,'s').replace(/ü/g,'u').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const digits=s=>String(s||'').replace(/\D/g,'');
const initials=n=>String(n).trim().split(/\s+/).slice(0,2).map(w=>w[0]||'').join('').toLocaleUpperCase();
const HEX=/^#[0-9a-f]{6}$/i;
const lum=h=>{const v=[1,3,5].map(i=>parseInt(h.substr(i,2),16)/255).map(x=>x<=.03928?x/12.92:Math.pow((x+.055)/1.055,2.4));return .2126*v[0]+.7152*v[1]+.0722*v[2]};
const cr=(a,b)=>{const x=lum(a),y=lum(b);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05)};
const sat=h=>{const v=[1,3,5].map(i=>parseInt(h.substr(i,2),16)),mx=Math.max(...v),mn=Math.min(...v);return mx?(mx-mn)/mx:0};
function seasonOn(c){const s=c.season;if(!s||!s.on||!HEX.test(s.color||''))return false;const t=new Date().toISOString().slice(0,10);if(s.from&&t<s.from)return false;if(s.to&&t>s.to)return false;return true}
function roles(c){
 const pal=(Array.isArray(c.palette)?c.palette:[]).filter(x=>HEX.test(x)).slice(0,6);if(!pal.length&&HEX.test(c.color))pal.push(c.color);
 const r=c.roles||{},pick=k=>{const i=r[k];return i!==''&&i!=null&&HEX.test(pal[+i]||'')?pal[+i]:''};
 let primary=pick('primary')||pal[0]||'#14508c';if(seasonOn(c))primary=c.season.color;
 const dark=pal.filter(x=>cr(x,'#ffffff')>=7).sort((a,b)=>lum(a)-lum(b))[0];
 const text=pick('text')||dark||'#1a1d24';
 const oth=pal.filter(x=>x.toLowerCase()!==primary.toLowerCase()).sort((a,b)=>sat(b)-sat(a));
 const accent=pick('accent')||oth.find(x=>cr(x,'#ffffff')>=3)||primary;
 return {primary,accent,text,line:pick('line')||accent,pal}}
const color=c=>roles(c).primary;
function png1(hex){const rgb=[1,3,5].map(i=>parseInt(hex.substr(i,2),16)),raw=[0,...rgb];let a=1,b=0;for(const x of raw){a=(a+x)%65521;b=(b+a)%65521}const ad=((b<<16)|a)>>>0;
 const z=[0x78,0x01,0x01,0x04,0x00,0xfb,0xff,...raw,(ad>>>24)&255,(ad>>>16)&255,(ad>>>8)&255,ad&255];
 const T=[];for(let n=0;n<256;n++){let c=n;for(let k=0;k<8;k++)c=c&1?0xedb88320^(c>>>1):c>>>1;T[n]=c>>>0}
 const crc=bs=>{let c=0xffffffff;for(const x of bs)c=T[(c^x)&255]^(c>>>8);return (c^0xffffffff)>>>0},u32=n=>[(n>>>24)&255,(n>>>16)&255,(n>>>8)&255,n&255];
 const ch=(t,d)=>{const body=[...t].map(x=>x.charCodeAt(0)).concat(d);return [...u32(d.length),...body,...u32(crc(body))]};
 return new Uint8Array([137,80,78,71,13,10,26,10,...ch('IHDR',[...u32(1),...u32(1),8,2,0,0,0]),...ch('IDAT',z),...ch('IEND',[])])}
const handle=s=>encodeURIComponent(String(s||'').trim().replace(/^@/,'').replace(/^https?:\/\/[^/]+\/(in\/)?/,'').replace(/\/$/,''));
const socials=m=>[m.linkedin?['LinkedIn','https://www.linkedin.com/in/'+handle(m.linkedin)]:null,m.instagram?['Instagram','https://www.instagram.com/'+handle(m.instagram)]:null].filter(Boolean);
const waUrl=(m,t)=>digits(m.wa||m.phone)?'https://wa.me/'+digits(m.wa||m.phone)+'?text='+encodeURIComponent(t.hi.replace('{n}',m.name.split(' ')[0])):'';
const webUrl=c=>!c.web?'':/^https?:\/\//.test(c.web)?c.web:'https://'+c.web;
const safeUrl=u=>/^https:\/\//.test(u||'')?u:'#';
const OFFICE={en:'Office',es:'Oficina',tr:'Ofis',pt:'Escritório',fr:'Bureau',zh:'办公室'};const BOT=/bot|crawl|spider|preview|scan|facebookexternalhit|whatsapp|slurp|curl|python|headless/i;
function track(env,ctx,req,slug,target,src){try{if(!env.DB||BOT.test(req.headers.get('user-agent')||''))return;const p=env.DB.prepare('INSERT INTO clicks(ts,slug,target,src,country) VALUES(?,?,?,?,?)').bind(Date.now(),slug,target,String(src||'direct').slice(0,12),(req.cf&&req.cf.country)||'').run().catch(()=>{});if(ctx&&ctx.waitUntil)ctx.waitUntil(p)}catch(e){}}
function vcard(m,c){
 const p=m.name.trim().split(/\s+/),last=p.length>1?p.pop():'',first=p.join(' '),v=s=>String(s||'').replace(/([,;\\])/g,'\\$1');
 const a=['BEGIN:VCARD','VERSION:3.0','N:'+v(last)+';'+v(first)+';;;','FN:'+v(m.name),'ORG:'+v(c.name)];
 if(m.title)a.push('TITLE:'+v(m.title));
 if(m.phone)a.push('TEL;TYPE=CELL:'+m.phone);
 if(m.office||c.phone)a.push('TEL;TYPE=WORK:'+(m.office||c.phone));
 if(m.email)a.push('EMAIL;TYPE=WORK:'+m.email);
 if(c.web)a.push('URL:'+webUrl(c));
 if(c.address||c.city)a.push('ADR;TYPE=WORK:;;'+v(c.address)+';'+v(c.city)+';;;'+v(c.country));
 socials(m).forEach(s=>a.push('X-SOCIALPROFILE;TYPE='+s[0].toLowerCase()+':'+s[1]));
 a.push('END:VCARD');return a.join('\r\n');
}
const CSS=`*{box-sizing:border-box}[hidden]{display:none!important}
:root{--bg:#0c0e13;--surface:#171a22;--line:#2a2e39;--fg:#f2f3f6;--muted:#9aa0ae;--brand:#14508c;--wa:#1f9d57;color-scheme:dark}
body{margin:0;background:var(--bg);color:var(--fg);font:15px/1.5 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}
a{color:inherit}.shell{max-width:440px;margin:0 auto;min-height:100vh;position:relative}
.hero{position:relative;aspect-ratio:4/4.4;overflow:hidden;background:var(--brand)}
.hero img,.hero video{width:100%;height:100%;object-fit:cover;object-position:center 12%;display:block}.hero:has(video){aspect-ratio:9/13}.hero video{object-position:center 4%}.hero img{animation:kb 14s ease-in-out infinite alternate}
.weave{position:absolute;inset:0;display:grid;place-items:center;font:800 5.5rem system-ui,sans-serif;background:repeating-linear-gradient(45deg,transparent 0 9px,rgba(255,255,255,.07) 9px 10px),repeating-linear-gradient(-45deg,transparent 0 9px,rgba(0,0,0,.14) 9px 10px);background-size:200% 200%;animation:shift 16s linear infinite}
@keyframes kb{from{transform:scale(1)}to{transform:scale(1.09) translateY(-2%)}}@keyframes shift{to{background-position:100% 100%}}
@media (prefers-reduced-motion:reduce){.hero img,.weave{animation:none}}
.hero-t{position:absolute;inset:auto 0 0 0;padding:48px 18px 14px;background:linear-gradient(transparent,var(--bg))}
.hero-t b{font-size:1.5rem;font-weight:800;display:block;letter-spacing:-.01em}.hero-t span{font-size:.9rem;color:var(--muted)}
.langs{position:absolute;top:12px;right:12px;display:flex;gap:4px}
.langs a{font:600 .7rem ui-monospace,monospace;background:var(--bg);color:var(--muted);border:1px solid var(--line);border-radius:20px;padding:4px 9px;text-decoration:none}
.langs a.on{color:var(--bg);background:var(--fg)}
.body{padding:14px 16px 28px;display:flex;flex-direction:column;gap:14px}
.acts{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.acts a{font-weight:600;font-size:.88rem;text-align:center;text-decoration:none;border-radius:10px;padding:12px 8px;border:1px solid var(--line);background:var(--surface)}
.acts .save{background:var(--fg);color:var(--bg);border-color:var(--fg)}.acts .wa{background:var(--wa);border-color:var(--wa);color:#fff}
.block{background:var(--surface);border:1px solid var(--line);border-radius:12px;padding:13px;display:flex;flex-direction:column;gap:8px;font-size:.88rem}
.tag{font:600 .68rem ui-monospace,monospace;letter-spacing:.09em;text-transform:uppercase;color:var(--muted)}
dl{margin:0;display:grid;grid-template-columns:78px minmax(0,1fr);gap:4px 8px}dt{color:var(--muted)}dd{margin:0;overflow-wrap:anywhere}
.block input{font:inherit;background:var(--bg);border:1px solid var(--line);color:var(--fg);border-radius:8px;padding:9px 10px;width:100%}
details.q{border-top:1px solid var(--line);padding-top:8px}summary{cursor:pointer;font-weight:600}details.q p{color:var(--muted);margin:6px 0 0;white-space:pre-line}
.team{display:flex;gap:8px;overflow-x:auto}.team a{flex:0 0 auto;display:flex;gap:8px;align-items:center;background:var(--bg);border:1px solid var(--line);border-radius:30px;padding:4px 12px 4px 4px;font-size:.8rem;text-decoration:none}
.av{width:30px;height:30px;border-radius:50%;background:var(--brand);display:grid;place-items:center;font-weight:700;font-size:.7rem;object-fit:cover}
.qrs{display:grid;grid-template-columns:1fr 1fr;gap:12px;text-align:center;font-size:.76rem;color:var(--muted);padding-top:8px}
.qr{background:#fff;padding:8px;border-radius:10px}.qr svg{display:block;width:100%;height:auto}
.logo{height:30px;width:auto;align-self:flex-start;background:#fff;padding:4px 6px;border-radius:6px}
.banner{display:block;border-left:3px solid var(--brand);background:var(--surface);padding:10px 12px;border-radius:0 8px 8px 0;text-decoration:none;font-size:.88rem}`;
const LIGHT=`*{box-sizing:border-box}[hidden]{display:none!important}
:root{--bg:#eceef3;--surface:#fff;--s2:#f5f6fa;--line:#d8dce6;--fg:#161922;--muted:#5b6274;--accent:#2b3fd6}
@media (prefers-color-scheme:dark){:root{--bg:#0e1015;--surface:#171a22;--s2:#1e222c;--line:#2c313e;--fg:#eceef3;--muted:#9aa2b4;--accent:#93a0ff;color-scheme:dark}}
body{margin:0;background:var(--bg);color:var(--fg);font:15px/1.5 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}
.wrap{max-width:860px;margin:0 auto;padding:22px 16px 60px;display:flex;flex-direction:column;gap:16px}
h1{font-size:1.4rem;margin:0}h2{font-size:1.02rem;margin:0}p{margin:0}.small{font-size:.83rem;color:var(--muted)}
.panel{background:var(--surface);border:1px solid var(--line);border-radius:12px;padding:16px;display:flex;flex-direction:column;gap:12px;min-width:0}
.row{display:flex;gap:8px;flex-wrap:wrap;align-items:center}.g{display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:10px}
label.f{display:flex;flex-direction:column;gap:4px;font-size:.78rem;color:var(--muted);min-width:0}
input[type=text],input[type=password],textarea,select{font:inherit;font-size:.9rem;color:var(--fg);background:var(--s2);border:1px solid var(--line);border-radius:7px;padding:8px 10px;width:100%;min-width:0}
textarea{min-height:64px}input[type=file]{font-size:.8rem;max-width:100%}
.btn{font:600 .86rem system-ui,sans-serif;border:1px solid var(--line);background:var(--s2);color:var(--fg);padding:8px 12px;border-radius:8px;cursor:pointer;text-decoration:none;display:inline-block}
.btn.pri{background:var(--accent);color:var(--bg);border-color:var(--accent)}
.box{border:1px solid var(--line);border-radius:10px;padding:12px;display:flex;flex-direction:column;gap:10px;background:var(--s2)}
.mail{background:#fff;color:#1a1d24;border:1px solid #e4e6eb;border-radius:12px;padding:18px;overflow-x:auto}
ol{margin:0;padding-left:20px;display:flex;flex-direction:column;gap:5px;font-size:.9rem}a{color:var(--accent)}
video#cam{width:100%;border-radius:12px;background:#000}`;
const page=(title,body,o)=>{o=o||{};return new Response('<!doctype html><html lang="'+(o.lang||'en')+'"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex">'+(o.head||'')+'<title>'+esc(title)+'</title><style>'+(o.css||LIGHT)+'</style></head><body'+(o.battr||'')+'>'+body+'</body></html>',{status:o.status||200,headers:{'content-type':'text/html; charset=utf-8','cache-control':'no-store','x-robots-tag':'noindex','x-content-type-options':'nosniff','referrer-policy':'strict-origin-when-cross-origin'}})};
const QRLIB='<script src="https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.4.4/qrcode.min.js"></'+'script>';
const run=f=>'<script>('+f.toString()+')()</'+'script>';

function cardClient(){
 var q=document.getElementById('faqq');
 if(q)q.addEventListener('input',function(){var s=q.value.toLocaleLowerCase().trim(),n=0;document.querySelectorAll('details.q').forEach(function(d){var hit=!s||d.textContent.toLocaleLowerCase().indexOf(s)>-1;d.hidden=!hit;if(hit)n++});document.getElementById('faqnone').hidden=n>0});
 if(typeof qrcode!=='undefined'){qrcode.stringToBytes=qrcode.stringToBytesFuncs['UTF-8'];
  document.querySelectorAll('[data-qr]').forEach(function(el){try{var k=qrcode(0,'M');k.addData(el.dataset.qr,'Byte');k.make();var n=k.getModuleCount(),d='';
   for(var y=0;y<n;y++)for(var x=0;x<n;x++)if(k.isDark(y,x))d+='M'+x+' '+y+'h1v1h-1z';
   el.innerHTML='<svg viewBox="0 0 '+n+' '+n+'" shape-rendering="crispEdges"><path fill="#0c0e13" d="'+d+'"/></svg>'}catch(e){}})}
}
const ORG={en:'Organization',es:'Organigrama',tr:'Organizasyon',pt:'Organograma',fr:'Organigramme',zh:'组织架构'};
function orgBlock(S,m,lang){
 if(!m.orgOn)return '';
 const lim=v=>{v=Number(v);return v>=9?9:v>=1?Math.floor(v):0},up=lim(m.up),dn=lim(m.down);if(!up&&!dn)return '';
 const by=id=>S.members.find(x=>x.id===id),chain=[],seen=new Set([m.id]);let cur=m;
 while(chain.length<up){const b=by(cur.boss);if(!b||seen.has(b.id))break;seen.add(b.id);chain.push(b);cur=b}
 chain.reverse();
 const kids=x=>S.members.filter(y=>y.boss===x.id&&!seen.has(y.id));
 const box=(x,bg,fg,self)=>'<a class="ob'+(self?' me':'')+'" href="/'+slug(x.name)+'?lang='+lang+'" style="background:'+bg+';color:'+fg+'"><b>'+esc(x.name)+'</b><span>'+esc(x.title)+'</span></a>';
 const sub=(x,d)=>{const ks=d<dn?kids(x):[];ks.forEach(k=>seen.add(k.id));return '<li>'+box(x,d===1?'#f08a24':'#f2c230',d===1?'#ffffff':'#1a1d24')+(ks.length?'<ul>'+ks.map(k=>sub(k,d+1)).join('')+'</ul>':'')+'</li>'};
 const self=()=>{const ks=dn?kids(m):[];ks.forEach(k=>seen.add(k.id));return '<li>'+box(m,'#1f9d57','#ffffff',1)+(ks.length?'<ul>'+ks.map(k=>sub(k,1)).join('')+'</ul>':'')+'</li>'};
 const node=i=>i>=chain.length?self():'<li>'+(chain.length-i>=2?box(chain[i],'#0b2a5b','#ffffff'):box(chain[i],'#8cc3f4','#0b2a5b'))+'<ul>'+node(i+1)+'</ul></li>';
 const css='<style>.og{overflow-x:auto;padding:4px 0 8px}.og ul{padding:18px 0 0;margin:0;position:relative;display:flex;justify-content:center;width:max-content;min-width:100%}.og>ul{padding-top:0}.og li{list-style:none;position:relative;padding:18px 2px 0;display:flex;flex-direction:column;align-items:center}.og>ul>li{padding-top:0}.og li::before,.og li::after{content:"";position:absolute;top:0;right:50%;width:50%;height:18px;border-top:2px solid #7a8194}.og li::after{right:auto;left:50%;border-left:2px solid #7a8194}.og li:only-child::before,.og li:only-child::after{display:none}.og li:only-child{padding-top:18px}.og>ul>li:only-child{padding-top:0}.og li:first-child::before,.og li:last-child::after{border:0 none}.og li:last-child::before{border-right:2px solid #7a8194;border-radius:0 6px 0 0}.og li:first-child::after{border-radius:6px 0 0 0}.og ul ul::before{content:"";position:absolute;top:0;left:50%;border-left:2px solid #7a8194;height:18px}.og .ob{display:flex;flex-direction:column;align-items:center;text-align:center;min-width:80px;max-width:104px;padding:6px 4px;border-radius:10px;text-decoration:none;line-height:1.25;box-shadow:0 1px 3px rgba(0,0,0,.25);border:1px solid rgba(255,255,255,.18)}.og .ob b{font-size:11.5px}.og .ob span{font-size:9.5px;opacity:.9}.og .ob.me{outline:3px solid rgba(31,157,87,.35);outline-offset:2px}</style>';
 return '<div class="block"><span class="tag">'+ORG[lang]+'</span>'+css+'<div class="og"><ul>'+node(0)+'</ul></div></div>';
}
function cardPage(S,m,lang,o){
 const c=S.company,t=L[lang],sl=slug(m.name),wa=waUrl(m,t),soc=socials(m),url=o+'/'+sl;
 const hero=m.video?`<video src="/img/v-${m.id}?v=${m.video}" autoplay muted loop playsinline></video>`:m.photo?`<img src="/img/p-${m.id}?v=${m.photo}" alt="${esc(m.name)}">`:`<div class="weave">${esc(initials(m.name))}</div>`;
 const kv=(k,v)=>v?`<dt>${k}</dt><dd>${v}</dd>`:'';
 const others=S.members.filter(x=>x.id!==m.id);
 const addr=[c.address,c.city,c.country].filter(Boolean).join(', ');
 const tel=digits(m.phone)?'+'+digits(m.phone):'';
 const body=`<div class="shell"><div class="hero">${hero}
  <div class="langs">${['en','es','tr','pt','fr','zh'].map(l=>`<a href="?lang=${l}"${l===lang?' class="on"':''}>${l.toUpperCase()}</a>`).join('')}</div>
  <div class="hero-t"><b>${esc(m.name)}</b><span>${esc([m.title,c.name].filter(Boolean).join(' · '))}</span></div></div>
 <div class="body">
  <div class="acts"><a class="save" href="/go/${sl}/vcf">${t.save}</a>${wa?`<a class="wa" href="/go/${sl}/wa?lang=${lang}">${t.wa}</a>`:''}${tel?`<a href="tel:${tel}">${t.call}</a>`:''}${m.email?`<a href="mailto:${esc(m.email)}">${t.mail}</a>`:''}${soc.map(s=>`<a href="/go/${sl}/${s[0].toLowerCase()}" rel="noopener">${s[0]}</a>`).join('')}</div>
  ${c.banner&&c.banner.on&&c.banner.text?`<a class="banner" href="${esc(safeUrl(c.banner.link))}">${esc(c.banner.text)} →</a>`:''}
  ${m.phone||m.email||m.office?`<div class="block"><dl>${kv(t.phone,esc(m.phone))}${kv(OFFICE[lang],esc(m.office))}${kv(t.email,esc(m.email))}</dl></div>`:''}
  <div class="block"><span class="tag">${t.company}</span>${c.logo?`<img class="logo" src="/img/logo?v=${c.logo}" alt="${esc(c.name)}">`:`<b style="font-size:1.05rem">${esc(c.name)}</b>`}
   ${c.tagline?`<span style="color:var(--muted)">${esc(c.tagline)}</span>`:''}
   <dl>${kv(t.addr,esc(addr))}${kv(t.phone,esc(c.phone))}${kv(t.email,esc(c.email))}${kv(t.web,c.web?`<a href="${esc(webUrl(c))}" rel="noopener">${esc(c.web)}</a>`:'')}${kv(t.hours,esc(c.hours))}</dl></div>
  ${S.faq.length?`<div class="block"><span class="tag">${t.faq}</span><input type="search" id="faqq" placeholder="${t.search}" aria-label="${t.search}">
   ${S.faq.map(f=>`<details class="q"><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join('')}<p id="faqnone" hidden style="color:var(--muted);margin:0">${t.none}</p></div>`:''}
  ${orgBlock(S,m,lang)}
  <details class="block"><summary>${t.qr}</summary><div class="qrs"><div><div class="qr" data-qr="${esc(vcard(m,c))}"></div>${t.qr1}</div><div><div class="qr" data-qr="${esc(url)}"></div>${t.qr2}</div></div></details>
 </div></div>${QRLIB}${run(cardClient)}`;
 const head=`<meta property="og:title" content="${esc(m.name)}"><meta property="og:description" content="${esc([m.title,c.name].filter(Boolean).join(' · '))}">${m.photo?`<meta property="og:image" content="${o}/img/p-${m.id}?v=${m.photo}">`:''}<meta name="theme-color" content="#0c0e13">`;
 return page(m.name+' · '+c.name,body,{css:CSS,lang,head,battr:` style="--brand:${color(c)}"`});
}
function ctplOk(S,id){return (S.ctpl||[]).some(x=>x&&x.id===id)}
function tlab(S,k){return TPLN[k]?k.slice(1)+' · '+TPLN[k]:'★ '+((S.ctpl||[]).find(x=>x.id===k)||{}).name}
function cleanCtpl(a){if(!Array.isArray(a))return [];const seen={};return a.filter(x=>x&&typeof x.id==='string'&&/^c[a-z0-9]{1,12}$/i.test(x.id)&&!seen[x.id]&&(seen[x.id]=1)).slice(0,30).map(x=>({id:x.id,name:String(x.name||'Template').slice(0,40),cfg:(x.cfg&&typeof x.cfg==='object'&&JSON.stringify(x.cfg).length<4000)?x.cfg:{}}))}
const TPLN={t1:'Classic',t2:'Compact',t3:'Top bar',t4:'Bottom bar',t5:'Vertical',t6:'Logo right',t7:'Minimal',t8:'Card',t9:'Bold name',t10:'Two columns'};
const FAIR={en:'TRADE FAIR CALENDAR',es:'CALENDARIO DE FERIAS',tr:'FUAR TAKVİMİ',pt:'CALENDÁRIO DE FEIRAS',fr:'CALENDRIER DES SALONS',zh:'展会日程'},HOL={en:'HOLIDAY NOTICE',es:'AVISO DE VACACIONES',tr:'TATİL BİLGİSİ',pt:'AVISO DE FÉRIAS',fr:'AVIS DE FERMETURE',zh:'假期通知'};
const sigCfg=S=>{const g=S.sig||{};return {tpl:TPLN[g.tpl]||ctplOk(S,g.tpl)?g.tpl:'t1',blocks:Array.isArray(g.blocks)?g.blocks.slice(0,30):[]}};
function blocksHtml(S,lang,o,R,a){
 const today=new Date().toISOString().slice(0,10);
 const lab=x=>`<div style="${a}font-size:10px;font-weight:bold;letter-spacing:1.2px;color:${R.accent};padding-bottom:4px">${esc(String(x).toLocaleUpperCase(lang==='tr'?'tr':lang))}</div>`;
 const fs=`${a}font-size:12px;line-height:17px;color:${R.text}`;
 const DYN=['fair','holiday','text'];
 const one=b=>{const T=b.title;
  if(b.dyn&&DYN.includes(b.type)){const alt=b.on?[T||(b.type==='fair'?FAIR[lang]:b.type==='holiday'?HOL[lang]:''),b.type==='fair'?(b.items||[]).filter(x=>x&&x.name).map(x=>[x.name,x.date,x.place].filter(Boolean).join(' - ')).join('; '):b.text].filter(Boolean).join(': '):'';
   return `<img src="${o}/img/d-${esc(b.id)}-${lang}" width="360" alt="${esc(alt)}" style="display:block;border:0;width:360px;max-width:100%;height:auto">`}
  switch(b.type){
  case 'fair':{const it=(b.items||[]).filter(x=>x&&x.name);if(!it.length)return '';
   return lab(T||FAIR[lang])+it.map(x=>`<table cellpadding="0" cellspacing="0" border="0" style="margin-bottom:3px"><tr>${/^[a-z]{2}$/i.test(x.cc||'')?`<td style="padding-right:6px;vertical-align:middle"><img src="${o}/flag/${x.cc.toLowerCase()}.png" width="16" alt="${esc(x.cc.toUpperCase())}" style="display:block;border:0;width:16px;height:auto"></td>`:''}<td style="${fs}"><b>${esc(x.name)}</b>${x.date?' &middot; '+esc(x.date):''}${x.place?' &middot; '+esc(x.place):''}</td></tr></table>`).join('')}
  case 'holiday':{if(!b.text||(b.from&&today<b.from)||(b.to&&today>b.to))return '';return lab(T||HOL[lang])+`<div style="${fs}">${esc(b.text)}</div>`}
  case 'text':{if(!b.text)return '';return (T?lab(T):'')+`<div style="${fs}">${esc(b.text)}</div>`}
  case 'link':{if(!b.url||!b.label)return '';return `<a href="${esc(safeUrl(b.url))}" style="${a}font-size:12px;font-weight:bold;color:${R.accent};text-decoration:none">${esc(b.label)} &rarr;</a>`}
  case 'image':case 'gif':{if(!b.file)return '';const w=Math.min(600,Math.max(40,+b.width||200)),im=`<img src="${o}/img/b-${esc(b.id)}" width="${w}" alt="${esc(T||'')}" style="display:block;border:0;width:${w}px;height:auto">`;return (T?lab(T):'')+(b.url?`<a href="${esc(safeUrl(b.url))}">${im}</a>`:im)}
  case 'pdf':{if(!b.file)return '';return `<a href="${o}/img/b-${esc(b.id)}" style="${a}font-size:12px;font-weight:bold;color:${R.accent};text-decoration:none">&#128196; ${esc(b.label||T||'PDF')}</a>`}
  default:return ''}};
 const parts=sigCfg(S).blocks.filter(b=>b&&(b.on||(b.dyn&&DYN.includes(b.type)))&&/^[a-z0-9]+$/i.test(b.id||'x')).map(b=>({c:String(b.col)==='2'?2:1,d:!!(b.dyn&&DYN.includes(b.type)),h:one(b)})).filter(x=>x.h);
 if(!parts.length)return '';const w=x=>x.d?x.h:`<div style="padding-bottom:8px">${x.h}</div>`;
 const c1=parts.filter(x=>x.c===1).map(w).join(''),c2=parts.filter(x=>x.c===2).map(w).join('');
 const body=!c2?c1:!c1?c2:`<table cellpadding="0" cellspacing="0" border="0"><tr><td valign="top" style="padding-right:28px">${c1}</td><td valign="top">${c2}</td></tr></table>`;
 return parts.some(x=>!x.d)?`<div style="padding-top:12px"><div style="padding-bottom:8px"><img src="${o}/c/line.png" width="100%" height="1" alt="" style="display:block;border:0;width:100%;height:1px"></div>${body}</div>`:body}
function sigHtml(S,m,lang,o,tpl){
 const c=S.company,R=roles(c),t=L[lang],url=o+'/'+slug(m.name)+'?s=sig',wa=waUrl(m,t)?o+'/go/'+slug(m.name)+'/wa?s=sig&lang='+lang:'',soc=socials(m),a='font-family:Arial,Helvetica,sans-serif;';
 const CU=(S.ctpl||[]).find(x=>x&&x.id===tpl)||(!TPLN[tpl]&&tpl!=='compact'?(S.ctpl||[]).find(x=>x&&x.id===sigCfg(S).tpl):null);tpl=CU?CU.id:TPLN[tpl]?tpl:tpl==='compact'?'t2':sigCfg(S).tpl;
 const bar=h=>`<img src="${o}/c/line.png" width="100%" height="${h}" alt="" style="display:block;border:0;width:100%;height:${h}px">`;
 const pic=(sz,r)=>m.photo?`<img src="${o}/img/p-${m.id}?v=${m.photo}" width="${m.video?Math.round(sz*0.75):sz}" height="${m.video?Math.round(sz*1.25):sz}" alt="${esc(m.name)}" style="display:block;border-radius:${r||12}px;border:0">`:`<table cellpadding="0" cellspacing="0"><tr><td width="${sz}" height="${sz}" align="center" bgcolor="${R.primary}" style="${a}border-radius:${r||12}px;color:#ffffff;font-size:${Math.round(sz/3)}px;font-weight:bold">${esc(initials(m.name))}</td></tr></table>`;
 const brand=h=>c.logo?`<img src="${o}/img/logo" height="${h}" alt="${esc(c.name)}" style="display:block;border:0;height:${h}px;width:auto">`:`<span style="${a}font-size:12px;font-weight:bold;letter-spacing:1.5px;color:${R.primary}">${esc(c.name.toLocaleUpperCase(lang))}</span>`;
 const lk=(h,l)=>`<a href="${esc(h)}" style="color:${R.accent};text-decoration:none">${esc(l)}</a>`;
 const btn=(h,l,bg)=>`<a href="${esc(h)}" style="${a}display:inline-block;background:${bg};color:#ffffff;font-size:12px;font-weight:bold;text-decoration:none;padding:7px 12px;border-radius:6px">${esc(l)}</a>`;
 const l1=[esc(m.phone),esc(m.office),m.email?lk('mailto:'+m.email,m.email):''].filter(Boolean).join(' &nbsp;|&nbsp; ');
 const l2=[c.web?lk(webUrl(c),c.web):'',esc([c.address,c.city,c.country].filter(Boolean).join(', '))].filter(Boolean).join(' &nbsp;|&nbsp; ');
 const l3=soc.map(s=>lk(s[1],s[0])).join(' &nbsp;|&nbsp; ');
 const ct=(n)=>`<div style="${a}font-size:12px;line-height:18px;color:${R.text}">${[l1,l2,l3].filter(Boolean).slice(0,n||3).join('<br>')}</div>`;
 const nm=(sz,col)=>`<div style="${a}font-size:${sz}px;font-weight:bold;color:${col||R.text}">${esc(m.name)}</div><div style="${a}font-size:12px;color:#6a7080;padding-bottom:6px">${esc(m.title)}</div>`;
 const bt=`<div style="padding-top:10px">${wa?btn(wa,t.wa,'#1f9d57')+' &nbsp; ':''}${btn(url,t.card,R.primary)}</div>`;
 const tb=x=>`<table cellpadding="0" cellspacing="0" border="0" style="${a}color:${R.text}">${x}</table>`;
 const td=(s,x)=>`<td style="vertical-align:top;${s||''}">${x}</td>`;
 const dv=`<td width="3" style="vertical-align:top"><img src="${o}/c/line.png" width="3" height="104" alt="" style="display:block;border:0"></td>`;
 const txt=`<div style="padding-bottom:6px">${brand(26)}</div>${nm(16)}${ct()}${bt}`;
 const cust=cfg=>{
 cfg=cfg&&typeof cfg==='object'?cfg:{};
 const hx=(v,d)=>/^#[0-9a-f]{6}$/i.test(v||'')?v:d;
 const nu=(v,lo,hi,d)=>{v=+v;return isFinite(v)?Math.min(hi,Math.max(lo,Math.round(v))):d};
 const FF={arial:'Arial,Helvetica,sans-serif',georgia:'Georgia,serif',verdana:'Verdana,Geneva,sans-serif',tahoma:'Tahoma,Geneva,sans-serif',trebuchet:"'Trebuchet MS',Helvetica,sans-serif",courier:"'Courier New',Courier,monospace"};
 const fa='font-family:'+(FF[cfg.font]||FF.arial)+';';
 const fs=nu(cfg.fs,10,16,12),ns=nu(cfg.ns,12,30,16),ps=nu(cfg.ps,40,140,88),pr=nu(cfg.pr,0,70,12),lh=nu(cfg.lh,14,70,26),gap=nu(cfg.gap,0,20,6),dw=nu(cfg.dw,1,8,3),sp=nu(cfg.sp,4,40,14);
 const cn=hx(cfg.nc,R.text),ctx=hx(cfg.tc,R.text),ca=hx(cfg.ac,R.accent),cb=hx(cfg.bc,R.primary),cl=hx(cfg.lc,hx(R.line,R.primary)),cm=hx(cfg.mc,'#6a7080');
 const lk2=(h,l)=>'<a href="'+esc(h)+'" style="color:'+ca+';text-decoration:none">'+esc(l)+'</a>';
 const nameH='<div style="'+fa+'font-size:'+ns+'px;line-height:'+(ns+4)+'px;font-weight:'+(cfg.nb===false?'normal':'bold')+';color:'+cn+'">'+esc(m.name)+'</div>'+(m.title?'<div style="'+fa+'font-size:'+Math.max(10,fs)+'px;color:'+cm+(cfg.tu?';letter-spacing:1.5px':'')+'">'+esc(cfg.tu?m.title.toLocaleUpperCase(lang):m.title)+'</div>':'');
 const ci=k=>cfg.ci&&typeof cfg.ci==='object'?cfg.ci[k]!==false:true;
 const it=[];if(ci('ph')&&m.phone)it.push(esc(m.phone));if(ci('of')&&m.office)it.push(esc(m.office));if(ci('em')&&m.email)it.push(lk2('mailto:'+m.email,m.email));
 const g2=[];if(ci('wb')&&c.web)g2.push(lk2(webUrl(c),c.web));if(ci('ad')){const ad=[c.address,c.city,c.country].filter(Boolean).join(', ');if(ad)g2.push(esc(ad))}
 const g3=ci('so')?soc.map(s=>lk2(s[1],s[0])):[];
 const sep=' &nbsp;|&nbsp; ';
 const lines=cfg.cs==='stack'?it.concat(g2,g3):[it.join(sep),g2.join(sep),g3.join(sep)].filter(Boolean);
 const contactH=lines.length?'<div style="'+fa+'font-size:'+fs+'px;line-height:'+(fs+6)+'px;color:'+ctx+'">'+lines.join('<br>')+'</div>':'';
 const bst=cfg.bs==='outline'||cfg.bs==='link'?cfg.bs:'fill',brd=nu(cfg.br,0,20,6);
 const bn=(h,l,bg)=>'<a href="'+esc(h)+'" style="'+fa+'display:inline-block;font-size:'+fs+'px;font-weight:bold;text-decoration:none;'+(bst==='fill'?'padding:7px 12px;border-radius:'+brd+'px;background:'+bg+';color:#ffffff':bst==='outline'?'padding:6px 11px;border-radius:'+brd+'px;border:1px solid '+bg+';color:'+bg:'padding:0 12px 0 0;color:'+bg)+'">'+esc(l)+(bst==='link'?' &rarr;':'')+'</a>';
 const btH=[cfg.bw!==false&&wa?bn(wa,t.wa,'#1f9d57'):'',cfg.bk!==false?bn(url,t.card,cb):''].filter(Boolean).join(' &nbsp; ');
 const RH={logo:brand(lh),name:nameH,
  tagline:c.tagline?'<div style="'+fa+'font-size:'+fs+'px;font-style:italic;color:'+cm+'">'+esc(c.tagline)+'</div>':'',
  contact:contactH,buttons:btH?'<div style="padding-top:2px">'+btH+'</div>':'',
  text:cfg.tx?'<div style="'+fa+'font-size:'+fs+'px;line-height:'+(fs+5)+'px;color:'+cm+'">'+String(cfg.tx).slice(0,300).split('\n').map(x=>esc(x)).join('<br>')+'</div>':''};
 const seen={};let rows=(Array.isArray(cfg.rows)?cfg.rows:[]).filter(r=>r&&RH[r.k]!==undefined&&!seen[r.k]&&(seen[r.k]=1));
 Object.keys(RH).forEach(k=>{if(!seen[k])rows.push({k:k,on:k!=='tagline'&&k!=='text'})});
 const textCol='<table cellpadding="0" cellspacing="0" border="0">'+rows.filter(r=>r.on!==false&&RH[r.k]).map(r=>'<tr><td style="padding-bottom:'+gap+'px">'+RH[r.k]+'</td></tr>').join('')+'</table>';
 const lay=['left','right','top','none'].includes(cfg.lay)?cfg.lay:'left',photoH=lay==='none'?'':pic(ps,pr),va=cfg.va==='mid'?'middle':'top';
 const T2=x=>'<table cellpadding="0" cellspacing="0" border="0" style="'+fa+'color:'+ctx+'">'+x+'</table>';
 const td2=(s,x)=>'<td style="vertical-align:'+va+';'+s+'">'+x+'</td>';
 const vd=cfg.dv===false?'':'<td width="'+dw+'" bgcolor="'+cl+'" style="width:'+dw+'px;font-size:1px;line-height:1px">&nbsp;</td>';
 let core;
 if(lay==='none')core=T2('<tr>'+td2('',textCol)+'</tr>');
 else if(lay==='top')core=T2('<tr><td style="padding-bottom:'+sp+'px">'+photoH+'</td></tr>'+(cfg.dv===false?'':'<tr><td height="'+dw+'" bgcolor="'+cl+'" style="height:'+dw+'px;font-size:1px;line-height:1px">&nbsp;</td></tr>')+'<tr><td style="padding-top:'+sp+'px">'+textCol+'</td></tr>');
 else if(lay==='right')core=T2('<tr>'+td2('padding-right:'+sp+'px',textCol)+vd+td2('padding-left:'+sp+'px',photoH)+'</tr>');
 else core=T2('<tr>'+td2('padding-right:'+sp+'px',photoH)+vd+td2('padding-left:'+sp+'px',textCol)+'</tr>');
 if(cfg.cf)core='<table cellpadding="0" cellspacing="0" border="0" style="border:1px solid '+hx(cfg.cc,'#e3e6ee')+';border-radius:'+nu(cfg.cr,0,24,10)+'px;'+(cfg.cg?'background:'+hx(cfg.cg,'#ffffff')+';':'')+'"><tr><td style="padding:14px">'+core+'</td></tr></table>';
 return core};
 const T0={
  t1:()=>tb(`<tr>${td('padding-right:14px',pic(88))}${dv}${td('padding-left:14px',txt)}</tr>`),
  t2:()=>tb(`<tr><td style="padding-bottom:6px">${brand(22)}</td></tr><tr>${td('',nm(16)+ct()+bt)}</tr>`),
  t3:()=>tb(`<tr><td colspan="2" style="padding-bottom:10px">${bar(4)}</td></tr><tr>${td('padding-right:14px',pic(80))}${td('',nm(17)+ct()+bt)}</tr>`),
  t4:()=>tb(`<tr>${td('padding-right:14px',pic(80))}${td('',nm(16)+ct()+bt)}</tr><tr><td colspan="2" style="padding-top:12px">${bar(2)}</td></tr><tr><td colspan="2" style="padding-top:8px">${brand(22)}</td></tr>`),
  t5:()=>tb(`<tr><td>${pic(96,48)}</td></tr><tr><td style="padding-top:10px">${nm(18)}${ct()}</td></tr><tr><td style="padding:10px 0">${bar(2)}</td></tr><tr><td>${brand(24)}${bt}</td></tr>`),
  t6:()=>tb(`<tr>${td('padding-right:24px',nm(16)+ct()+bt)}${td('text-align:right',brand(28)+`<div style="padding-top:8px">${pic(72)}</div>`)}</tr>`),
  t7:()=>tb(`<tr><td style="${a}font-size:14px;color:${R.text}"><b>${esc(m.name)}</b> <span style="color:#6a7080">&middot; ${esc(m.title)}</span></td></tr><tr><td style="padding:4px 0">${bar(1)}</td></tr><tr><td>${ct(2)}</td></tr>`),
  t8:()=>`<table cellpadding="0" cellspacing="0" border="0" style="border:1px solid #e3e6ee;border-radius:10px"><tr><td style="padding:14px">${tb(`<tr>${td('padding-right:14px',pic(80))}${td('',nm(16)+ct()+bt)}</tr>`)}</td></tr><tr><td style="padding:0 14px 12px">${brand(20)}</td></tr></table>`,
  t9:()=>tb(`<tr>${td('padding-right:20px',`<div style="${a}font-size:22px;font-weight:bold;color:${R.primary}">${esc(m.name)}</div><div style="${a}font-size:11px;letter-spacing:2px;color:#6a7080;padding:2px 0 8px">${esc(m.title.toLocaleUpperCase(lang))}</div>${bar(3)}<div style="padding-top:8px">${ct()}</div>${bt}`)}${td('',pic(88))}</tr>`),
  t10:()=>tb(`<tr>${td('padding-right:20px',pic(72)+`<div style="padding-top:8px">${nm(15)}</div>`)}${td('',`<div style="padding-bottom:6px">${brand(24)}</div>${ct()}${bt}`)}</tr>`)
 };
 const T=CU?cust(CU.cfg):T0[tpl]();
 const bl=blocksHtml(S,lang,o,R,a);
 const banner=c.banner&&c.banner.on&&c.banner.text?`<tr><td style="padding-top:12px"><a href="${esc(safeUrl(c.banner.link))}" style="${a}display:block;background:#f1f3f8;border-left:3px solid ${R.primary};padding:8px 12px;font-size:12px;color:#1a1d24;text-decoration:none">${esc(c.banner.text)} &rarr;</a></td></tr>`:'';
 return `<table cellpadding="0" cellspacing="0" border="0" style="${a}color:${R.text}"><tr><td>${T}</td></tr>${bl?`<tr><td>${bl}</td></tr>`:''}${banner}</table>`;
}
function sigClient(){
 var box=document.getElementById('sig'),msg=document.getElementById('msg');
 document.getElementById('copy').addEventListener('click',function(){
  var done=function(){msg.textContent='Copied. Paste it into the Gmail or Outlook signature box.'};
  var sel=function(){var r=document.createRange();r.selectNodeContents(box);var s=getSelection();s.removeAllRanges();s.addRange(r);try{if(document.execCommand('copy')){done();return}}catch(e){}msg.textContent='Signature selected; press Ctrl/Cmd+C to copy.'};
  try{navigator.clipboard.write([new ClipboardItem({'text/html':new Blob([box.innerHTML],{type:'text/html'}),'text/plain':new Blob([box.innerText],{type:'text/plain'})})]).then(done,sel)}catch(e){sel()}});
 document.getElementById('copyh').addEventListener('click',function(){navigator.clipboard.writeText(box.innerHTML).then(function(){msg.textContent='HTML copied.'},function(){msg.textContent='Could not copy.'})});
}
function plainPanel(S,m,lang,o){const c=S.company,L2={en:'Digital card: ',es:'Tarjeta digital: ',tr:'Dijital kartım: ',pt:'Cartão digital: ',fr:'Carte numérique : ',zh:'电子名片：'};
 const t=[m.name,[m.title,c.name].filter(Boolean).join(' | '),[m.phone,m.office].filter(Boolean).join(' | '),m.email,c.web].filter(Boolean).concat([L2[lang]+o+'/'+slug(m.name)+'?s=sig']).join(' | ');
 return '<div class="panel"><h2>For Gmail on your phone (plain text)</h2><p class="small">The Gmail mobile app does not support image signatures. This is a single line with no line breaks because the phone app mangles them. In Gmail on your phone: Settings → your account → Signature, then paste. The card link always stays current.</p><textarea id="plain" readonly rows="4" style="width:100%;box-sizing:border-box">'+esc(t)+'</textarea><div class="row"><button class="btn pri" id="cpt">Copy plain text</button></div><script>document.getElementById("cpt").onclick=function(){var t=document.getElementById("plain");t.select();try{navigator.clipboard.writeText(t.value)}catch(e){document.execCommand("copy")}this.textContent="Copied"}</script></div>'}
function sigPage(S,m,lang,o,tpl){
 const sl=slug(m.name),cur=TPLN[tpl]||ctplOk(S,tpl)?tpl:tpl==='compact'?'t2':sigCfg(S).tpl,h=sigHtml(S,m,lang,o,cur),q=(l,t)=>`/${sl}/signature?lang=${l}&tpl=${t}`;
 return page(m.name+' · signature',`<div class="wrap"><div><p class="small">Email signature</p><h1>${esc(m.name)}</h1></div>
 <div class="mail"><div id="sig">${h}</div></div>
 <div class="panel"><div class="row"><button class="btn pri" id="copy">Copy signature</button><button class="btn" id="copyh">Copy HTML</button><a class="btn" href="/${sl}?lang=${lang}">Open card</a><a class="btn" href="/${sl}/setup">Setup page</a></div>
  <div class="row"><span class="small">Language</span>${['en','es','tr','pt','fr','zh'].map(l=>`<a class="btn${l===lang?' pri':''}" href="${q(l,cur)}">${l.toUpperCase()}</a>`).join('')}</div>
  <div class="row"><span class="small">Template</span>${Object.keys(TPLN).concat((S.ctpl||[]).map(x=>x.id)).map(k=>`<a class="btn${k===cur?' pri':''}" href="${q(lang,k)}">${tlab(S,k)}</a>`).join('')}</div>
  <p class="small" id="msg">${h.length.toLocaleString('en')} characters (Gmail limit 10,000).</p></div>${plainPanel(S,m,lang,o)}</div>${run(sigClient)}`);
}
function setupPage(S,m,lang,o){
 const h=sigHtml(S,m,lang,o,''),first=esc(m.name.split(' ')[0]);
 return page(m.name+' · signature setup',`<div class="wrap"><div><p class="small">Email signature setup</p><h1>Hi ${first}, set up your signature in 2 minutes</h1><p class="small">Open this page on your computer. The Gmail phone app cannot create rich signatures; setting it up on a computer is enough, and it then applies on your phone too.</p></div>
 <div class="panel"><h2>1 · Copy your signature</h2><div class="mail"><div id="sig">${h}</div></div><div class="row"><button class="btn pri" id="copy">Copy signature</button><button class="btn" id="copyh" hidden>.</button></div><p class="small" id="msg">If copying does not work, select the signature with the mouse and press Ctrl+C (Mac: Cmd+C).</p></div>
 <div class="panel"><h2>2a · Gmail</h2><ol><li>Open Gmail, click the gear icon at the top right → <b>See all settings</b>.</li><li>On the <b>General</b> tab scroll to <b>Signature</b>, click <b>Create new</b> and give it a name (e.g. ${esc(S.company.name)}).</li><li>Click into the box and <b>paste</b> (Ctrl+V).</li><li>Under "Signature defaults" choose this signature for <b>New emails</b> and for <b>Replies/forwards</b>.</li><li>Click <b>Save changes</b> at the very bottom. Open a new email to check the signature.</li></ol></div>
 <div class="panel"><h2>2b · Outlook</h2><ol><li><b>New Outlook / Outlook on the web:</b> Settings (gear) → Account → <b>Signatures</b> → New signature.</li><li><b>Classic Outlook (Windows):</b> File → Options → Mail → <b>Signatures</b> → New.</li><li><b>Outlook for Mac:</b> Outlook menu → Settings → Signatures → +.</li><li><b>Paste</b> into the signature box, set it as the default for new messages and replies, and save.</li></ol></div>
 ${plainPanel(S,m,lang,o)}<div class="panel"><h2>Tips</h2><ul><li>If images do not show, the recipient may need to click "Show images".</li><li>Title, phone and email text freeze the moment you paste the signature; if your details change, copy the signature again from this page. The logo, colour lines and card links stay up to date by themselves.</li></ul></div></div>${run(sigClient)}`);
}
function adminClient(){
 var $=function(s){return document.querySelector(s)},S,key='';try{key=localStorage.getItem('sigkey')||''}catch(e){}
 var esc=function(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})};
 var slug=function(n){return String(n).toLocaleLowerCase('tr').replace(/ç/g,'c').replace(/ğ/g,'g').replace(/ı/g,'i').replace(/ö/g,'o').replace(/ş/g,'s').replace(/ü/g,'u').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')};
 var uid=function(p){return p+Math.random().toString(36).slice(2,8)};
 var api=function(path,opt){opt=opt||{};opt.headers=Object.assign({'x-admin-key':key},opt.headers||{});return fetch(path,opt)};
 var say=function(t){$('#status').textContent=t};
 function boot(){api('/api/data').then(function(r){if(r.status===401){$('#login').hidden=false;$('#app').hidden=true;if(key)$('#lmsg').textContent='Key not accepted.';return}
  return r.json().then(function(d){S=d;$('#login').hidden=true;$('#app').hidden=false;render();stats()})}).catch(function(){say('Cannot reach the server.')})}
 function stats(){api('/api/stats').then(function(r){return r.json()}).then(function(d){var tb=function(t,rows){return '<p><b>'+t+'</b></p><div style="overflow-x:auto"><table style="border-collapse:collapse">'+rows.map(function(r){return '<tr>'+r.map(function(c){return '<td style="padding:3px 14px 3px 0">'+esc(c)+'</td>'}).join('')+'</tr>'}).join('')+'</table></div>'};
  if(!d.total){$('#stats').textContent='No records yet.';return}
  $('#stats').innerHTML='<p>'+d.total+' records in total</p>'+tb('Person / button / source',d.byTarget.map(function(x){return [x.slug,x.target,x.src,x.n]}))+tb('By country',d.byCountry.map(function(x){return [x.country||'?',x.n]}))+tb('By day',d.byDay.map(function(x){return [x.day,x.n]}))}).catch(function(){$('#stats').textContent='Could not load statistics.'})}
 function lv(v){v=+v||0;return [[0,'None'],[1,'1 level'],[2,'2 levels'],[9,'All']].map(function(o){return '<option value="'+o[0]+'"'+(o[0]===v?' selected':'')+'>'+o[1]+'</option>'}).join('')}
 var CSEL=0,PT=0,PM='',PL='en';
 var CFONT=[['arial','Arial'],['georgia','Georgia'],['verdana','Verdana'],['tahoma','Tahoma'],['trebuchet','Trebuchet MS'],['courier','Courier New']];
 var RN={logo:'Logo',name:'Name and title',tagline:'Tagline',contact:'Contact details',buttons:'Buttons',text:'Free text'};
 function RW(order){var all=['logo','name','tagline','contact','buttons','text'],res=order.map(function(k){return {k:k,on:true}});all.forEach(function(k){if(order.indexOf(k)<0)res.push({k:k,on:false})});return res}
 var PRE={'Classic side by side':{lay:'left',ps:88,pr:12,dv:true,dw:3,sp:14,fs:12,ns:16,rows:RW(['logo','name','contact','buttons'])},
  'Vertical card':{lay:'top',ps:96,pr:48,dv:true,dw:2,sp:10,ns:18,rows:RW(['name','contact','logo','buttons'])},
  'Plain text':{lay:'none',dv:false,ns:14,fs:12,rows:RW(['name','contact'])},
  'Framed card':{lay:'left',ps:80,pr:10,dv:false,cf:true,cr:10,rows:RW(['name','contact','buttons','logo'])},
  'Logo focus':{lay:'right',ps:72,pr:12,dv:true,lh:36,ns:15,rows:RW(['logo','name','tagline','contact','buttons'])}};
 function normRows(g){var all=['logo','name','tagline','contact','buttons','text'],seen={},rr=[];(Array.isArray(g.rows)?g.rows:[]).forEach(function(r){if(r&&all.indexOf(r.k)>=0&&!seen[r.k]){seen[r.k]=1;rr.push(r)}});all.forEach(function(k){if(!seen[k])rr.push({k:k,on:k!=='tagline'&&k!=='text'})});g.rows=rr}
 function prevSoon(){clearTimeout(PT);PT=setTimeout(studioPrev,250)}
 function studioPrev(){var el=document.getElementById('cprev');if(!el)return;var x=S.ctpl&&S.ctpl[CSEL];if(!x)return;
  api('/api/sigprev',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({cfg:x.cfg,mid:PM,lang:PL})}).then(function(r){return r.json()}).then(function(d){el.innerHTML=d.html||'';var n=document.getElementById('clen');if(n){n.textContent=(d.len||0).toLocaleString('en')+' characters (Gmail limit 10,000)';n.style.color=d.len>9000?'#e0626b':''}}).catch(function(){el.textContent='Preview failed.'})}
 function studioUi(){
  S.ctpl=Array.isArray(S.ctpl)?S.ctpl:[];if(CSEL>=S.ctpl.length)CSEL=Math.max(0,S.ctpl.length-1);
  var h='<div class="panel"><h2>Signature design studio</h2><p class="small">Design and save your own signature templates. Saved templates are added to the template list with a ★ and appear on the signature page and in the default-template picker. If you do not change the colours, the template follows the brand colours (and the seasonal theme).</p>';
  h+='<div class="row">'+S.ctpl.map(function(x,i){return '<button class="btn'+(i===CSEL?' pri':'')+'" data-act="csel" data-id="'+i+'">★ '+esc(x.name)+'</button>'}).join('')+'</div>';
  h+='<div class="row"><select id="cpre" aria-label="Starting layout">'+opt(Object.keys(PRE).map(function(k){return [k,k]}),'')+'</select><button class="btn" data-act="cnew">New template</button>'+(S.ctpl.length?'<button class="btn" data-act="cdup">Duplicate</button><button class="btn" data-act="cdel">Delete</button>':'')+'</div>';
  var x=S.ctpl[CSEL];if(!x)return h+'<p class="small">No custom templates yet. Pick a starting layout and press "New template".</p></div>';
  var g=x.cfg=x.cfg||{};g.ci=g.ci||{};normRows(g);
  var AR=autoRoles(S.company)||{},p='ctpl.'+CSEL+'.cfg.';
  var num=function(l,k,d,lo,hi){var v=g[k];return '<label class="f">'+l+'<input type="number" data-k="'+p+k+'" min="'+lo+'" max="'+hi+'" value="'+esc(v==null?d:v)+'"></label>'};
  var col=function(l,k,d){return '<label class="f">'+l+'<input type="color" data-k="'+p+k+'" value="'+esc(g[k]||d||'#000000')+'"></label>'};
  var chk=function(l,k,d,sub){var v=sub?g.ci[k]:g[k],on=v==null?d:v;return '<label class="small"><input type="checkbox" data-k="'+p+(sub?'ci.':'')+k+'"'+(on?' checked':'')+'> '+l+'</label>'};
  var sel=function(l,k,o,d){return '<label class="f">'+l+'<select data-k="'+p+k+'">'+opt(o,g[k]==null?d:g[k])+'</select></label>'};
  var mem=S.members;if(!PM||!mem.some(function(m){return m.id===PM}))PM=mem[0].id;
  h+='<div style="position:sticky;top:58px;z-index:4;margin:10px 0;padding-top:6px;background:#eef0f6"><div class="row"><select id="cpm" aria-label="Preview person">'+opt(mem.map(function(m){return [m.id,m.name]}),PM)+'</select><select id="cpl" aria-label="Language">'+opt([['en','EN'],['es','ES'],['tr','TR'],['pt','PT'],['fr','FR'],['zh','ZH']],PL)+'</select><span class="small" id="clen"></span></div><div id="cprev" style="background:#fff;color:#000;padding:16px;border-radius:10px;overflow:auto;max-height:46vh;pointer-events:none;box-shadow:0 4px 18px rgba(0,0,0,.35)">Loading preview…</div></div>';
  h+='<div class="g"><label class="f">Template name<input data-k="ctpl.'+CSEL+'.name" maxlength="40" value="'+esc(x.name)+'"></label></div>';
  h+='<p><b>Fields and order</b></p><div class="box">'+g.rows.map(function(r,i){return '<div class="row"><label class="small"><input type="checkbox" data-k="'+p+'rows.'+i+'.on"'+(r.on!==false?' checked':'')+'> <b>'+esc(RN[r.k]||r.k)+'</b></label><button class="btn" data-act="crowup" data-id="'+i+'">↑</button><button class="btn" data-act="crowdn" data-id="'+i+'">↓</button></div>'}).join('')+'</div>';
  h+='<div class="g"><label class="f">Free text (split into lines at line breaks)<textarea rows="2" maxlength="300" data-k="'+p+'tx">'+esc(g.tx||'')+'</textarea></label></div>';
  h+='<p><b>Layout</b></p><div class="g">'+sel('Photo position','lay',[['left','Left'],['right','Right'],['top','Top'],['none','No photo']],'left')+num('Photo size','ps',88,40,140)+num('Corner radius','pr',12,0,70)+sel('Vertical alignment','va',[['top','Top'],['mid','Middle']],'top')+num('Spacing','sp',14,4,40)+num('Line gap','gap',6,0,20)+'</div><div class="row">'+chk('Divider line','dv',true)+'</div><div class="g">'+num('Line thickness','dw',3,1,8)+col('Line colour','lc',AR.line||AR.primary)+'</div>';
  h+='<p><b>Text</b></p><div class="g">'+sel('Font','font',CFONT,'arial')+num('Text size','fs',12,10,16)+num('Name size','ns',16,12,30)+num('Logo height','lh',26,14,70)+col('Name colour','nc',AR.text)+col('Text colour','tc',AR.text)+col('Title colour','mc','#6a7080')+col('Link colour','ac',AR.accent)+'</div><div class="row">'+chk('Bold name','nb',true)+chk('Uppercase title','tu',false)+'</div>';
  h+='<p><b>Contact</b></p><div class="g">'+sel('Layout','cs',[['lines','Grouped (with |)'],['stack','Stacked']],'lines')+'</div><div class="row">'+chk('Phone','ph',true,1)+chk('Office','of',true,1)+chk('Email','em',true,1)+chk('Web','wb',true,1)+chk('Address','ad',true,1)+chk('Social','so',true,1)+'</div>';
  h+='<p><b>Buttons and frame</b></p><div class="g">'+sel('Button style','bs',[['fill','Filled'],['outline','Outlined'],['link','Link']],'fill')+num('Button radius','br',6,0,20)+col('Button colour','bc',AR.primary)+'</div><div class="row">'+chk('WhatsApp button','bw',true)+chk('Open card button','bk',true)+chk('Framed card','cf',false)+'</div><div class="g">'+col('Frame colour','cc','#e3e6ee')+col('Card background','cg','#ffffff')+num('Card radius','cr',10,0,24)+'</div>';
  h+='<div class="row"><button class="btn pri" data-act="csave">Save templates</button><button class="btn" data-act="cuse">'+(S.sig&&S.sig.tpl===x.id?'✓ Default signature template':'Make default signature template')+'</button><button class="btn" data-act="cclr">Reset colours to brand</button></div></div>';
  return h}
 var TN={t1:'Classic',t2:'Compact',t3:'Top bar',t4:'Bottom bar',t5:'Vertical',t6:'Logo right',t7:'Minimal',t8:'Card',t9:'Bold name',t10:'Two columns'};
 var BT={fair:'Trade fair calendar',holiday:'Holiday notice',link:'Link',text:'Text',image:'Image',gif:'GIF',pdf:'PDF'};
 function opt(list,sel){return list.map(function(o){return '<option value="'+o[0]+'"'+(String(o[0])===String(sel)?' selected':'')+'>'+esc(o[1])+'</option>'}).join('')}
 function blockUi(b,i){var p='sig.blocks.'+i+'.',h='<div class="box"><div class="row"><label class="small"><input type="checkbox" data-k="'+p+'on"'+(b.on?' checked':'')+'> <b>'+esc(BT[b.type]||b.type)+'</b> shown in signature</label>'+(['fair','holiday','text'].indexOf(b.type)>=0?'<label class="small"><input type="checkbox" data-k="'+p+'dyn"'+(b.dyn?' checked':'')+'> Embed as image (updates automatically in Gmail and Outlook)</label>':'')+'<label class="f">Column<select data-k="'+p+'col">'+opt([['1','1'],['2','2']],b.col||'1')+'</select></label><button class="btn" data-act="upblock" data-id="'+i+'">↑</button><button class="btn" data-act="dnblock" data-id="'+i+'">↓</button><button class="btn" data-act="rmblock" data-id="'+i+'">Delete</button></div><div class="g">'+fld('Title (default if empty)',p+'title',b.title||'');
  if(b.type==='fair'){h+='</div>'+(b.items||[]).map(function(x,j){var q=p+'items.'+j+'.';return '<div class="g">'+fld('Fair name',q+'name',x.name)+fld('Date',q+'date',x.date)+fld('Hall / stand',q+'place',x.place)+fld('Flag (country code: de, tr, br…)',q+'cc',x.cc)+'<button class="btn" data-act="rmfair" data-id="'+i+'.'+j+'">Delete fair</button></div>'}).join('')+'<div class="row"><button class="btn" data-act="addfair" data-id="'+i+'">Add fair</button></div></div>';return h}
  if(b.type==='holiday')h+=fld('Message',p+'text',b.text||'',true)+'<label class="f">From<input type="date" data-k="'+p+'from" value="'+esc(b.from||'')+'"></label><label class="f">Until<input type="date" data-k="'+p+'to" value="'+esc(b.to||'')+'"></label>';
  else if(b.type==='text')h+=fld('Text',p+'text',b.text||'',true);
  else if(b.type==='link')h+=fld('Label',p+'label',b.label||'')+fld('Address (https://…)',p+'url',b.url||'');
  else if(b.type==='pdf')h+=fld('Link text',p+'label',b.label||'')+'<label class="small">PDF file <input type="file" accept="application/pdf" data-up="b-'+b.id+'"></label>'+(b.file?'<span class="small">uploaded</span>':'');
  else h+=fld('Width (px)',p+'width',b.width||'200')+fld('Address opened on click (optional)',p+'url',b.url||'')+'<label class="small">'+(b.type==='gif'?'GIF':'Image')+' file <input type="file" accept="'+(b.type==='gif'?'image/gif':'image/*')+'" data-up="b-'+b.id+'"></label>'+(b.file?'<span class="small">uploaded</span>':'');
  return h+'</div></div>'}
 function designPanel(){var c=S.company;c.palette=Array.isArray(c.palette)&&c.palette.length?c.palette:[c.color||'#14508c'];c.roles=c.roles||{primary:'',accent:'',text:'',line:''};c.season=c.season||{on:false,name:'',color:'#b3202a',from:'',to:'',logo:0};
  var g=S.sig=S.sig||{tpl:'t1',blocks:[]};if(!Array.isArray(g.blocks))g.blocks=[];
  var h='<div class="panel"><h2>Signature template and colours</h2><div class="g"><label class="f">Template<select data-k="sig.tpl">'+opt(Object.keys(TN).map(function(k){return [k,k.slice(1)+' · '+TN[k]]}).concat((S.ctpl||[]).map(function(x){return [x.id,'★ '+x.name]})),g.tpl||'t1')+'</select></label></div>'
  +'<p class="small">Brand colour palette (up to 6). The first colour is the primary colour.</p><div class="row">'+c.palette.map(function(x,i){return '<span class="row" style="gap:4px;flex-wrap:nowrap"><input type="color" aria-label="Colour '+(i+1)+'" data-k="company.palette.'+i+'" value="'+esc(x)+'"><button class="btn" data-act="rmcolor" data-id="'+i+'">×</button></span>'}).join('')+(c.palette.length<6?'<button class="btn" data-act="addcolor">Add colour</button>':'')+'</div>';
  var po=[['','Automatic']].concat(c.palette.map(function(x,i){return [i,'Colour '+(i+1)+' '+x]}));
  h+='<div class="g">'+[['primary','Primary (bars, buttons)'],['accent','Accent (links)'],['text','Text (name)'],['line','Divider line']].map(function(r){return '<label class="f">'+r[1]+'<select data-k="company.roles.'+r[0]+'">'+opt(po,c.roles[r[0]])+'</select></label>'}).join('')+'</div><p class="small">Roles left on Automatic are picked from the palette: readable dark text, a vivid accent colour, the primary colour.</p></div>';
  var s=c.season;
  h+='<div class="panel"><h2>Seasonal colour and logo</h2><label class="small"><input type="checkbox" data-k="company.season.on"'+(s.on?' checked':'')+'> Apply the seasonal theme (whole team)</label><div class="g">'+fld('Season name','company.season.name',s.name||'')+'<label class="f">Season colour<input type="color" data-k="company.season.color" value="'+esc(s.color||'#b3202a')+'"></label><label class="f">Start (immediately if empty)<input type="date" data-k="company.season.from" value="'+esc(s.from||'')+'"></label><label class="f">End (open-ended if empty)<input type="date" data-k="company.season.to" value="'+esc(s.to||'')+'"></label></div><div class="row"><label class="small">Season logo <input type="file" accept="image/png,image/jpeg,image/webp" data-up="logo-s"></label>'+(s.logo?'<span class="small">uploaded</span>':'')+'</div><p class="small">When on, the primary colour and (if uploaded) the logo change for everyone. The logo, lines and card links also update in signatures already sent. Text colours written into a signature stay frozen.</p></div>';
  h+=studioUi();h+='<div class="panel"><h2>Signature blocks</h2><p class="small">Blocks that are on appear in the signature; the others are hidden. Blocks set to column 2 are placed side by side with column 1.</p>'+g.blocks.map(blockUi).join('')+'<div class="row"><select id="nbtype" aria-label="Block type">'+opt(Object.keys(BT).map(function(k){return [k,BT[k]]}),'fair')+'</select><button class="btn" data-act="addblock">Add block</button></div></div>';
  return h}
 function autoRoles(c){var HX=/^#[0-9a-f]{6}$/i,pal=(c.palette||[]).filter(function(x){return HX.test(x)}),r=c.roles||{};
  function lum(h){var v=[1,3,5].map(function(i){var x=parseInt(h.substr(i,2),16)/255;return x<=.03928?x/12.92:Math.pow((x+.055)/1.055,2.4)});return .2126*v[0]+.7152*v[1]+.0722*v[2]}
  function cr(a,b){var x=lum(a),y=lum(b);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05)}
  function sat(h){var v=[1,3,5].map(function(i){return parseInt(h.substr(i,2),16)}),mx=Math.max.apply(0,v),mn=Math.min.apply(0,v);return mx?(mx-mn)/mx:0}
  function pick(k){var i=r[k];return i!==''&&i!=null&&HX.test(pal[+i]||'')?pal[+i]:''}
  var primary=pick('primary')||pal[0]||'#14508c',dark=pal.filter(function(x){return cr(x,'#ffffff')>=7}).sort(function(a,b){return lum(a)-lum(b)})[0],oth=pal.filter(function(x){return x.toLowerCase()!==primary.toLowerCase()}).sort(function(a,b){return sat(b)-sat(a)});
  return {text:pick('text')||dark||'#1a1d24',accent:pick('accent')||oth.filter(function(x){return cr(x,'#ffffff')>=3})[0]||primary}}
 var DT={fair:{tr:'FUAR TAKVİMİ',en:'TRADE FAIR CALENDAR',es:'CALENDARIO DE FERIAS',pt:'CALENDÁRIO DE FEIRAS',fr:'CALENDRIER DES SALONS',zh:'展会日程'},holiday:{tr:'TATİL BİLGİSİ',en:'HOLIDAY NOTICE',es:'AVISO DE VACACIONES',pt:'AVISO DE FÉRIAS',fr:'AVIS DE FERMETURE',zh:'假期通知'}};
 function loadFlag(cc){return new Promise(function(res){if(!/^[a-z]{2}$/i.test(cc||''))return res(null);var i=new Image();i.onload=function(){res(i)};i.onerror=function(){res(null)};i.src='/flag/'+cc.toLowerCase()+'.png'})}
 function wrapText(ctx,t,maxW){var w=String(t).split(/\s+/),l=[],cur='';w.forEach(function(x){var n=cur?cur+' '+x:x;if(ctx.measureText(n).width>maxW&&cur){l.push(cur);cur=x}else cur=n});if(cur)l.push(cur);return l}
 function drawDyn(b,lang,R){var items=b.type==='fair'?(b.items||[]).filter(function(x){return x&&x.name}):[];
  return Promise.all(items.map(function(x){return loadFlag(x.cc)})).then(function(flags){
   var W=360,S2=2,cv=document.createElement('canvas'),c=cv.getContext('2d'),title=b.title||(DT[b.type]||{})[lang]||'',F='Arial,Helvetica,sans-serif',lh=17,rows=[];
   c.font='12px '+F;
   if(b.type==='fair')items.forEach(function(x,i){var rest=[x.date,x.place].filter(Boolean).join(' · ');c.font='bold 12px '+F;var bw=c.measureText(x.name).width;c.font='12px '+F;rows.push({flag:flags[i],bold:x.name,bw:bw,rest:rest?' · '+rest:''})});
   else rows=wrapText(c,b.text||'',W-4).map(function(t){return {plain:t}});
   var h=12+1+10+(title?18:0)+rows.reduce(function(a,r){return a+lh+(r.rest?lh+4:0)},0)+8;cv.width=W*S2;cv.height=h*S2;c.scale(S2,S2);c.fillStyle='#ffffff';c.fillRect(0,0,W,h);c.fillStyle='#c9ced8';c.fillRect(0,12,W,1);
   var y=23;c.textBaseline='top';
   if(title){c.fillStyle=R.accent;c.font='bold 10px '+F;if('letterSpacing' in c)c.letterSpacing='1.2px';c.fillText(String(title).toLocaleUpperCase(lang),0,y);if('letterSpacing' in c)c.letterSpacing='0px';y+=18}
   rows.forEach(function(r){var x=0;if('plain' in r){c.fillStyle=R.text;c.font='12px '+F;c.fillText(r.plain,0,y+2)}else{if(r.flag){c.drawImage(r.flag,0,y+2,16,Math.round(16*r.flag.naturalHeight/r.flag.naturalWidth));x=22}c.fillStyle=R.text;c.font='bold 12px '+F;c.fillText(r.bold,x,y+2);c.font='12px '+F;if(r.rest)c.fillText(r.rest.replace(/^ · /,''),x,y+2+lh)}y+=lh+(r.rest?lh+4:0)});
   return new Promise(function(res,rej){cv.toBlob(function(bl){bl?res(bl):rej('png')},'image/png')})})}
 function dynRender(){var R=autoRoles(S.company),jobs=[];((S.sig&&S.sig.blocks)||[]).forEach(function(b){
   if(!b.dyn||['fair','holiday','text'].indexOf(b.type)<0)return;var hs=JSON.stringify(['v3',b.type,b.title,b.text,b.items,R]);if(b.dh===hs)return;
   jobs.push(function(){return Promise.all(['en','es','tr','pt','fr','zh'].map(function(l){return drawDyn(b,l,R).then(function(bl){return api('/api/img/d-'+b.id+'-'+l,{method:'POST',headers:{'content-type':'image/png'},body:bl}).then(function(r){if(!r.ok)throw 'upload'})})})).then(function(){b.dh=hs})})});
  return jobs.reduce(function(p,j){return p.then(j)},Promise.resolve()).catch(function(e){say('Could not generate image: '+e)})}
 function fld(label,path,val,area){return '<label class="f">'+label+(area?'<textarea data-k="'+path+'">'+esc(val)+'</textarea>':'<input type="text" data-k="'+path+'" value="'+esc(val)+'">')+'</label>'}
 function gifEnc(frames,w,h,delay,pal){var o=[];function b(x){o.push(x&255)}function s(x){b(x);b(x>>8)}
'GIF89a'.split('').forEach(function(c){b(c.charCodeAt(0))});s(w);s(h);b(247);b(0);b(0);
for(var i=0;i<768;i++)b(pal[i]||0);
b(33);b(255);b(11);'NETSCAPE2.0'.split('').forEach(function(c){b(c.charCodeAt(0))});b(3);b(1);s(0);b(0);
frames.forEach(function(px){b(33);b(249);b(4);b(0);s(delay);b(0);b(0);b(44);s(0);s(0);s(w);s(h);b(0);b(8);
var out=[],buf=0,nb=0,bits=9,next=258,dict=new Map();
function emit(c){buf|=c<<nb;nb+=bits;while(nb>=8){out.push(buf&255);buf>>=8;nb-=8}}
emit(256);var pre=px[0];
for(var i=1;i<px.length;i++){var c=px[i],k=pre*256+c,v=dict.get(k);
if(v!==undefined)pre=v;else{emit(pre);dict.set(k,next);if(next===(1<<bits)&&bits<12)bits++;next++;
if(next>4095){emit(256);dict=new Map();next=258;bits=9}pre=c}}
emit(pre);emit(257);if(nb>0)out.push(buf&255);
for(var j=0;j<out.length;j+=255){var n=Math.min(255,out.length-j);b(n);for(var q=0;q<n;q++)b(out[j+q])}b(0)});
b(59);return new Uint8Array(o)}
function quant(imgs){var cnt=new Map(),sum=new Map();
imgs.forEach(function(d){for(var i=0;i<d.length;i+=4*3){var k=(d[i]>>4)<<8|(d[i+1]>>4)<<4|(d[i+2]>>4);cnt.set(k,(cnt.get(k)||0)+1)}});
var keys=Array.from(cnt.keys()).sort(function(a,b){return cnt.get(b)-cnt.get(a)}).slice(0,256),pal=new Uint8Array(768);
keys.forEach(function(k,i){pal[i*3]=(k>>8&15)*17;pal[i*3+1]=(k>>4&15)*17;pal[i*3+2]=(k&15)*17});
var cache=new Map();function idx(r,g,bl){var k=(r>>4)<<8|(g>>4)<<4|(bl>>4),v=cache.get(k);if(v!==undefined)return v;var R=(k>>8&15)*17,G=(k>>4&15)*17,B=(k&15)*17,best=0,bd=1e9;
for(var i=0;i<keys.length;i++){var dr=pal[i*3]-R,dg=pal[i*3+1]-G,db=pal[i*3+2]-B,d=dr*dr+dg*dg+db*db;if(d<bd){bd=d;best=i}}cache.set(k,best);return best}
return {pal:pal,map:function(d){var o=new Uint8Array(d.length/4);for(var i=0,j=0;i<d.length;i+=4,j++)o[j]=idx(d[i],d[i+1],d[i+2]);return o}}}
function zdraw(cx,W,H,src,sw,sh){var k=Math.max(W/sw,H/sh);cx.fillStyle='#fff';cx.fillRect(0,0,W,H);cx.drawImage(src,0,0,sw,sh,(W-sw*k)/2,0,sw*k,sh*k)}
function v2gif(blob){return new Promise(function(res,rej){var v=document.createElement('video');v.muted=true;v.playsInline=true;v.preload='auto';var url=URL.createObjectURL(blob),to=setTimeout(function(){rej(new Error('timeout'))},40000);v.src=url;
v.onerror=function(){rej(new Error('video'))};
v.onloadedmetadata=function(){var W=108,H=180,dur=Math.min(v.duration||3,3),fps=10,n=Math.max(2,Math.round(dur*fps)),cv=document.createElement('canvas');cv.width=W;cv.height=H;var cx=cv.getContext('2d'),imgs=[],i=0,sw=v.videoWidth,sh=v.videoHeight;
function step(){if(i>=n){clearTimeout(to);URL.revokeObjectURL(url);var q=quant(imgs),fr=imgs.map(q.map);res(new Blob([gifEnc(fr,W,H,Math.round(100/fps),q.pal)],{type:'image/gif'}));return}
v.currentTime=Math.max(0.01,Math.min(i/fps,(v.duration||dur)-0.05))}
v.onseeked=function(){zdraw(cx,W,H,v,sw,sh);imgs.push(cx.getImageData(0,0,W,H).data);i++;step()};step()}})}
function vgif(id,blob){say('Preparing GIF…');return v2gif(blob).then(function(g){return api('/api/img/p-'+id,{method:'POST',headers:{'content-type':'image/gif'},body:g})}).then(function(r){if(!r.ok)throw 0;var m=S.members.filter(function(x){return x.id===id})[0];m.photo=Date.now();(S.fn=S.fn||{})['p-'+id]='video-gif.gif';return save().then(render).then(function(){say('GIF ready; it will animate in the signature.')})}).catch(function(){say('Could not create GIF.')})}
async function g2gif(f){var d=new ImageDecoder({data:await f.arrayBuffer(),type:'image/gif'});await d.tracks.ready;var n=d.tracks.selectedTrack.frameCount,W=108,H=180,cv=document.createElement('canvas');cv.width=W;cv.height=H;var cx=cv.getContext('2d'),fr=[],t=0,next=0;
for(var i=0;i<n&&t<3e6;i++){var r=await d.decode({frameIndex:i}),im=r.image,dur=im.duration||100000;
if(t>=next){zdraw(cx,W,H,im,im.displayWidth,im.displayHeight);fr.push(cx.getImageData(0,0,W,H).data);next+=1e5}
t+=dur;im.close()}
var q=quant(fr);return new Blob([gifEnc(fr.map(q.map),W,H,10,q.pal)],{type:'image/gif'})}
function fixFiles(){var N=S.fn||{},els=document.querySelectorAll('#ed input[type=file][data-up]');for(var i=0;i<els.length;i++){var el=els[i],k=el.dataset.up,id=k.slice(2),has=0;if(k==='logo')has=S.company.logo;else if(k==='logo-s')has=S.company.season&&S.company.season.logo;else if(k[0]==='b'){var bb=S.sig.blocks.filter(function(x){return x.id===id})[0];has=bb&&bb.file}else{var m=S.members.filter(function(x){return x.id===id})[0];has=m&&(k[0]==='p'?m.photo:m.video)}el.style.display='none';var t=document.createElement('span');t.className='btn';t.textContent='Choose file';var n=document.createElement('span');n.className='small';n.style.marginLeft='8px';n.textContent=has?(N[k]||'uploaded file'):'no file';el.parentNode.appendChild(t);el.parentNode.appendChild(n)}}
function render(){var c=S.company,h='';
  h+='<div class="panel"><h2>Company</h2><div class="g">'+fld('Company name','company.name',c.name)+fld('Tagline','company.tagline',c.tagline)+fld('Address','company.address',c.address)+fld('City','company.city',c.city)+fld('Country','company.country',c.country)+fld('Main phone','company.phone',c.phone)+fld('Web','company.web',c.web)+fld('General email','company.email',c.email)+fld('Opening hours','company.hours',c.hours)+'</div>'
   +'<div class="row"><label class="small">Brand colour <input type="color" data-k="company.color" value="'+esc(c.color)+'"></label><label class="small">Logo <input type="file" accept="image/png,image/jpeg,image/webp" data-up="logo"></label>'+(c.logo?'<span class="small">uploaded</span>':'')+'</div>'
   +'<div class="g">'+fld('Announcement banner text','company.banner.text',c.banner.text)+fld('Announcement link (https://…)','company.banner.link',c.banner.link)+'</div><label class="small"><input type="checkbox" id="bon"'+(c.banner.on?' checked':'')+'> Show the announcement banner</label></div>';
  h+=designPanel();h+='<div class="panel"><h2>Teams</h2><div class="g">'+S.teams.map(function(t,i){return '<div class="row" style="flex-wrap:nowrap"><input type="text" aria-label="Team name" data-k="teams.'+i+'.name" value="'+esc(t.name)+'"><button class="btn" data-act="rmteam" data-id="'+t.id+'">Delete</button></div>'}).join('')+'</div><div class="row"><button class="btn" data-act="addteam">Add team</button></div></div>';
  h+='<div class="panel"><h2>People</h2>'+S.members.map(function(m,i){var p='members.'+i+'.',sl=slug(m.name);
   return '<div class="box"><div class="g">'+fld('Full name',p+'name',m.name)+fld('Job title',p+'title',m.title)+fld('Mobile (+90…)',p+'phone',m.phone)+fld('Office line and extension',p+'office',m.office)+fld('WhatsApp (if different)',p+'wa',m.wa)+fld('Email',p+'email',m.email)+fld('LinkedIn username',p+'linkedin',m.linkedin)+fld('Instagram username',p+'instagram',m.instagram)
    +'<label class="f">Team<select data-k="'+p+'teamId">'+S.teams.map(function(t){return '<option value="'+t.id+'"'+(t.id===m.teamId?' selected':'')+'>'+esc(t.name)+'</option>'}).join('')+'</select></label></div>'
    +'<div class="row"><label class="f">Reports to<select data-k="'+p+'boss"><option value="">— none —</option>'+S.members.filter(function(x){return x.id!==m.id}).map(function(x){return '<option value="'+x.id+'"'+(x.id===m.boss?' selected':'')+'>'+esc(x.name)+'</option>'}).join('')+'</select></label><label class="small"><input type="checkbox" data-k="'+p+'orgOn"'+(m.orgOn?' checked':'')+'> Show org chart on the card</label><label class="f">Levels up<select data-k="'+p+'up">'+lv(m.up)+'</select></label><label class="f">Levels down<select data-k="'+p+'down">'+lv(m.down)+'</select></label></div>'
    +'<div class="row"><label class="small">Photo or GIF <input type="file" accept="image/*" data-up="p-'+m.id+'"></label>'+(m.photo?'<span class="small">uploaded</span><button class="btn" data-act="rmphoto" data-id="'+m.id+'">Remove photo</button>':'')+'<label class="small">Short video (max 15 MB) <input type="file" accept="video/mp4,video/webm,video/quicktime" data-up="v-'+m.id+'"></label>'+(m.video?'<button class="btn" data-act="rmvideo" data-id="'+m.id+'">Remove video</button><button class="btn" data-act="vgif" data-id="'+m.id+'">Make GIF from video</button>':'')+'</div>'
    +'<div class="row"><a class="btn" href="/'+sl+'" target="_blank">Card</a><a class="btn" href="/'+sl+'/signature" target="_blank">Signature</a><a class="btn" href="/'+sl+'/setup" target="_blank">Setup page</a><a class="btn" href="mailto:'+encodeURIComponent(m.email||'')+'?subject='+encodeURIComponent('Set up your email signature')+'&body='+encodeURIComponent('Hi '+String(m.name).split(' ')[0]+',\n\nOpen this link on your computer to set up your email signature in 2 minutes:\n'+location.origin+'/'+sl+'/setup\n\nPress "Copy signature" and follow the Gmail or Outlook steps on the page.')+'">Prepare setup email</a><button class="btn" data-act="rmmember" data-id="'+m.id+'">Delete person</button></div></div>'}).join('')+'<div class="row"><button class="btn" data-act="addmember">Add person</button></div></div>';
  h+='<div class="panel"><h2>Questions and answers</h2>'+S.faq.map(function(f,i){return '<div class="box"><input type="text" aria-label="Question" data-k="faq.'+i+'.q" value="'+esc(f.q)+'"><textarea aria-label="Answer" data-k="faq.'+i+'.a">'+esc(f.a)+'</textarea><div class="row"><button class="btn" data-act="rmfaq" data-id="'+i+'">Delete</button></div></div>'}).join('')+'<div class="row"><button class="btn" data-act="addfaq">Add question</button></div></div>';
  $('#ed').innerHTML=h;fixFiles();studioPrev()}
 function setPath(path,val){var p=path.split('.'),o=S;for(var i=0;i<p.length-1;i++)o=o[p[i]];o[p[p.length-1]]=val}
 function save(){return dynRender().then(save0)}
 function save0(){say('Saving…');return api('/api/data',{method:'PUT',headers:{'content-type':'application/json'},body:JSON.stringify(S)}).then(function(r){say(r.ok?'Saved. Cards and images are up to date.':'Could not save ('+r.status+').')},function(){say('Could not save.')})}
 function shrink(file,max,type){return new Promise(function(res,rej){var i=new Image();i.onload=function(){var k=Math.min(1,max/Math.max(i.width,i.height)),cv=document.createElement('canvas');cv.width=Math.round(i.width*k);cv.height=Math.round(i.height*k);cv.getContext('2d').drawImage(i,0,0,cv.width,cv.height);cv.toBlob(function(b){b?res(b):rej()},type,.86)};i.onerror=rej;i.src=URL.createObjectURL(file)})}
 $('#login').addEventListener('submit',function(e){e.preventDefault();key=$('#key').value.trim();try{localStorage.setItem('sigkey',key)}catch(x){}boot()});
 $('#save').addEventListener('click',save);
 var ed=$('#ed');
 ed.addEventListener('input',function(e){var k=e.target.dataset.k;if(k){setPath(k,e.target.type==='checkbox'?e.target.checked:e.target.value);say('Unsaved changes.')}if(e.target.id==='bon'){S.company.banner.on=e.target.checked;say('Unsaved changes.')}});
 ed.addEventListener('input',function(e){var t=e.target,k=t.dataset&&t.dataset.k;if(t.id==='cpm'){PM=t.value;prevSoon()}else if(t.id==='cpl'){PL=t.value;prevSoon()}else if(k&&k.indexOf('ctpl.')===0)prevSoon()});
 ed.addEventListener('change',function(e){var up=e.target.dataset.up,f=e.target.files&&e.target.files[0];if(!up||!f)return;
  var job;if(up==='logo'||up==='logo-s')job=shrink(f,400,'image/png');else if(up[0]==='b')job=(f.type==='image/gif'||f.type==='application/pdf')?Promise.resolve(f):shrink(f,900,'image/jpeg');else if(up[0]==='p')job=f.type==='image/gif'?((f.size>1500000&&window.ImageDecoder)?g2gif(f):Promise.resolve(f)):shrink(f,480,'image/jpeg');else{if(f.size>15*1048576){say('Video exceeds the 15 MB limit.');return}job=Promise.resolve(f)}
  say('Uploading… ('+Math.round(f.size/1024)+' KB)');job.then(function(b){return api('/api/img/'+up,{method:'POST',headers:{'content-type':b.type},body:b})}).then(function(r){if(!r.ok)throw new Error('HTTP '+r.status);var v=Date.now();(S.fn=S.fn||{})[up]=f.name;
   if(up==='logo')S.company.logo=v;else if(up==='logo-s')S.company.season.logo=v;else if(up[0]==='b'){var bb=S.sig.blocks.filter(function(x){return x.id===up.slice(2)})[0];if(bb)bb.file=v}else{var m=S.members.filter(function(x){return x.id===up.slice(2)})[0];if(up[0]==='p')m.photo=v;else m.video=v}
   return save().then(render)}).catch(function(e){say('Upload failed: '+(e&&e.message||e))})});
 ed.addEventListener('click',function(e){var a=e.target.closest('[data-act]');if(!a)return;var id=a.dataset.id;
  switch(a.dataset.act){
   case 'csel':CSEL=+id;break;
   case 'cnew':var pk=document.getElementById('cpre').value;S.ctpl.push({id:uid('c'),name:'My template '+(S.ctpl.length+1),cfg:JSON.parse(JSON.stringify(PRE[pk]||PRE['Classic side by side']))});CSEL=S.ctpl.length-1;break;
   case 'cdup':var cp=JSON.parse(JSON.stringify(S.ctpl[CSEL]));cp.id=uid('c');cp.name=(cp.name+' copy').slice(0,40);S.ctpl.push(cp);CSEL=S.ctpl.length-1;break;
   case 'cdel':if(!confirm('Delete this template?'))return;var dl=S.ctpl.splice(CSEL,1)[0];if(S.sig.tpl===dl.id)S.sig.tpl='t1';CSEL=0;break;
   case 'cuse':S.sig.tpl=S.ctpl[CSEL].id;break;
   case 'crowup':var ru=+id,rg=S.ctpl[CSEL].cfg;normRows(rg);if(ru>0){var rt=rg.rows[ru];rg.rows[ru]=rg.rows[ru-1];rg.rows[ru-1]=rt}break;
   case 'crowdn':var rd=+id,rh=S.ctpl[CSEL].cfg;normRows(rh);if(rd<rh.rows.length-1){var r2=rh.rows[rd];rh.rows[rd]=rh.rows[rd+1];rh.rows[rd+1]=r2}break;
   case 'cclr':['nc','tc','ac','bc','lc','mc','cc','cg'].forEach(function(k){delete S.ctpl[CSEL].cfg[k]});break;
   case 'csave':save();return;
   case 'addteam':S.teams.push({id:uid('t'),name:'New team'});break;
   case 'rmteam':if(S.teams.length<2){say('At least one team must remain.');return}S.teams=S.teams.filter(function(t){return t.id!==id});S.members.forEach(function(m){if(m.teamId===id)m.teamId=S.teams[0].id});break;
   case 'addmember':S.members.push({id:uid('m'),name:'New Person',title:'',teamId:S.teams[0].id,phone:'',wa:'',email:'',instagram:'',linkedin:'',photo:0,video:0});break;
   case 'rmmember':if(S.members.length<2){say('At least one person must remain.');return}S.members=S.members.filter(function(m){return m.id!==id});S.members.forEach(function(x){if(x.boss===id)x.boss=''});break;
   case 'vgif':fetch('/img/v-'+id).then(function(r){return r.blob()}).then(function(b){return vgif(id,b)});break;
   case 'rmvideo':if(!confirm('Delete the video?'))break;S.members.filter(function(m){return m.id===id})[0].video=0;if(S.fn)delete S.fn['v-'+id];api('/api/img/v-'+id,{method:'DELETE'});break;
   case 'rmphoto':if(!confirm('Delete the photo?'))break;S.members.filter(function(m){return m.id===id})[0].photo=0;if(S.fn)delete S.fn['p-'+id];api('/api/img/p-'+id,{method:'DELETE'});break;
   case 'addcolor':if(S.company.palette.length<6)S.company.palette.push('#888888');break;
   case 'rmcolor':if(S.company.palette.length>1)S.company.palette.splice(+id,1);S.company.roles={primary:'',accent:'',text:'',line:''};break;
   case 'addblock':var ty=document.getElementById('nbtype').value,nb={id:uid('b'),type:ty,on:true,title:'',col:'1'};if(ty==='fair')nb.items=[{name:'',date:'',place:'',cc:''}];S.sig.blocks.push(nb);break;
   case 'rmblock':S.sig.blocks.splice(+id,1);break;
   case 'upblock':var ui=+id;if(ui>0){var t1=S.sig.blocks[ui];S.sig.blocks[ui]=S.sig.blocks[ui-1];S.sig.blocks[ui-1]=t1}break;
   case 'dnblock':var di=+id;if(di<S.sig.blocks.length-1){var t2=S.sig.blocks[di];S.sig.blocks[di]=S.sig.blocks[di+1];S.sig.blocks[di+1]=t2}break;
   case 'addfair':S.sig.blocks[+id].items.push({name:'',date:'',place:'',cc:''});break;
   case 'rmfair':var pr=id.split('.');S.sig.blocks[+pr[0]].items.splice(+pr[1],1);break;
   case 'addfaq':S.faq.push({q:'',a:''});break;
   case 'rmfaq':S.faq.splice(+id,1);break}
  render();say('Unsaved changes.')});
 boot();
}
function adminPage(){return page('Signature admin',`<div class="wrap"><div><p class="small">signature · admin</p><h1>Signature and card admin</h1></div>
 <form class="panel" id="login" hidden><h2>Admin key</h2><input type="password" id="key" autocomplete="current-password" aria-label="Admin key"><div class="row"><button class="btn pri">Sign in</button><span class="small" id="lmsg"></span></div></form>
 <div id="app" hidden><div class="panel" style="position:sticky;top:8px;z-index:2;margin-bottom:16px"><div class="row"><button class="btn pri" id="save">Save and publish</button><a class="btn" href="/" target="_blank">Team page</a><a class="btn" href="/scan" target="_blank">Scan QR</a><span class="small" id="status"></span></div></div><div id="ed" style="display:flex;flex-direction:column;gap:16px"></div><div class="panel" style="margin-top:16px"><h2>Clicks (last 30 days)</h2><div id="stats" class="small">Loading…</div></div></div></div>${run(adminClient)}`)}
function scanClient(){
 var v=document.getElementById('cam'),out=document.getElementById('out'),cv=document.createElement('canvas'),ctx=cv.getContext('2d',{willReadFrequently:true}),live=false;
 var esc=function(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})};
 function show(txt){var o={};
  if(/^BEGIN:VCARD/i.test(txt))txt.split(/\r?\n/).forEach(function(l){var i=l.indexOf(':');if(i<0)return;var k=l.slice(0,i).split(';')[0].toUpperCase(),val=l.slice(i+1).replace(/\\([,;])/g,'$1');if(k==='FN')o.name=val;else if(k==='ORG')o.org=val.replace(/;+$/,'');else if(k==='TITLE')o.title=val;else if(k==='TEL'&&!o.tel)o.tel=val;else if(k==='EMAIL'&&!o.email)o.email=val});
  else if(/^MECARD:/i.test(txt))txt.slice(7).split(';').forEach(function(p){var i=p.indexOf(':');if(i<0)return;var k=p.slice(0,i).toUpperCase(),val=p.slice(i+1);if(k==='N')o.name=val.split(',').reverse().join(' ').trim();else if(k==='TEL'&&!o.tel)o.tel=val;else if(k==='EMAIL')o.email=val;else if(k==='ORG')o.org=val});
  var h='<div class="panel">';
  if(o.name||o.tel||o.email){var d=(o.tel||'').replace(/\D/g,''),vc=/^BEGIN:VCARD/i.test(txt)?txt:'BEGIN:VCARD\r\nVERSION:3.0\r\nFN:'+(o.name||'')+'\r\n'+(o.org?'ORG:'+o.org+'\r\n':'')+(o.tel?'TEL:'+o.tel+'\r\n':'')+(o.email?'EMAIL:'+o.email+'\r\n':'')+'END:VCARD';
   h+='<h2>'+esc(o.name||'Unnamed contact')+'</h2><p class="small">'+esc([o.title,o.org].filter(Boolean).join(' · '))+'</p><p>'+esc(o.tel||'')+'</p><p>'+esc(o.email||'')+'</p><div class="row"><a class="btn pri" download="contact.vcf" href="data:text/vcard;charset=utf-8,'+encodeURIComponent(vc)+'">Save contact</a>'+(d?'<a class="btn" href="https://wa.me/'+d+'">Message on WhatsApp</a>':'')+'</div>'}
  else if(/^https?:\/\//i.test(txt))h+='<h2>Link</h2><a href="'+esc(txt)+'" rel="noopener" style="overflow-wrap:anywhere">'+esc(txt)+'</a>';
  else h+='<h2>Text</h2><p style="overflow-wrap:anywhere">'+esc(txt)+'</p>';
  out.innerHTML=h+'<div class="row"><button class="btn" id="again">Scan another code</button></div></div>';document.getElementById('again').onclick=function(){out.innerHTML='';start()}}
 function tick(){if(!live)return;if(v.readyState>=2&&v.videoWidth){var k=Math.min(1,720/v.videoWidth);cv.width=v.videoWidth*k;cv.height=v.videoHeight*k;ctx.drawImage(v,0,0,cv.width,cv.height);var r=jsQR(ctx.getImageData(0,0,cv.width,cv.height).data,cv.width,cv.height);if(r&&r.data){stop();show(r.data);return}}requestAnimationFrame(tick)}
 function stop(){live=false;if(v.srcObject)v.srcObject.getTracks().forEach(function(t){t.stop()});v.hidden=true}
 function start(){if(!navigator.mediaDevices){out.innerHTML='<p class="small">This browser cannot open the camera; choose a photo below.</p>';return}
  navigator.mediaDevices.getUserMedia({video:{facingMode:'environment'}}).then(function(s){v.srcObject=s;v.hidden=false;live=true;v.play();tick()},function(){out.innerHTML='<p class="small">Camera permission was not granted; choose a photo below.</p>'})}
 document.getElementById('file').addEventListener('change',function(e){var f=e.target.files[0];if(!f)return;var i=new Image();i.onload=function(){var k=Math.min(1,1400/Math.max(i.width,i.height));cv.width=i.width*k;cv.height=i.height*k;ctx.drawImage(i,0,0,cv.width,cv.height);var r=jsQR(ctx.getImageData(0,0,cv.width,cv.height).data,cv.width,cv.height);if(r&&r.data){stop();show(r.data)}else out.innerHTML='<p class="small">No QR code found in this image.</p>'};i.src=URL.createObjectURL(f)});
 document.getElementById('start').addEventListener('click',function(){out.innerHTML='';start()});
}
function scanPage(){return page('Scan QR',`<div class="wrap"><div><p class="small">signature</p><h1>Scan QR</h1></div><div class="panel"><video id="cam" playsinline muted hidden></video><div class="row"><button class="btn pri" id="start">Open camera</button><label class="small">or choose a photo <input type="file" id="file" accept="image/*"></label></div></div><div id="out"></div></div><script src="https://cdnjs.cloudflare.com/ajax/libs/jsQR/1.4.0/jsQR.min.js"></`+`script>${run(scanClient)}`)}
function indexPage(S,lang){const c=S.company;
 return page(c.name,`<div class="shell"><div class="body" style="padding-top:28px"><div class="block">${c.logo?`<img class="logo" src="/img/logo?v=${c.logo}" alt="${esc(c.name)}">`:`<b style="font-size:1.3rem">${esc(c.name)}</b>`}${c.tagline?`<span style="color:var(--muted)">${esc(c.tagline)}</span>`:''}</div>
 ${S.teams.map(t=>{const ms=S.members.filter(m=>m.teamId===t.id);return ms.length?`<div class="block"><span class="tag">${esc(t.name)}</span>${ms.map(m=>`<a href="/${slug(m.name)}?lang=${lang}" style="display:flex;gap:10px;align-items:center;text-decoration:none">${m.photo?`<img class="av" src="/img/p-${m.id}?v=${m.photo}" alt="">`:`<span class="av">${esc(initials(m.name))}</span>`}<span><b>${esc(m.name)}</b><br><span style="color:var(--muted)">${esc(m.title)}</span></span></a>`).join('')}</div>`:''}).join('')}</div></div>`,{css:CSS,lang,battr:` style="--brand:${color(c)}"`})}

const IMG_OK=['application/pdf','image/png','image/jpeg','image/gif','image/webp','video/mp4','video/webm','video/quicktime'];
const json=(d,s)=>new Response(JSON.stringify(d),{status:s||200,headers:{'content-type':'application/json; charset=utf-8','cache-control':'no-store'}});
async function load(env){const d=await env.KV.get('data','json');return d&&d.members&&d.members.length?d:SEED}
function valid(d){return d&&typeof d==='object'&&d.company&&typeof d.company.name==='string'&&d.company.banner&&Array.isArray(d.teams)&&d.teams.length&&Array.isArray(d.members)&&d.members.length&&d.members.length<=500&&Array.isArray(d.faq)&&d.members.every(m=>m&&/^[a-z0-9]+$/i.test(m.id)&&typeof m.name==='string'&&m.name.trim())}
async function route(req,env,ctx){
 const u=new URL(req.url),o=u.origin;let p;try{p=decodeURIComponent(u.pathname)}catch(e){p=u.pathname}
 p=p.replace(/\/+$/,'')||'/';
 const admin=!!env.ADMIN_KEY&&req.headers.get('x-admin-key')===env.ADMIN_KEY;
 const ql=u.searchParams.get('lang');
 const lang=L[ql]?ql:((req.headers.get('accept-language')||'').split(',').map(s=>s.trim().slice(0,2).toLowerCase()).find(s=>L[s])||'en');
 if(p==='/robots.txt')return new Response('User-agent: *\nDisallow: /\n',{headers:{'content-type':'text/plain'}});
 if(p==='/favicon.ico')return new Response(null,{status:204});
 if(p.startsWith('/api/')){
  if(!admin)return json({error:'unauthorized'},401);
  if(p==='/api/data'){
   if(req.method==='GET')return json(await load(env));
   if(req.method==='PUT'){const txt=await req.text();if(txt.length>300000)return json({error:'too large'},413);let d;try{d=JSON.parse(txt)}catch(e){return json({error:'bad json'},400)}
    if(!valid(d))return json({error:'invalid'},400);((d.sig&&d.sig.blocks)||[]).forEach(b=>{if(b&&b.dyn===undefined&&['fair','holiday','text'].includes(b.type))b.dyn=true});d.ctpl=cleanCtpl(d.ctpl);await env.KV.put('data',JSON.stringify(d));return json({ok:true})}
  }
  if(p==='/api/sigprev'&&req.method==='POST'){let b;try{b=await req.json()}catch(e){return json({error:'bad json'},400)}
   const S1=await load(env),m1=S1.members.find(x=>x.id===b.mid)||S1.members[0],lg=L[b.lang]?b.lang:'en';S1.ctpl=cleanCtpl([{id:'cprev',name:'x',cfg:b.cfg}]);
   const h=sigHtml(S1,m1,lg,o,'cprev');return json({html:h,len:h.length})}
  if(p==='/api/stats'&&req.method==='GET'){if(!env.DB)return json({total:0});const since=Date.now()-30*86400000,q=s=>env.DB.prepare(s).bind(since).all().then(r=>r.results);
   const [bt,bc,bd]=await Promise.all([q('SELECT slug,target,src,COUNT(*) n FROM clicks WHERE ts>? GROUP BY slug,target,src ORDER BY n DESC LIMIT 100'),q('SELECT country,COUNT(*) n FROM clicks WHERE ts>? GROUP BY country ORDER BY n DESC LIMIT 50'),q("SELECT date(ts/1000,'unixepoch') day,COUNT(*) n FROM clicks WHERE ts>? GROUP BY day ORDER BY day DESC LIMIT 31")]);
   return json({total:bd.reduce((a,x)=>a+x.n,0),byTarget:bt,byCountry:bc,byDay:bd})}
  const im=p.match(/^\/api\/img\/(logo|logo-s|[pvb]-[a-z0-9]+|d-[a-z0-9]+-(?:en|es|tr|pt|fr|zh))$/i);
  if(im){
   if(req.method==='POST'){const ct=(req.headers.get('content-type')||'').split(';')[0];if(!IMG_OK.includes(ct))return json({error:'type'},415);
    const buf=await req.arrayBuffer();if(buf.byteLength>16*1048576)return json({error:'too large'},413);await env.KV.put('img:'+im[1],buf,{metadata:{ct}});return json({ok:true})}
   if(req.method==='DELETE'){await env.KV.delete('img:'+im[1]);return json({ok:true})}
  }
  return json({error:'not found'},404);
 }
 if(req.method!=='GET'&&req.method!=='HEAD')return new Response('Method not allowed',{status:405});
 const fm=p.match(/^\/flag\/([a-z]{2})\.png$/i);
 if(fm){const r=await fetch('https://flagcdn.com/w40/'+fm[1].toLowerCase()+'.png',{cf:{cacheEverything:true,cacheTtl:2592000}});return r.ok?new Response(r.body,{headers:{'content-type':'image/png','cache-control':'public, max-age=2592000'}}):new Response('Not found',{status:404})}
 const dm=p.match(/^\/img\/d-([a-z0-9]+)-(en|es|tr|pt|fr|zh)$/i);
 if(dm){const S1=await load(env),b=((S1.sig&&S1.sig.blocks)||[]).find(x=>x.id===dm[1]),td=new Date().toISOString().slice(0,10);
  const live=b&&b.on&&b.dyn&&!((b.from&&td<b.from)||(b.to&&td>b.to));let body=null;
  if(live){const r=await env.KV.getWithMetadata('img:d-'+dm[1]+'-'+dm[2].toLowerCase(),'arrayBuffer');body=r.value}
  if(!body)body=Uint8Array.from(atob('iVBORw0KGgoAAAANSUhEUgAAAWgAAAABCAYAAADzaTTzAAAAFElEQVR42mNgGAWjYBSMglEwKAEABaEAAXNsnFkAAAAASUVORK5CYII='),c=>c.charCodeAt(0));
  return new Response(body,{headers:{'content-type':'image/png','cache-control':'no-cache, max-age=0','x-content-type-options':'nosniff'}})}
 const g=p.match(/^\/img\/(logo|logo-s|[pvb]-[a-z0-9]+)$/i);
 if(g){let key=g[1];if(key==='logo'){const S0=await load(env);if(seasonOn(S0.company)&&S0.company.season.logo)key='logo-s'}const r=await env.KV.getWithMetadata('img:'+key,'arrayBuffer');if(!r.value)return new Response('Not found',{status:404});
  const ct=r.metadata&&IMG_OK.includes(r.metadata.ct)?r.metadata.ct:'application/octet-stream',n=r.value.byteLength;
  const h={'content-type':ct,'cache-control':'public, max-age=300','accept-ranges':'bytes','x-content-type-options':'nosniff'};
  const rg=(req.headers.get('range')||'').match(/^bytes=(\d*)-(\d*)$/);
  if(rg&&(rg[1]||rg[2])){let s=rg[1]?+rg[1]:Math.max(0,n-(+rg[2])),e=rg[1]&&rg[2]?Math.min(+rg[2],n-1):n-1;
   if(s>=n||s>e)return new Response(null,{status:416,headers:{'content-range':'bytes */'+n}});
   h['content-range']='bytes '+s+'-'+e+'/'+n;return new Response(r.value.slice(s,e+1),{status:206,headers:h})}
  return new Response(r.value,{headers:h})}
 const old=p.match(/^\/([a-z0-9-]+)\/(imza|kurulum)$/);if(old)return Response.redirect(o+'/'+old[1]+'/'+(old[2]==='imza'?'signature':'setup')+u.search,301);
 if(p==='/admin')return adminPage();
 if(p==='/scan')return scanPage();
 const S=await load(env);
 const cm=p.match(/^\/c\/(primary|accent|line|text)\.png$/);if(cm)return new Response(png1(roles(S.company)[cm[1]]),{headers:{'content-type':'image/png','cache-control':'public, max-age=600'}});
 if(p==='/')return indexPage(S,lang);
 const gm=p.match(/^\/go\/([a-z0-9-]+)\/([a-z]+)$/);
 if(gm){const x=S.members.find(y=>slug(y.name)===gm[1]);if(!x)return new Response('Not found',{status:404});
  const so=socials(x),dest={wa:waUrl(x,L[lang]),vcf:'/'+gm[1]+'.vcf',web:webUrl(S.company),linkedin:(so.find(s=>s[0]==='LinkedIn')||[])[1],instagram:(so.find(s=>s[0]==='Instagram')||[])[1]}[gm[2]];
  if(!dest)return new Response('Not found',{status:404});
  track(env,ctx,req,gm[1],gm[2],u.searchParams.get('s')||'card');
  return new Response(null,{status:302,headers:{location:dest,'cache-control':'no-store'}})}
 const seg=p.slice(1).split('/'),vcf=seg.length===1&&/\.vcf$/i.test(seg[0]),name=seg[0].replace(/\.vcf$/i,'').toLowerCase();
 const m=S.members.find(x=>slug(x.name)===name);
 if(m&&vcf)return new Response(vcard(m,S.company),{headers:{'content-type':'text/vcard; charset=utf-8','content-disposition':'attachment; filename="'+name+'.vcf"','cache-control':'no-store'}});
 if(m&&seg.length===1){track(env,ctx,req,name,'view',u.searchParams.get('s')||'direct');return cardPage(S,m,lang,o)}
 if(m&&seg.length===2&&seg[1]==='signature')return sigPage(S,m,lang,o,u.searchParams.get('tpl')||'');
 if(m&&seg.length===2&&seg[1]==='setup')return setupPage(S,m,lang,o);
 return page('Not found','<div class="wrap"><h1>Page not found</h1><p><a href="/">Back to the team page</a></p></div>',{status:404});
}
return {fetch:(req,env,ctx)=>route(req,env,ctx).catch(e=>new Response('Server error',{status:500}))};
})();export default W;