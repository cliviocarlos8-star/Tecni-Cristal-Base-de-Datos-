from pathlib import Path
import subprocess

import numpy as np
from PIL import Image


PDF = Path('/workspace/scratch/68e4f7383213/upload/Vilux EXTRUSIÓN: ANODIZADO : LACADO : EFECTO MADERA.pdf')
WORK = Path('/tmp/elegance-line')
OUT = Path('/workspace/sites/tecni-cristal-catalogo/public/elegance')

# codigo: pagina, izquierda, derecha, arriba, abajo (puntos PDF)
CELLS = {
    'MO6200':(126,30,285,150,360),'MO6201':(126,310,565,150,360),
    'MO7713':(126,30,285,475,760),'MO7714':(126,310,565,475,760),
    'MO6240':(127,30,565,150,380),'MO6241':(127,30,565,480,760),
    'MO6906':(128,30,565,150,380),'MO7731':(128,30,565,480,760),
    'MO6203':(129,30,285,155,365),'MO6248':(129,310,565,155,365),
    'MO6207':(129,30,285,465,760),'MO7715':(129,310,565,465,760),
    'MO6209':(130,30,285,155,450),'MO6252':(130,310,565,155,450),
    'MO6204':(130,30,285,575,760),'MO6249':(130,310,565,575,760),
    'MO6250':(131,30,285,150,300),'MO6255':(131,310,565,150,300),
    'MO6909':(131,30,285,395,540),'MO6908':(131,310,565,395,540),
    'MO7716':(131,220,450,650,760),
    'MO6216':(132,30,285,150,300),'MO6229':(132,310,565,150,300),
    'MO7705':(132,30,285,395,530),'MO6259':(132,310,565,395,505),
    'MO7707':(132,30,565,650,760),
    'MO6215':(133,30,285,150,365),'MO7706':(133,310,565,150,365),
    'MO6258':(133,30,285,470,760),'MO6236':(133,310,565,470,760),
    'MO6224':(134,30,285,155,365),'MO6214':(134,310,565,155,365),
    'MO6222':(134,30,285,550,760),'MO6218':(134,310,565,550,760),
    'MO6219':(135,30,565,155,400),
    'MO6907':(135,30,285,600,760),'MO6246':(135,310,565,600,760),
    'MO6237':(136,30,190,150,300),'MO6232':(136,215,380,150,300),'MO6230':(136,405,565,150,300),
    'MO6226':(136,30,190,420,530),'MO6225':(136,215,380,420,530),'MO6217':(136,405,565,420,530),
    'MO6212':(136,215,390,635,790),
    'MO7711':(137,250,440,150,270),'MO6205':(137,210,400,405,510),
    'MO6213':(137,45,285,670,790),'MO6228':(137,390,570,670,790),
}

WORK.mkdir(parents=True, exist_ok=True)
OUT.mkdir(parents=True, exist_ok=True)
subprocess.run(['pdftoppm','-f','126','-l','137','-r','288','-png',str(PDF),str(WORK/'page')],check=True)

for code,(page,left,right,top,bottom) in CELLS.items():
    rendered=Image.open(WORK/f'page-{page:03d}.png').convert('RGB')
    sx=rendered.width/595.276; sy=rendered.height/841.89
    crop=rendered.crop((round(left*sx),round(top*sy),round(right*sx),round(bottom*sy)))
    pixels=np.asarray(crop).copy()
    teal=(pixels[:,:,0]<125)&(pixels[:,:,1]>90)&(pixels[:,:,2]>75)&(pixels[:,:,1]>pixels[:,:,0]+18)
    pixels[teal]=255
    crop=Image.fromarray(pixels,'RGB')
    mask=crop.convert('L').point(lambda value:255 if value<247 else 0)
    box=mask.getbbox()
    if not box:
        raise SystemExit(f'Sin contenido visible: {code}')
    margin=65
    crop=crop.crop((max(0,box[0]-margin),max(0,box[1]-margin),min(crop.width,box[2]+margin),min(crop.height,box[3]+margin)))
    canvas=Image.new('RGB',(900,900),'white')
    factor=min(750/crop.width,750/crop.height)
    resized=crop.resize((round(crop.width*factor),round(crop.height*factor)),Image.Resampling.LANCZOS)
    canvas.paste(resized,((900-resized.width)//2,(900-resized.height)//2))
    canvas.save(OUT/f'{code}.png',optimize=True)

print({'images':len(CELLS),'unique':len(set(CELLS)),'size':(900,900)})
