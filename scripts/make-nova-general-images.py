from pathlib import Path
import re
import subprocess
import xml.etree.ElementTree as ET

import numpy as np
from PIL import Image


PDF = Path('/workspace/scratch/68e4f7383213/upload/Vilux EXTRUSIÓN: ANODIZADO : LACADO : EFECTO MADERA.pdf')
WORK = Path('/tmp/nova-general-line')
OUT = Path('/workspace/sites/tecni-cristal-catalogo/public/nova-general')

# código: página, límite izquierdo, límite derecho, límite inferior (puntos PDF)
CELLS = {
    'IN012':(59,25,570,315),'IN013':(59,25,570,565),'IN002':(59,25,570,795),
    'IN003':(60,25,570,315),'IN047':(60,25,570,565),'IN114':(60,25,570,795),
    'IN043':(61,25,570,340),'IN044':(61,25,570,545),'IN021':(61,25,570,795),
    'IN020':(62,25,570,350),'IN052':(62,25,570,585),'IN115':(62,25,570,795),
    'IN023':(63,25,570,338),'IN022':(63,25,570,575),'IN102':(63,25,570,795),
    'IN111':(64,25,570,480),'IN121':(64,25,570,795),
    'IN122':(65,25,570,450),'IN123':(65,25,570,795),
    'IN006':(66,20,297,338),'IN230':(66,297,575,310),
    'IN008':(66,20,297,575),'IN007':(66,297,575,545),
    'IN181':(66,20,297,795),'IN004':(66,297,575,795),
    'IN011':(67,20,297,430),'IN151':(67,297,575,430),
    'IN079':(67,20,297,795),'IN005':(67,297,575,795),
    'IN010':(68,20,297,480),'IN009':(68,297,575,455),'IN035':(68,120,480,795),
    'IN130':(69,20,297,440),'IN128':(69,297,575,410),
    'IN133':(69,20,297,795),'IN132':(69,297,575,795),
    'IN134':(70,20,297,410),'IN139':(70,297,575,390),
    'IN131':(70,20,297,795),'IN129':(70,297,575,795),
    'IN017':(71,20,297,490),'IN018':(71,297,575,465),
    'IN119':(71,20,297,795),'IN120':(71,297,575,795),
    'IN056':(72,20,575,390),'IN015':(72,20,297,795),'IN054':(72,297,575,795),
    'IN116':(73,20,210,410),'IN049':(73,200,395,410),'IN037':(73,385,575,410),
    'IN014':(73,20,575,795),
    'IN055':(74,20,205,320),'IN104':(74,195,395,320),'IN203':(74,385,575,320),
    'IN061':(74,20,297,580),'IN058':(74,297,575,555),
    'IN057':(74,20,297,795),'IN060':(74,297,575,795),
    'MH125':(75,20,297,300),'MH106':(75,297,575,300),
    'IN065':(75,20,575,590),'IN066':(75,20,575,795),
}

WORK.mkdir(parents=True, exist_ok=True)
OUT.mkdir(parents=True, exist_ok=True)
subprocess.run(['pdftotext','-f','59','-l','75','-bbox-layout',str(PDF),str(WORK/'pages.html')],check=True)
subprocess.run(['pdftoppm','-f','59','-l','75','-r','288','-png',str(PDF),str(WORK/'page')],check=True)

root=ET.parse(WORK/'pages.html').getroot()
ns={'x':'http://www.w3.org/1999/xhtml'}
positions={}
for page_number,page in enumerate(root.findall('.//x:page',ns),59):
    for word in page.findall('.//x:word',ns):
        text=''.join(word.itertext()).strip()
        if text in CELLS:
            positions[text]=(page_number,float(word.attrib['yMin']))

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
