from pathlib import Path

from PIL import Image

RENDER = Path('/tmp/gd-flaute-render')
OUT = Path('/workspace/sites/tecni-cristal-catalogo/public/gd-flaute')
OUT.mkdir(parents=True, exist_ok=True)


def save(code: str, page: int, box: tuple[int, int, int, int]):
    image = Image.open(RENDER / f'page-{page:02d}.png').convert('RGB').crop(box)
    # Trim only the empty white margin while preserving every dimension line.
    gray = image.convert('L')
    mask = gray.point(lambda p: 255 if p < 245 else 0)
    bbox = mask.getbbox()
    if bbox:
        image = image.crop((max(0, bbox[0]-20), max(0, bbox[1]-20), min(image.width, bbox[2]+20), min(image.height, bbox[3]+20)))
    scale = min(820/image.width, 820/image.height)
    image = image.resize((max(1, int(image.width*scale)), max(1, int(image.height*scale))), Image.Resampling.LANCZOS)
    canvas = Image.new('RGB', (900, 900), 'white')
    canvas.paste(image, ((900-image.width)//2, (900-image.height)//2))
    canvas.save(OUT / f'{code}.png', optimize=True)


rows = {
    5: ('LG245F', 'LG274F'),
    6: ('LG157', 'LG111'),
    7: ('CK373', 'CK374'),
    8: ('LG044', 'LG124'),
    9: ('LG006', 'LG007'),
    10: ('LG050', 'LG028'),
    11: ('LG251F', 'LG250F'),
    12: ('LG139', 'LG138'),
}
for page, (upper, lower) in rows.items():
    save(upper, page, (80, 300, 1550, 1120))
    save(lower, page, (80, 1300, 1550, 2160))

for code, box in {
    'BG057': (60, 300, 870, 1120),
    'LG026': (900, 300, 1710, 1120),
    'LG059': (60, 1320, 870, 2160),
    'LG015': (900, 1320, 1710, 2160),
}.items():
    save(code, 13, box)

print({'images': len(list(OUT.glob('*.png')))})
