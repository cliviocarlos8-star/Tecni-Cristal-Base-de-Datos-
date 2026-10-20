from pathlib import Path
import re
import subprocess
import xml.etree.ElementTree as ET

import numpy as np
from PIL import Image


PDF = Path('/workspace/scratch/68e4f7383213/upload/Vilux EXTRUSIÓN: ANODIZADO : LACADO : EFECTO MADERA.pdf')
WORK = Path('/tmp/integra-line')
OUT = Path('/workspace/sites/tecni-cristal-catalogo/public/integra')
TARGETS = {
    'CK600','CK601','CK650','CK651','CK652','CK653','CK654','CK655','CK656','CK657',
    'CK658','CK659','CK660','CK661','CK662','CK663','CK664','CK665','DS238','MN015',
}
MANUAL_CROPS = {
    'CK659': (390, 140, 525, 350),
    'CK660': (70, 640, 500, 790),
    'CK664': (330, 140, 545, 555),
}
WORK.mkdir(parents=True, exist_ok=True)
OUT.mkdir(parents=True, exist_ok=True)

subprocess.run(['pdftotext','-f','47','-l','54','-bbox-layout',str(PDF),str(WORK/'pages.html')],check=True)
subprocess.run(['pdftoppm','-f','47','-l','54','-r','288','-png',str(PDF),str(WORK/'page')],check=True)

root=ET.parse(WORK/'pages.html').getroot()
ns={'x':'http://www.w3.org/1999/xhtml'}
created=[]

for page_number,page in enumerate(root.findall('.//x:page',ns),47):
    words=[]
    for word in page.findall('.//x:word',ns):
        words.append({'text':''.join(word.itertext()).strip(),'x':float(word.attrib['xMin']),'y':float(word.attrib['yMin'])})
    candidates=[]
    for word in words:
        if word['text'] not in TARGETS:
            continue
        has_weight=any(
            other['text'].lower()=='kg/m' and abs(other['x']-word['x'])<150 and 0<other['y']-word['y']<35
            for other in words
        )
        if has_weight:
            candidates.append({'code':word['text'],'x':word['x'],'y':word['y']})

    columns={'left':[],'right':[]}
    for item in candidates:
        item['column']='left' if item['x']<250 else 'right'
        columns[item['column']].append(item)
    for column in columns.values():
        column.sort(key=lambda value:value['y'])
        for index,item in enumerate(column):
            item['top']=item['y']+29
            item['bottom']=column[index+1]['y']-24 if index+1<len(column) else 805

    rendered=Image.open(WORK/f'page-{page_number:03d}.png').convert('RGB')
    scale_x=rendered.width/595.276
    scale_y=rendered.height/841.89
    for item in sorted(candidates,key=lambda value:(value['y'],value['x'])):
        if item['code'] in MANUAL_CROPS:
            left,item_top,right,item_bottom=MANUAL_CROPS[item['code']]
        else:
            opposite=columns['right' if item['column']=='left' else 'left']
            overlap=any(other['top']<item['bottom'] and other['bottom']>item['top'] for other in opposite)
            if overlap:
                left,right=(18,297.5) if item['column']=='left' else (297.5,577)
            else:
                left,right=18,577
            item_top,item_bottom=item['top'],item['bottom']
        crop=rendered.crop((int(left*scale_x),int(item_top*scale_y),int(right*scale_x),int(item_bottom*scale_y)))

        pixels=np.asarray(crop).copy()
        teal=(pixels[:,:,0]<115)&(pixels[:,:,1]>95)&(pixels[:,:,2]>80)&(pixels[:,:,1]>pixels[:,:,0]+20)
        separator_rows=np.where(teal.sum(axis=1)>crop.width*0.18)[0]
        if len(separator_rows):
            crop=crop.crop((0,0,crop.width,max(1,int(separator_rows[0])-10)))
            pixels=np.asarray(crop).copy()
            teal=(pixels[:,:,0]<115)&(pixels[:,:,1]>95)&(pixels[:,:,2]>80)&(pixels[:,:,1]>pixels[:,:,0]+20)
        pixels[teal]=255
        crop=Image.fromarray(pixels,'RGB')

        mask=crop.convert('L').point(lambda value:255 if value<247 else 0)
        box=mask.getbbox()
        if box:
            margin=64
            crop=crop.crop((max(0,box[0]-margin),max(0,box[1]-margin),min(crop.width,box[2]+margin),min(crop.height,box[3]+margin)))
        canvas=Image.new('RGB',(900,900),'white')
        factor=min(760/crop.width,760/crop.height)
        resized=crop.resize((round(crop.width*factor),round(crop.height*factor)),Image.Resampling.LANCZOS)
        canvas.paste(resized,((900-resized.width)//2,(900-resized.height)//2))
        canvas.save(OUT/f"{item['code']}.png",optimize=True)
        created.append(item['code'])

if set(created)!=TARGETS or len(created)!=len(TARGETS):
    raise SystemExit({'created':created,'missing':sorted(TARGETS-set(created))})
print({'images':len(created),'unique':len(set(created)),'size':(900,900)})
