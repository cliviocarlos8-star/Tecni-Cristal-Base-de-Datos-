from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

SITE = Path('/workspace/sites/tecni-cristal-catalogo')
SOURCE = Path('/workspace/scratch/68e4f7383213/sources/aldaba/render/page-2.png')
OUT = SITE / 'public/aldaba-light'
OUT.mkdir(parents=True, exist_ok=True)


def canvas_from(image: Image.Image) -> Image.Image:
    image = image.convert('RGB')
    scale = min(760 / image.width, 760 / image.height)
    image = image.resize((max(1, int(image.width * scale)), max(1, int(image.height * scale))), Image.Resampling.LANCZOS)
    canvas = Image.new('RGB', (900, 900), 'white')
    canvas.paste(image, ((900-image.width)//2, (900-image.height)//2))
    return canvas


def save_crop(code: str, source: Image.Image, box: tuple[int, int, int, int], clean_gray=False):
    crop = source.crop(box).convert('RGB')
    if clean_gray:
        px = crop.load()
        for y in range(crop.height):
            for x in range(crop.width):
                r, g, b = px[x, y]
                if abs(r-g) < 10 and abs(g-b) < 10 and 75 < r < 145:
                    px[x, y] = (255, 255, 255)
    canvas_from(crop).save(OUT / f'{code}.png', optimize=True)


page = Image.open(SOURCE)
for code, box in {
    'ME185': (500, 455, 700, 565),
    'AK141': (500, 565, 710, 685),
    'ME081': (500, 760, 710, 890),
    'CK506': (490, 945, 720, 1095),
}.items():
    save_crop(code, page, box, clean_gray=True)

sources = {
    '6-22051-P': (SITE/'public/nova/AP62251P.png', (400, 400, 560, 560)),
    'CL006': (SITE/'public/fachadas/CL006.png', (250, 330, 745, 735)),
    'CL011': (SITE/'public/fachadas/CL011.png', (425, 190, 750, 505)),
    'FRA822': (SITE/'public/gd/FRA822.png', (390, 155, 625, 710)),
}
for code, (path, box) in sources.items():
    save_crop(code, Image.open(path), box)

canvas = Image.new('RGB', (900, 900), 'white')
draw = ImageDraw.Draw(canvas)
font_bold = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 56)
font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 30)
draw.rounded_rectangle((160, 250, 740, 650), radius=28, outline='#cbd5e1', width=4, fill='#f8fafc')
draw.text((450, 365), 'DOB751', anchor='mm', font=font_bold, fill='#00243b')
draw.text((450, 455), 'Imagen individual no publicada', anchor='mm', font=font, fill='#64748b')
draw.text((450, 500), 'en la ficha técnica', anchor='mm', font=font, fill='#64748b')
canvas.save(OUT/'DOB751.png', optimize=True)

print({'images': len(list(OUT.glob('*.png')))})
