"""Generates the fictional demo media (flat illustrated avatars, an animated portrait video and a GIF).
No real people are depicted. Requires Pillow and ffmpeg.   python3 tools/make-demo-media.py
"""
import math, os, subprocess, tempfile
from PIL import Image, ImageDraw, ImageFont

OUT = os.path.join(os.path.dirname(__file__), '..', 'assets', 'demo')
os.makedirs(OUT, exist_ok=True)
BOLD = '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'

# id: skin, hair, hair style, shirt, bg1, bg2, glasses, beard
PEOPLE = {
 'm1': ('#e8b996', '#3a2a22', 'long',  '#14508c', '#cfe3f7', '#8fb8e3', False, False),
 'm2': ('#d9a07a', '#201a17', 'short', '#1a1d24', '#d8dde8', '#aab4c8', True,  False),
 'm3': ('#c98b64', '#1b1412', 'short', '#1f9d57', '#d8f0e2', '#9bd3b3', False, True),
 'm4': ('#e6b08e', '#6b3a22', 'curly', '#14508c', '#f6e3cf', '#e8c29d', False, False),
 'm5': ('#6e4430', '#0e0b0a', 'short', '#14508c', '#e4e8f2', '#b9c3dc', False, True),
 'm6': ('#b97c58', '#1b1412', 'bun',   '#1f9d57', '#f3dede', '#e3b4b4', True,  False),
 'm7': ('#efc9a5', '#15110f', 'long',  '#1a1d24', '#e2ecf3', '#a9c7da', False, False),
 'm8': ('#a8693f', '#15110f', 'short', '#14508c', '#efe8d4', '#d9c999', True,  False),
 'm9': ('#e2ae8c', '#5a3422', 'bun',   '#1f9d57', '#e8e0f3', '#c2b2de', False, False),
}

def grad(W, H, c1, c2):
    im = Image.new('RGB', (W, H)); d = ImageDraw.Draw(im)
    for y in range(H):
        t = y / (H - 1)
        c = tuple(int(int(c1[i:i+2], 16) * (1 - t) + int(c2[i:i+2], 16) * t) for i in (1, 3, 5))
        d.line([(0, y), (W, y)], fill=c)
    return im

def person(S, k, t=0.0, mouth_open=0.0, blink=False, H=None):
    skin, hair, style, shirt, b1, b2, glasses, beard = PEOPLE[k]
    sc = 2; W = S * sc; HH = (H or S) * sc
    im = grad(W, HH, b1, b2); d = ImageDraw.Draw(im)
    dx = math.sin(t * 2 * math.pi) * W * .008; dy = math.sin(t * 4 * math.pi) * W * .004
    cx = W / 2 + dx
    def E(x0, y0, x1, y1, f): d.ellipse([x0, y0 + dy, x1, y1 + dy], fill=f)
    # back hair
    if style == 'long': E(cx - .22*W, W*.2, cx + .22*W, W*.78, hair)
    if style == 'bun': E(cx - .07*W, W*.14, cx + .07*W, W*.26, hair)
    if style == 'curly':
        for i in range(-3, 4): E(cx + i*.055*W - .05*W, W*.17 + abs(i)*.012*W, cx + i*.055*W + .05*W, W*.3 + abs(i)*.012*W, hair)
    # shoulders + neck
    E(cx - .42*W, W*.7, cx + .42*W, W*1.3, shirt)
    if HH > W: d.rectangle([cx - .42*W, W + dy, cx + .42*W, HH], fill=shirt)
    d.rectangle([cx - .055*W, W*.56 + dy, cx + .055*W, W*.72 + dy], fill=tuple(max(0, int(skin[i:i+2], 16) - 18) for i in (1, 3, 5)))
    d.polygon([(cx - .1*W, W*.72 + dy), (cx, W*.8 + dy), (cx + .1*W, W*.72 + dy)], fill='#ffffff')
    # head
    E(cx - .17*W, W*.22, cx + .17*W, W*.62, skin)
    # ears
    E(cx - .185*W, W*.41, cx - .15*W, W*.49, skin); E(cx + .15*W, W*.41, cx + .185*W, W*.49, skin)
    # hair cap
    d.pieslice([cx - .185*W, W*.2 + dy, cx + .185*W, W*.6 + dy], 193, 347, fill=hair)
    if style == 'long':
        d.rectangle([cx - .185*W, W*.34 + dy, cx - .15*W, W*.5 + dy], fill=hair); d.rectangle([cx + .15*W, W*.34 + dy, cx + .185*W, W*.5 + dy], fill=hair)
    # beard
    if beard:
        d.pieslice([cx - .17*W, W*.3 + dy, cx + .17*W, W*.66 + dy], 20, 160, fill=hair)
        d.ellipse([cx - .05*W, W*.5 + dy, cx + .05*W, W*.5 + .02*W + dy + mouth_open*W*.03], fill='#7a3b3b')
    # eyes
    ey = W * .43 + dy
    for sx in (-1, 1):
        ex = cx + sx * .07 * W
        if blink: d.line([ex - .02*W, ey, ex + .02*W, ey], fill='#1a1a1a', width=int(W*.006))
        else: d.ellipse([ex - .013*W, ey - .016*W, ex + .013*W, ey + .016*W], fill='#1a1a1a')
        yl, yr = (ey - .046*W, ey - .036*W) if sx == 1 else (ey - .036*W, ey - .046*W)
        d.line([ex - .03*W, yl, ex + .03*W, yr], fill=hair, width=int(W*.008))
    if glasses:
        for sx in (-1, 1):
            ex = cx + sx * .07 * W
            d.ellipse([ex - .04*W, ey - .035*W, ex + .04*W, ey + .035*W], outline='#222831', width=int(W*.007))
        d.line([cx - .03*W, ey, cx + .03*W, ey], fill='#222831', width=int(W*.007))
    # nose + mouth
    d.line([cx, W*.45 + dy, cx - .012*W, W*.5 + dy], fill=tuple(max(0, int(skin[i:i+2], 16) - 40) for i in (1, 3, 5)), width=int(W*.006))
    if not beard:
        if mouth_open > .05: d.ellipse([cx - .04*W, W*.53 + dy, cx + .04*W, W*.53 + .02*W + mouth_open*W*.035 + dy], fill='#8a3a3a')
        else: d.arc([cx - .045*W, W*.5 + dy, cx + .045*W, W*.56 + dy], 20, 160, fill='#8a3a3a', width=int(W*.007))
    return im.resize((S, H or S), Image.LANCZOS)

