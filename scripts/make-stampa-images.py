from pathlib import Path
import subprocess
from PIL import Image

PDF=Path('/workspace/scratch/68e4f7383213/upload/VILUX-STAMPA-MARMOL.pdf')
WORK=Path('/tmp/stampa-line/source')
OUT=Path('/workspace/sites/tecni-cristal-catalogo/public/stampa-marmol')
CODES={
2:['TCGHD-1100-61','TCGHD-200-10','TCGHD-1100-77','TCGHD-1100-31','TCGHD-1100-63','TCGHD-1100-64','TCGHD-1100-65','TCGHD-1100-66','TCGHD-1100-67','TCGHD-1100-68','TCGHD-1100-70','TCGHD-1100-71'],
3:['TCGHD-1100-72','TCGHD-1100-73','TCGHD-1100-74','TCGHD-1100-75','TCGHD-1100-62','TCGHD-1100-33','TCGHD-1100-02','TCGHD-1100-04','TCGHD-1100-05','TCGHD-1100-06','TCGHD-1100-07','TCGHD-1100-08'],
4:['TCGHD-1100-09','TCGHD-1100-10','TCGHD-1100-13','TCGHD-1100-16','TCGHD-1100-17','TCGHD-1100-19','TCGHD-1100-20','TCGHD-1100-21','TCGHD-1100-22','TCGHD-1100-23','TCGHD-1100-26','TCGHD-1100-27'],
5:['TCGHD-1100-29','TCGHD-1100-30','TCGHD-100-27','TCGHD-600-54','TCGHD-1100-78','TCGHD-1100-92','TCGHD-1100-80','TCGHD-1100-81','TCGHD-1100-82','TCGHD-1100-83','TCGHD-1100-86','TCGHD-1100-87'],
6:['TCGHD-1100-88','TCGHD-1100-89','TCGHD-1100-91','TCGHD-1100-79','TCGHD-1100-98','TCGHD-1100-96']}
WORK.mkdir(parents=True,exist_ok=True); OUT.mkdir(parents=True,exist_ok=True)
if not (WORK/'page-2.png').exists():
    subprocess.run(['pdftoppm','-f','2','-l','6','-r','216','-png',str(PDF),str(WORK/'page')],check=True)
for page,codes in CODES.items():
    im=Image.open(WORK/f'page-{page}.png').convert('RGB')
    sx=im.width/396.848; sy=im.height/841.89
    for i,code in enumerate(codes):
        row=i//2; col=i%2
        # Solo la muestra completa: excluye la franja negra del código y los vecinos.
        left=col*198.424; right=(col+1)*198.424
        top=row*140.315; bottom=top+121.5
        crop=im.crop((round(left*sx),round(top*sy),round(right*sx),round(bottom*sy)))
        canvas=Image.new('RGB',(900,900),'white')
        crop.thumbnail((840,840),Image.Resampling.LANCZOS)
        canvas.paste(crop,((900-crop.width)//2,(900-crop.height)//2))
        canvas.save(OUT/f'{code}.png',optimize=True)
print({'images':sum(map(len,CODES.values())),'unique':len({c for v in CODES.values() for c in v}),'size':(900,900)})
