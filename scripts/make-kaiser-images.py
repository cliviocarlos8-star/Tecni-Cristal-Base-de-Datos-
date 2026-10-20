from pathlib import Path
import subprocess
import numpy as np
from PIL import Image

PDF=Path('/workspace/scratch/68e4f7383213/upload/Vilux EXTRUSIÓN: ANODIZADO : LACADO : EFECTO MADERA.pdf')
WORK=Path('/tmp/kaiser-line'); OUT=Path('/workspace/sites/tecni-cristal-catalogo/public/kaiser')
# codigo: pagina, izquierda, derecha, arriba, abajo
CELLS={
'EK901':(149,25,340,180,330),'EK1':(149,25,350,540,705),
'EK903':(150,25,240,170,320),'EK902':(150,320,405,155,375),'EK904':(150,20,260,525,710),'EK905':(150,300,405,545,720),
'EK6768':(151,90,450,215,380),'EK907':(151,80,440,585,725),'EK94':(152,70,460,205,435),
'EK6313':(153,70,305,160,275),'EK7976':(153,325,405,150,385),'CK501':(153,65,325,350,515),'EK7977':(153,65,360,620,775),
'EK8':(154,105,350,140,305),'EK44':(154,55,205,470,730),
'EK216':(155,75,320,165,315),'EK217':(155,65,320,575,745),
'EK215':(156,40,235,185,325),'CK543':(156,245,440,140,365),'EK7975':(156,45,430,590,715),
'CK504':(157,60,225,145,310),'CK503':(157,280,430,145,310),
}
WORK.mkdir(parents=True,exist_ok=True); OUT.mkdir(parents=True,exist_ok=True)
subprocess.run(['pdftoppm','-f','149','-l','157','-r','288','-png',str(PDF),str(WORK/'page')],check=True)
for code,(page,left,right,top,bottom) in CELLS.items():
 im=Image.open(WORK/f'page-{page:03d}.png').convert('RGB'); sx=im.width/595.276; sy=im.height/841.89
 crop=im.crop((round(left*sx),round(top*sy),round(right*sx),round(bottom*sy)))
 px=np.asarray(crop).copy(); teal=(px[:,:,0]<125)&(px[:,:,1]>90)&(px[:,:,2]>75)&(px[:,:,1]>px[:,:,0]+18); px[teal]=255; crop=Image.fromarray(px,'RGB')
 box=crop.convert('L').point(lambda v:255 if v<247 else 0).getbbox()
 if not box: raise SystemExit(f'Sin contenido: {code}')
 m=65; crop=crop.crop((max(0,box[0]-m),max(0,box[1]-m),min(crop.width,box[2]+m),min(crop.height,box[3]+m)))
 canvas=Image.new('RGB',(900,900),'white'); f=min(750/crop.width,750/crop.height); crop=crop.resize((round(crop.width*f),round(crop.height*f)),Image.Resampling.LANCZOS); canvas.paste(crop,((900-crop.width)//2,(900-crop.height)//2)); canvas.save(OUT/f'{code}.png',optimize=True)
print({'images':len(CELLS),'unique':len(set(CELLS)),'size':(900,900)})
