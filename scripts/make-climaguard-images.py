from pathlib import Path

from PIL import Image


SOURCE = Path('/tmp/climaguard-review')
OUT = Path('/workspace/sites/tecni-cristal-catalogo/public/climaguard')
OUT.mkdir(parents=True, exist_ok=True)


def fit(image: Image.Image, width: int, height: int) -> Image.Image:
    scale = min(width / image.width, height / image.height)
    return image.resize((int(image.width * scale), int(image.height * scale)), Image.Resampling.LANCZOS)


photo = fit(Image.open(SOURCE / 'img-004.png').convert('RGB'), 800, 500)
diagrams = [Image.open(SOURCE / f'img-{number:03d}.png').convert('RGB') for number in (6, 8, 10)]
canvas = Image.new('RGB', (900, 900), 'white')
canvas.paste(photo, ((900 - photo.width) // 2, 70))

x_positions = (80, 340, 600)
for diagram, x in zip(diagrams, x_positions):
    diagram = fit(diagram, 220, 220)
    canvas.paste(diagram, (x + (220 - diagram.width) // 2, 610 + (220 - diagram.height) // 2))

canvas.save(OUT / 'climaguard-sunlight.png', optimize=True)
print({'images': 1, 'size': canvas.size})
