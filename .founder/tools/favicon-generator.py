#!/usr/bin/env python3
"""
favicon-generator.py — Generate the full Midas Tools favicon set.

Outputs (in public/):
  favicon.ico                 (multi-size 16/32/48)
  favicon-16x16.png
  favicon-32x32.png
  favicon-48x48.png
  apple-touch-icon.png        (180x180, iOS home screen)
  android-chrome-192x192.png  (PWA)
  android-chrome-512x512.png  (PWA splash)
  site.webmanifest            (PWA manifest)

Brand: bold "M" letterform on accent #3B5FFF rounded square, white glyph,
small accent dot top-right echoing the MIDAS·TOOLS wordmark separator.

Re-run with: python3 .founder/tools/favicon-generator.py
"""
from PIL import Image, ImageDraw, ImageFont
import os

ACCENT = (59, 95, 255, 255)   # #3B5FFF — Midas Tools brand blue
WHITE  = (255, 255, 255, 255)
DOT    = (255, 255, 255, 230)

PROJECT_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
PUBLIC_DIR   = os.path.join(PROJECT_ROOT, 'public')

FONT_CANDIDATES = [
    '/System/Library/Fonts/SFCompact.ttf',
    '/System/Library/Fonts/SFNS.ttf',
    '/System/Library/Fonts/HelveticaNeue.ttc',
    '/System/Library/Fonts/Avenir.ttc',
]

def find_font(size):
    for path in FONT_CANDIDATES:
        if os.path.exists(path):
            try:
                return ImageFont.truetype(path, size)
            except (OSError, IOError):
                continue
    return ImageFont.load_default()

def render_icon(size: int, with_dot: bool = True) -> Image.Image:
    """Render the brand mark at <size>x<size>."""
    # Use 4x supersample for crisp downscaling
    scale = 4
    s = size * scale
    img = Image.new('RGBA', (s, s), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    # Rounded-square background
    radius = int(s * 0.22)
    draw.rounded_rectangle([(0, 0), (s, s)], radius=radius, fill=ACCENT)

    # Bold "M" centered
    font_size = int(s * 0.62)
    font = find_font(font_size)
    text = 'M'
    # Compute text bounds for accurate centering
    bbox = draw.textbbox((0, 0), text, font=font)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    tx = (s - tw) // 2 - bbox[0]
    ty = (s - th) // 2 - bbox[1] - int(s * 0.02)  # nudge up slightly
    draw.text((tx, ty), text, fill=WHITE, font=font)

    # Accent dot top-right (echoes MIDAS·TOOLS wordmark separator)
    # Skip on smallest icons where dot becomes noise
    if with_dot and size >= 32:
        dot_radius = int(s * 0.07)
        dot_cx = int(s * 0.78)
        dot_cy = int(s * 0.22)
        draw.ellipse(
            [(dot_cx - dot_radius, dot_cy - dot_radius),
             (dot_cx + dot_radius, dot_cy + dot_radius)],
            fill=DOT,
        )

    # Downscale with high quality
    return img.resize((size, size), Image.LANCZOS)

def write_png(path: str, img: Image.Image) -> None:
    img.save(path, 'PNG', optimize=True)
    print(f'  wrote {os.path.relpath(path, PROJECT_ROOT)} ({img.size[0]}x{img.size[1]})')

def main() -> None:
    os.makedirs(PUBLIC_DIR, exist_ok=True)
    print(f'Generating favicons → {PUBLIC_DIR}')

    sizes = {
        'favicon-16x16.png':           (16,  False),
        'favicon-32x32.png':           (32,  True),
        'favicon-48x48.png':           (48,  True),
        'apple-touch-icon.png':        (180, True),
        'android-chrome-192x192.png':  (192, True),
        'android-chrome-512x512.png':  (512, True),
        'favicon.png':                 (32,  True),  # backwards-compat with existing href
    }

    rendered = {}
    for filename, (size, with_dot) in sizes.items():
        img = render_icon(size, with_dot=with_dot)
        rendered[size] = img
        write_png(os.path.join(PUBLIC_DIR, filename), img)

    # favicon.ico — multi-resolution (16, 32, 48)
    ico_path = os.path.join(PUBLIC_DIR, 'favicon.ico')
    rendered[48].save(
        ico_path,
        format='ICO',
        sizes=[(16, 16), (32, 32), (48, 48)],
    )
    print(f'  wrote {os.path.relpath(ico_path, PROJECT_ROOT)} (multi-size)')

    # site.webmanifest
    manifest = (
        '{\n'
        '  "name": "Midas Tools",\n'
        '  "short_name": "Midas",\n'
        '  "description": "AI productivity stack for coaches, consultants, and experts.",\n'
        '  "icons": [\n'
        '    { "src": "/android-chrome-192x192.png", "sizes": "192x192", "type": "image/png" },\n'
        '    { "src": "/android-chrome-512x512.png", "sizes": "512x512", "type": "image/png" }\n'
        '  ],\n'
        '  "theme_color": "#3B5FFF",\n'
        '  "background_color": "#FFFFFF",\n'
        '  "display": "standalone",\n'
        '  "start_url": "/"\n'
        '}\n'
    )
    manifest_path = os.path.join(PUBLIC_DIR, 'site.webmanifest')
    with open(manifest_path, 'w') as f:
        f.write(manifest)
    print(f'  wrote {os.path.relpath(manifest_path, PROJECT_ROOT)}')

    print('\nDone. Next: link in pages/_document.js Head.')

if __name__ == '__main__':
    main()