def font(sz):
    return ImageFont.truetype(BOLD, sz)

# static avatars
for k in PEOPLE:
    if k == 'm1': continue
    person(480, k).save(os.path.join(OUT, f'p-{k}.jpg'), quality=88)
person(480, 'm1').save(os.path.join(OUT, 'p-m1.jpg'), quality=88)

# portrait video (720x1200, 3:5): 4 s loop at 24 fps
VW, VH, FPS, N = 720, 1200, 24, 96
with tempfile.TemporaryDirectory() as tmp:
    for i in range(N):
        t = i / N
        fr = person(720, 'm1', t, H=1200, mouth_open=(max(0, math.sin(t * 2 * math.pi * 3)) * .9 if .1 < t < .75 else 0), blink=(0.42 < t < 0.45))
        d = ImageDraw.Draw(fr)
        a = min(1, max(0, (t - .08) / .1)) * (1 if t < .85 else max(0, (1 - t) / .15))
        if a > 0:
            msg1, msg2 = 'Hello, I am Elif.', 'Fictional demo video'
            w1 = d.textlength(msg1, font=font(46)); bx = (VW - w1) / 2 - 34
            bg = Image.new('RGBA', (VW, VH), (0, 0, 0, 0)); bd = ImageDraw.Draw(bg)
            bd.rounded_rectangle([bx, 930, VW - bx, 1060], 28, fill=(255, 255, 255, int(235 * a)))
            bd.text((VW / 2, 970), msg1, font=font(46), fill=(20, 80, 140, int(255 * a)), anchor='mt')
            bd.text((VW / 2, 1026), msg2, font=font(24), fill=(90, 96, 112, int(255 * a)), anchor='mt')
            fr = Image.alpha_composite(fr.convert('RGBA'), bg).convert('RGB')
        fr.save(os.path.join(tmp, f'f{i:03d}.png'))
    mp4 = os.path.join(OUT, 'v-m1.mp4')
    subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-framerate', str(FPS), '-i', os.path.join(tmp, 'f%03d.png'), '-c:v', 'libx264', '-crf', '24', '-preset', 'veryfast', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', mp4], check=True)
    # 108x180 GIF for the e-mail signature
    pal = os.path.join(tmp, 'pal.png')
    vf = 'fps=10,scale=108:180:flags=lanczos'
    subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', mp4, '-vf', vf + ',palettegen=max_colors=96', pal], check=True)
    subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', mp4, '-i', pal, '-lavfi', vf + '[x];[x][1:v]paletteuse=dither=bayer:bayer_scale=4', '-loop', '0', os.path.join(OUT, 'p-m1.gif')], check=True)
os.remove(os.path.join(OUT, 'p-m1.jpg'))
print(sorted(os.listdir(OUT)))
