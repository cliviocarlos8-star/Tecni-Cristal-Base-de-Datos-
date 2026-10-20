from pathlib import Path
from PIL import Image,ImageDraw,ImageFont

SRC=Path('/tmp/vidrios-line/page-03.png')
OUT=Path('/workspace/sites/tecni-cristal-catalogo/public/tipos-vidrio'); OUT.mkdir(parents=True,exist_ok=True)
im=Image.open(SRC).convert('RGB')
crops={
'VILUX-VID-TEMP':(1100,470,1485,700),'VILUX-VID-LAM':(1100,850,1485,1060),
'VILUX-VID-DVH':(1110,1190,1470,1600),'VILUX-VID-STAMPA':(1020,1620,1415,1995)}
def save_crop(code,box):
 c=im.crop(box); canvas=Image.new('RGB',(900,900),'white'); c.thumbnail((790,790),Image.Resampling.LANCZOS); canvas.paste(c,((900-c.width)//2,(900-c.height)//2)); canvas.save(OUT/f'{code}.png',optimize=True)
for code,box in crops.items(): save_crop(code,box)

placeholders={
'VILUX-VID-SUNLIGHT':('ClimaGuard SunLight','#a9d9ee'),
'VILUX-VID-SS20':('SunGuard Solar Silver 20','#7895a4'),
'VILUX-VID-CHAMP':('Sunlux Champagne','#cdb78e'),
'VILUX-VID-STIP':('Stipolite','#d9e0e4'),
'VILUX-VID-TERMO':('Termoendurecido','#a8c2cf')}
font=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf',44)
small=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf',24)
for code,(name,color) in placeholders.items():
 c=Image.new('RGB',(900,900),'white'); d=ImageDraw.Draw(c); d.rounded_rectangle((95,150,805,750),45,fill=color,outline='#008dd2',width=8)
 d.line((160,260,740,640),fill='white',width=16); d.line((160,640,740,260),fill='white',width=8)
 box=d.textbbox((0,0),name,font=font); d.text(((900-(box[2]-box[0]))/2,370),name,font=font,fill='#00243b')
 msg='Muestra técnica referencial'; box=d.textbbox((0,0),msg,font=small); d.text(((900-(box[2]-box[0]))/2,455),msg,font=small,fill='#142532')
 c.save(OUT/f'{code}.png',optimize=True)
print({'images':len(crops)+len(placeholders),'unique':len(crops)+len(placeholders),'size':(900,900)})
