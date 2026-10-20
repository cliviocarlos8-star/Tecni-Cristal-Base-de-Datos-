from pathlib import Path
import subprocess
import xml.etree.ElementTree as ET

import numpy as np
from PIL import Image


PDF = Path('/workspace/scratch/68e4f7383213/upload/Vilux EXTRUSIÓN: ANODIZADO : LACADO : EFECTO MADERA.pdf')
WORK = Path('/tmp/city-line')
OUT = Path('/workspace/sites/tecni-cristal-catalogo/public/city')

# código: página, límite izquierdo, límite derecho, límite inferior (puntos PDF)
CELLS = {
    'VL025':(108,25,570,420),'VL032':(108,25,570,795),
    'VL001':(109,25,570,430),'VL030':(109,25,570,795),
    'VL024':(110,25,570,430),'VL028':(110,25,570,795),
    'VL041':(111,25,570,480),'VL068':(111,25,570,795),
    'VL005':(112,25,570,330),'VL003':(112,25,570,580),'VL066':(112,25,570,795),
    'VL067':(113,25,570,320),'CM129':(113,25,570,570),'VL011':(113,25,570,795),
    'VL043':(114,25,570,430),'LC041':(114,25,570,630),
    'FC369':(114,25,297,795),'FC368':(114,297,570,795),
    'VL048':(115,25,570,795),
}

WORK.mkdir(parents=True, exist_ok=True)
OUT.mkdir(parents=True, exist_ok=True)
subprocess.run(['pdftotext','-f','108','-l','115','-bbox-layout',str(PDF),str(WORK/'pages.html')],check=True)
subprocess.run(['pdftoppm','-f','108','-l','115','-r','288','-png',str(PDF),str(WORK/'page')],check=True)

root=ET.parse(WORK/'pages.html').getroot()
ns={'x':'http://www.w3.org/1999/xhtml'}
positions={}
for page_number,page in enumerate(root.findall('.//x:page',ns),108):
    words=[{
        'text':''.join(word.itertext()).strip(),
        'x':float(word.attrib['xMin']),'y':float(word.attrib['yMin'])
    } for word in page.findall('.//x:word',ns)]
    for word in words:
        if word['text'] not in CELLS or page_number!=CELLS[word['text']][0]:
            continue
        has_weight=any(
            other['text'].lower()=='kg/m' and abs(other['x']-word['x'])<170 and 0<other['y']-word['y']<38
            for other in words
        )
        if has_weight:
            positions[word['text']]=(page_number,word['y'])

if set(positions)!=set(CELLS):
    raise SystemExit({'missing_positions':sorted(set(CELLS)-set(positions))})

for code,(page,left,right,bottom) in CELLS.items():
    detected_page,code_y=positions[code]
    if detected_page!=page:
        raise SystemExit(f'Página incorrecta para {code}: {detected_page}')
    top=code_y+28
    rendered=Image.open(WORK/f'page-{page:03d}.png').convert('RGB')
    scale_x=rendered.width/595.276
    scale_y=rendered.height/841.89
    crop=rendered.crop((round(left*scale_x),round(top*scale_y),round(right*scale_x),round(bottom*scale_y)))

    pixels=np.asarray(crop).copy()
    teal=(pixels[:,:,0]<125)&(pixels[:,:,1]>90)&(pixels[:,:,2]>75)&(pixels[:,:,1]>pixels[:,:,0]+18)
    separator_rows=np.where(teal.sum(axis=1)>crop.width*0.12)[0]
    separator_rows=separator_rows[separator_rows>80]
    if len(separator_rows):
        crop=crop.crop((0,0,crop.width,max(1,int(separator_rows[0])-12)))
        pixels=np.asarray(crop).copy()
        teal=(pixels[:,:,0]<125)&(pixels[:,:,1]>90)&(pixels[:,:,2]>75)&(pixels[:,:,1]>pixels[:,:,0]+18)
    pixels[teal]=255
    crop=Image.fromarray(pixels,'RGB')
    mask=crop.convert('L').point(lambda value:255 if value<247 else 0)
    box=mask.getbbox()
    if not box:
        raise SystemExit(f'Sin contenido visible: {code}')
    margin=60
    crop=crop.crop((max(0,box[0]-margin),max(0,box[1]-margin),min(crop.width,box[2]+margin),min(crop.height,box[3]+margin)))
    canvas=Image.new('RGB',(900,900),'white')
    factor=min(760/crop.width,760/crop.height)
    resized=crop.resize((round(crop.width*factor),round(crop.height*factor)),Image.Resampling.LANCZOS)
    canvas.paste(resized,((900-resized.width)//2,(900-resized.height)//2))
    canvas.save(OUT/f'{code}.png',optimize=True)

print({'images':len(CELLS),'unique':len(set(CELLS)),'size':(900,900)})
