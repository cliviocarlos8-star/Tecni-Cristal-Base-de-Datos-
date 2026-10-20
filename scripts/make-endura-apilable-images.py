from pathlib import Path
import subprocess

from PIL import Image


PDF = Path('/workspace/scratch/68e4f7383213/upload/Vilux EXTRUSIÓN: ANODIZADO : LACADO : EFECTO MADERA.pdf')
WORK = Path('/tmp/endura-apilable-line')
OUT = Path('/workspace/sites/tecni-cristal-catalogo/public/endura-apilable')

# Recortes individuales en puntos PDF: página, izquierda, arriba, derecha, abajo.
CROPS = {
    'CK700': (57, 72, 145, 315, 410),
    'CK704': (57, 350, 145, 560, 395),
    'CK705': (57, 72, 500, 310, 755),
    'CK701': (57, 350, 500, 570, 790),
    'CK706': (58, 35, 140, 300, 355),
    'CK702': (58, 350, 140, 510, 285),
    'CK703': (58, 195, 470, 375, 625),
}

WORK.mkdir(parents=True, exist_ok=True)
OUT.mkdir(parents=True, exist_ok=True)

subprocess.run([
    'pdftoppm', '-f', '57', '-l', '58', '-r', '288', '-png',
    str(PDF), str(WORK / 'page')
], check=True)

for code, (page, left, top, right, bottom) in CROPS.items():
    rendered = Image.open(WORK / f'page-{page:03d}.png').convert('RGB')
    scale_x = rendered.width / 595.276
    scale_y = rendered.height / 841.89
    crop = rendered.crop((
        round(left * scale_x), round(top * scale_y),
        round(right * scale_x), round(bottom * scale_y),
    ))
    mask = crop.convert('L').point(lambda value: 255 if value < 247 else 0)
    box = mask.getbbox()
    if not box:
        raise SystemExit(f'Sin contenido visible: {code}')
    margin = 60
    crop = crop.crop((
        max(0, box[0] - margin), max(0, box[1] - margin),
        min(crop.width, box[2] + margin), min(crop.height, box[3] + margin),
    ))
    canvas = Image.new('RGB', (900, 900), 'white')
    factor = min(760 / crop.width, 760 / crop.height)
    resized = crop.resize(
        (round(crop.width * factor), round(crop.height * factor)),
        Image.Resampling.LANCZOS,
    )
    canvas.paste(resized, ((900 - resized.width) // 2, (900 - resized.height) // 2))
    canvas.save(OUT / f'{code}.png', optimize=True)

print({'images': len(CROPS), 'unique': len(set(CROPS)), 'size': (900, 900)})
