from pathlib import Path
import subprocess

from PIL import Image


PDF = Path('/workspace/scratch/68e4f7383213/upload/Vilux EXTRUSIÓN: ANODIZADO : LACADO : EFECTO MADERA.pdf')
WORK = Path('/tmp/endura-plegable-line')
OUT = Path('/workspace/sites/tecni-cristal-catalogo/public/endura-plegable')

# Recortes individuales en puntos PDF: página, izquierda, arriba, derecha, abajo.
# Cada caja contiene únicamente el dibujo técnico completo del artículo.
CROPS = {
    'CK710': (55, 145, 145, 455, 405),
    'CK713': (55, 72, 520, 285, 735),
    'CK714': (55, 305, 520, 558, 730),
    'CK711': (56, 150, 145, 370, 415),
    'CK712': (56, 150, 520, 370, 790),
}

WORK.mkdir(parents=True, exist_ok=True)
OUT.mkdir(parents=True, exist_ok=True)

subprocess.run([
    'pdftoppm', '-f', '55', '-l', '56', '-r', '288', '-png',
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
