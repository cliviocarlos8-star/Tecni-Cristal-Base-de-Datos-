from pathlib import Path

from PIL import Image


EXTRACTED = Path('/tmp/3m-review/extracted')
OUT = Path('/workspace/sites/tecni-cristal-catalogo/public/3m')
OUT.mkdir(parents=True, exist_ok=True)


def source(number: int) -> Path:
    matches = list(EXTRACTED.glob(f'img-{number:03d}.*'))
    if len(matches) != 1:
        raise RuntimeError(f'Expected one source for image {number}, found {matches}')
    return matches[0]


def save(codes: list[str], number: int):
    image = Image.open(source(number)).convert('RGB')
    mask = Image.open(source(number + 1)).convert('L')
    if mask.size != image.size:
        mask = mask.resize(image.size, Image.Resampling.LANCZOS)
    scale = min(760 / image.width, 760 / image.height)
    size = (max(1, int(image.width * scale)), max(1, int(image.height * scale)))
    image = image.resize(size, Image.Resampling.LANCZOS)
    mask = mask.resize(size, Image.Resampling.LANCZOS)
    canvas = Image.new('RGB', (900, 900), 'white')
    canvas.paste(image, ((900 - size[0]) // 2, (900 - size[1]) // 2), mask)
    for code in codes:
        canvas.save(OUT / f'{code}.png', optimize=True)


products = [
    (['3M4670228'], 24), (['3M499159'], 26), (['3M467017', '3M467083'], 28),
    (['3M0466985', '3M49101933'], 40), (['3M226020', '3M225996'], 44),
    (['3M273398', '3M281406'], 47), (['3M021302'], 38), (['3M7000049774'], 42),
    (['3M039259'], 57), (['3M000932'], 60), (['3M198000'], 62),
    (['3M003278'], 65), (['3M028595'], 67), (['3M316486'], 69),
    (['3M000728'], 77), (['3M138192'], 79), (['3M000750'], 81),
    (['3M000751'], 87), (['3M033192'], 90),
    (['3M110951'], 95), (['3M028631'], 106), (['3M228331'], 101), (['3M001941'], 99),
    (['3M051991'], 113), (['3M000193'], 117), (['3M002008'], 120),
    (['3M211073'], 129), (['3M132742'], 127), (['3M109223', '3M114636'], 132),
    (['3M112436'], 137), (['3M240000', '3M240004', '3M239985', '3M239982'], 139),
    (['3M051849'], 147), (['3M002326'], 151), (['3M034912'], 154),
    (['3M034763', '3M034764'], 157), (['3M100644'], 159),
    (['3M028955'], 169), (['3M133325'], 172), (['3M344036'], 164), (['3M001996'], 166),
]

for codes, number in products:
    save(codes, number)

print({'images': len(list(OUT.glob('*.png'))), 'expected': 49})
