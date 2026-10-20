from pathlib import Path

from PIL import Image, ImageDraw


EXTRACTED = Path('/tmp/alumetal-review/extracted')
OUT = Path('/workspace/sites/tecni-cristal-catalogo/public/alumetal')
OUT.mkdir(parents=True, exist_ok=True)

PRODUCT = EXTRACTED / 'img-015.jpg'
PAGE = Image.open('/tmp/alumetal-review/page-1.png').convert('RGB')
SWATCH_BOXES = {
    'Azul': (892, 1350, 1007, 1390),
    'Blanco': None,
    'Rojo': (892, 1460, 1007, 1498),
    'Marron cafe': (892, 1517, 1007, 1554),
    'Grey metallic (grafito)': (892, 1573, 1007, 1610),
    'Silver metallic': (892, 1629, 1007, 1667),
    'Negro': (892, 1685, 1007, 1722),
    'Amarillo': (892, 1725, 1007, 1745),
    'Naranja': (892, 1750, 1007, 1770),
    'Dorado': (892, 1780, 1007, 1800),
}

ITEMS = {
    'PA3MMAZ': 'Azul', 'PA4MMAZ': 'Azul',
    'PA3MMBLANCO': 'Blanco', 'PA4MMBLANCO': 'Blanco',
    'PA3MMROJO': 'Rojo', 'PA4MMROJO': 'Rojo',
    'PA3MMCAFE': 'Marron cafe', 'PA4MMCAFE': 'Marron cafe',
    'PA3MMGRAFITO': 'Grey metallic (grafito)', 'PA4MMGRAFITO': 'Grey metallic (grafito)',
    'PA3MMSILVE': 'Silver metallic', 'PA4MMSILVE': 'Silver metallic',
    'PA3MMNEGRO': 'Negro', 'PA4MMNEGRO': 'Negro',
    'PA4MMAM': 'Amarillo', 'PA4MMNAR': 'Naranja', 'PA4MMDOR': 'Dorado',
}


def fit(image: Image.Image, max_width: int, max_height: int) -> Image.Image:
    scale = min(max_width / image.width, max_height / image.height)
    return image.resize((int(image.width * scale), int(image.height * scale)), Image.Resampling.LANCZOS)


product = fit(Image.open(PRODUCT).convert('RGB'), 780, 480)
for code, color in ITEMS.items():
    canvas = Image.new('RGB', (900, 900), 'white')
    canvas.paste(product, ((900 - product.width) // 2, 105))
    swatch_box = SWATCH_BOXES[color]
    if swatch_box:
        swatch = PAGE.crop(swatch_box).resize((700, 185), Image.Resampling.LANCZOS)
    else:
        swatch = Image.new('RGB', (700, 185), (247, 247, 244))
    canvas.paste(swatch, (100, 610))
    draw = ImageDraw.Draw(canvas)
    draw.rounded_rectangle((98, 608, 802, 797), radius=14, outline=(203, 213, 218), width=3)
    canvas.save(OUT / f'{code}.png', optimize=True)

print({'images': len(list(OUT.glob('*.png'))), 'expected': len(ITEMS)})
