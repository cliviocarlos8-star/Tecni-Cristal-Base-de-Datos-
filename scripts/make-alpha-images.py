from pathlib import Path
import re
import subprocess
import xml.etree.ElementTree as ET

import numpy as np
from PIL import Image


PDF = Path('/workspace/scratch/68e4f7383213/upload/Vilux EXTRUSIÓN: ANODIZADO : LACADO : EFECTO MADERA.pdf')
WORK = Path('/tmp/alpha-line')
OUT = Path('/workspace/sites/tecni-cristal-catalogo/public/alpha')
WORK.mkdir(parents=True, exist_ok=True)
OUT.mkdir(parents=True, exist_ok=True)

# Source pages with staggered or crossing layouts need explicit article cells.
# Coordinates are in PDF points and were verified against the rendered pages.
MANUAL_CROPS = {
    'AK153': (25, 650, 185, 790),
    'AK155': (400, 150, 550, 350),
    'AK158': (360, 400, 500, 525),
    'AK171': (320, 145, 575, 280),
    'AK172': (150, 385, 460, 490),
    'AK128': (170, 535, 470, 795),
    'AK218': (350, 160, 540, 420),
    'AK219': (220, 520, 400, 790),
    'AK223': (315, 405, 460, 590),
}

subprocess.run(['pdftotext', '-f', '22', '-l', '44', '-bbox-layout', str(PDF), str(WORK / 'alpha.html')], check=True)
subprocess.run(['pdftoppm', '-f', '22', '-l', '44', '-r', '288', '-png', str(PDF), str(WORK / 'page')], check=True)

root = ET.parse(WORK / 'alpha.html').getroot()
ns = {'x': 'http://www.w3.org/1999/xhtml'}

items = []
for page_number, page in enumerate(root.findall('.//x:page', ns), 22):
    words = []
    for word in page.findall('.//x:word', ns):
        text = ''.join(word.itertext()).strip()
        words.append({
            'text': text,
            'x': float(word.attrib['xMin']),
            'y': float(word.attrib['yMin']),
        })

    candidates = []
    for word in words:
        if not re.fullmatch(r'AK\d+', word['text']):
            continue
        nearby_weight = any(
            other['text'].lower() == 'kg/m'
            and abs(other['x'] - word['x']) < 150
            and 0 < other['y'] - word['y'] < 35
            for other in words
        )
        if nearby_weight:
            candidates.append({'code': word['text'], 'x': word['x'], 'y': word['y']})

    # Some technical drawings repeat a referenced profile code. The article
    # heading is the leftmost occurrence on those pages.
    candidates = list({
        code: min((item for item in candidates if item['code'] == code), key=lambda item: item['x'])
        for code in {item['code'] for item in candidates}
    }.values())

    # Calculate each product cell independently inside its own column. A row-
    # based crop cuts tall profiles whenever the neighboring column starts a
    # second item sooner (AK121 and AK103 are representative examples).
    columns = {'left': [], 'right': []}
    for item in candidates:
        item['column'] = 'left' if item['x'] < 250 else 'right'
        columns[item['column']].append(item)
    for column in columns.values():
        column.sort(key=lambda value: value['y'])
        for index, item in enumerate(column):
            item['top'] = item['y'] + 29
            item['bottom'] = column[index + 1]['y'] - 24 if index + 1 < len(column) else 805

    rendered = Image.open(WORK / f'page-{page_number:03d}.png').convert('RGB')
    scale_x = rendered.width / 595.276
    scale_y = rendered.height / 841.89
    for item in sorted(candidates, key=lambda value: (value['y'], value['x'])):
            if item['code'] in MANUAL_CROPS:
                left, item_top, right, item_bottom = MANUAL_CROPS[item['code']]
            else:
                opposite = columns['right' if item['column'] == 'left' else 'left']
                overlaps_other_column = any(
                    other['top'] < item['bottom'] and other['bottom'] > item['top']
                    for other in opposite
                )
                if overlaps_other_column:
                    left, right = (18, 297.5) if item['column'] == 'left' else (297.5, 577)
                else:
                    left, right = 18, 577
                item_top, item_bottom = item['top'], item['bottom']
            crop = rendered.crop((
                int(left * scale_x), int(item_top * scale_y),
                int(right * scale_x), int(item_bottom * scale_y),
            ))
            # A teal separator belongs to the following catalog card. If one
            # enters the cell, cut before it and remove isolated teal pixels
            # from the neighboring column.
            pixels = np.asarray(crop).copy()
            teal = (
                (pixels[:, :, 0] < 115)
                & (pixels[:, :, 1] > 95)
                & (pixels[:, :, 2] > 80)
                & (pixels[:, :, 1] > pixels[:, :, 0] + 20)
            )
            separator_rows = np.where(teal.sum(axis=1) > crop.width * 0.18)[0]
            if len(separator_rows):
                crop = crop.crop((0, 0, crop.width, max(1, int(separator_rows[0]) - 10)))
                pixels = np.asarray(crop).copy()
                teal = (
                    (pixels[:, :, 0] < 115)
                    & (pixels[:, :, 1] > 95)
                    & (pixels[:, :, 2] > 80)
                    & (pixels[:, :, 1] > pixels[:, :, 0] + 20)
                )
            pixels[teal] = 255
            crop = Image.fromarray(pixels, 'RGB')
            # Remove empty outer whitespace while retaining a safety margin.
            gray = crop.convert('L')
            mask = gray.point(lambda value: 255 if value < 247 else 0)
            box = mask.getbbox()
            if box:
                margin = 64
                box = (
                    max(0, box[0] - margin), max(0, box[1] - margin),
                    min(crop.width, box[2] + margin), min(crop.height, box[3] + margin),
                )
                crop = crop.crop(box)

            canvas = Image.new('RGB', (900, 900), 'white')
            factor = min(760 / crop.width, 760 / crop.height)
            resized = crop.resize((round(crop.width * factor), round(crop.height * factor)), Image.Resampling.LANCZOS)
            canvas.paste(resized, ((900 - resized.width) // 2, (900 - resized.height) // 2))
            canvas.save(OUT / f"{item['code']}.png", optimize=True)
            items.append(item['code'])

if len(items) != 78 or len(set(items)) != 78:
    raise SystemExit(f'Expected 78 unique Alpha images, got {len(items)} / {len(set(items))}')

print({'images': len(items), 'unique': len(set(items)), 'size': (900, 900)})
