export type Item={codigo:string;nombre:string;color:string;categoria:string;peso?:string;imagen:string;tipologia?:string};

const P=(codigo:string,nombre:string,peso:string,tipologia="Comunes"):Item=>({codigo,nombre,color:"No especificado",categoria:"Perfiles",peso,imagen:`/mitos/${codigo}.png`,tipologia});
export const mitosProfiles:Item[]=[
P("MT301","Marco perimetral ventana","0,597 kg/m","Batiente / Oscilobatiente"),P("MT304","Marco perimetral puerta","0,718 kg/m","Batiente / Oscilobatiente"),P("MT307","Marco perimetral combinable","0,848 kg/m","Fijo"),P("AK158","Unión - clip de marcos","0,121 kg/m"),
P("MT309","Hoja perimetral - ventana","0,702 kg/m","Abatible / Batiente / Oscilobatiente"),P("MT334","Hoja perimetral","0,707 kg/m","Proyectante"),P("MT310","Hoja perimetral apertura interna","0,953 kg/m","Batiente"),P("MT337","Hoja perimetral apertura externa","0,910 kg/m","Batiente"),
P("MT308","Tapajunta doble hoja","0,715 kg/m","Batiente / Oscilobatiente"),P("MT314","Travesaño ventana / puerta","0,745 kg/m","Abatible / Batiente / Fijo / Oscilobatiente"),P("MT321","Travesaño puerta","1,047 kg/m","Batiente"),P("MT320","Zócalo puerta","1,072 kg/m","Batiente"),
P("MT322","Cortaviento inferior","0,221 kg/m","Batiente"),P("MT360","Goterón inferior","0,143 kg/m","Proyectante"),P("AK147","Cortaviento inferior","0,292 kg/m","Batiente"),P("AK118","Vedación base para piso","0,316 kg/m","Batiente"),P("AK131","Contravidrio para vidrio de 4 a 12 mm","0,239 kg/m","Abatible / Batiente / Fijo / Oscilobatiente / Proyectante"),P("AK132","Contravidrio para vidrio de 13 a 22 mm","0,176 kg/m","Abatible / Batiente / Fijo / Oscilobatiente / Proyectante"),
P("MT702","Marco perimetral 2 rieles","0,910 kg/m","Corrediza"),P("MT714","Marco perimetral acople multirriel","0,577 kg/m","Corrediza"),P("MT705","Hoja perimetral ventana sin contravidrio para DVH hasta 22 mm","0,533 kg/m","Corrediza"),P("MT710","Hoja perimetral ventana sin contravidrio para vidrio de 4 a 12 mm","0,599 kg/m","Corrediza"),
P("MT720","Hoja perimetral puerta sin contravidrio para DVH hasta 22 mm","0,739 kg/m","Corrediza"),P("MT721","Hoja perimetral puerta sin contravidrio para vidrio de 4 a 12 mm","0,789 kg/m","Corrediza"),P("MT708","Hoja perimetral para mosquitera","0,647 kg/m","Corrediza"),P("MT730","Travesa sin contravidrio para DVH hasta 22 mm","0,698 kg/m","Corrediza"),P("MT711","Cruce enganche central ventana","0,269 kg/m","Corrediza"),
P("MT713","Cruce enganche central puerta","0,317 kg/m","Corrediza"),P("MT726","Cruce enganche doble ventanas","0,418 kg/m","Corrediza"),P("MT712","Encastre central","0,198 kg/m","Corrediza"),P("MT217","Complemento de protección","0,153 kg/m","Corrediza"),P("CK546","Complemento riel para mosquitera","0,110 kg/m","Mosquitera"),P("AK113","Hoja perimetral para mosquitera","0,459 kg/m","Mosquitera"),
P("AK155","Travesaño para mosquitera","0,482 kg/m","Mosquitera"),P("AK222","Refuerzo para hoja MT720 / MT721","0,798 kg/m","Corrediza"),P("AK223","Tapa para refuerzo AK222","0,425 kg/m","Corrediza"),P("AK103","Contramarco curvo","0,212 kg/m"),P("AK157","Contramarco recto","0,195 kg/m"),P("AK170","Contramarco externo e interno","0,363 kg/m"),
P("AK171","Contramarco prolongador 57 mm","0,409 kg/m"),P("AK172","Contramarco prolongador 71 mm","0,462 kg/m"),P("MT153","Premarco - tratamiento natural","0,408 kg/m"),P("AK154","Varilla de accionamiento","0,140 kg/m","Abatible / Batiente / Fijo / Oscilobatiente"),P("MT724","Enguiador para cierre multipunto - tratamiento natural","0,174 kg/m","Corrediza"),P("AK225","Unión para marcos","0,349 kg/m"),
P("AK215","Marco para drenaje","0,779 kg/m","Corrediza"),P("AK126","Esquinero variable externo","0,752 kg/m"),P("AK127","Esquinero variable interno","0,738 kg/m"),P("AK128","Esquinero a 90° fijo","1,014 kg/m")];

const A=(codigo:string,nombre:string,color="No especificado",imagen=codigo,tipologia="Comunes",categoria="Herrajes y accesorios"):Item=>({codigo,nombre,color,categoria,imagen:`/mitos/${imagen}.png`,tipologia});
const V=(nombre:string,imagen:string,tipologia:string,rows:[string,string][],categoria="Herrajes y accesorios")=>rows.map(([codigo,color])=>A(codigo,nombre,color,imagen,tipologia,categoria));
const mitosAccessoryGroups:Item[][]=[
[A("MA123112","Brazo proyectante 313 mm","No especificado","MA123112","Proyectante"),A("MA123316","Brazo proyectante 418 mm","No especificado","MA123316","Proyectante")],
V("Manija simple con caja giratoria","MA3042","Proyectante",[["MA3042NEOPA","Negro"],["MA3042ARGEN","Blanco"],["MA3042R9010","Fosco"]]),
[A("M130120","Compás apertura abatible","No especificado","M130120","Abatible")],V("Golpete","M1560","Abatible / Proyectante",[["M1560NG","Negro"],["M1560BL","Blanco"],["M1560F","Fosco"]]),
V("Bisagra de ventana izquierda","M024I","Batiente / Abatible",[["M024IBL","Blanco"],["M024ING","Negro"],["M024IF","Fosco"]]),V("Bisagra de ventana derecha","M024D","Batiente / Abatible",[["M024DBL","Blanco"],["M024DNG","Negro"],["M024DF","Fosco"]]),
[A("MA09020","Tapa y salida de agua 30 × 5 mm","No especificado","MA09020","Abatible / Oscilobatiente / Batiente")],
V("Kit 1 hoja con cremona","MR1118","Oscilobatiente",[["MR1118BL","Blanco"],["MR1118NG","Negro"],["MR1118IF","Fosco"]]),V("Kit hoja pasiva oscilobatiente","MR1116","Oscilobatiente",[["MR1116BL","Blanco"],["MR1116NG","Negro"],["MR1116IF","Fosco"]]),
[A("MB110302","Compás oscilante","No especificado","MB110302","Oscilobatiente")],V("Juego de manija puerta","MA05082","Batiente / Corrediza",[["MA05082BL","Blanco"],["MA05082NG","Negro"],["MA05082F","Fosco"]]),
[A("MA74135","Cerradura monopunto con contracerradura","No especificado","MA74135","Batiente"),A("MA8209304094","Cilindro descentrado 30/40","No especificado","MA8209304094","Batiente / Corrediza")],
V("Terminación para cilindro","MA2129","Batiente / Corrediza",[["MA2129NEOPA4","Blanco"],["MA2129R90104","Negro"],["MA2129ARGEN4","Fosco"]]),V("Bisagra de puerta","MC0170","Batiente / Abatible",[["MC0170BL","Blanco"],["MC0170NG","Negro"],["MC0170F","Fosco"]]),
[A("MA112610","Pasador","No especificado","MA112610","Batiente"),A("MA72G5013508","Cerradura de 3 puntos","No especificado","MA72G5013508","Batiente"),A("MA038061","Contracerradura central para 3 puntos","No especificado","MA038061","Batiente"),A("MA038701","Contracerradura adicional para 3 puntos","No especificado","MA038701","Batiente"),A("M1750","Tapón inversor","No especificado","M1750","Batiente")],
V("Cremona practicable","MA0790","Batiente",[["MA0790BL","Blanco"],["MA0790NG","Negro"],["MA0790F","Fosco"]]),[A("M07K1H","Kit practicable 1 hoja","No especificado","M07K1H","Batiente"),A("M07K2H","Kit practicable 2 hojas","No especificado","M07K2H","Batiente")],
V("Bisagra para tercera hoja","M014D","Batiente / Abatible",[["M014DBL","Blanco"],["M014DNG","Negro"],["M014DF","Fosco"]]),
[A("M1706","Rueda simple - 80 kg","No especificado","M1706","Corrediza"),A("M1712","Rueda doble - 150 kg","No especificado","M1712","Corrediza"),A("M1700","Enguiador interno","No especificado","M1700","Corrediza"),A("M1702","Tapón de cruce","No especificado","M1702","Corrediza")],
V("Cierre uñera mini","MB03300","Corrediza",[["MB03300BL","Blanco"],["MB03300NG","Negro"],["MB03300F","Fosco"]]),[A("M03003","Gancho","No especificado","M03003","Corrediza")],V("Cierre uñera sin llave","M034000","Corrediza",[["M034000BL","Blanco"],["M034000NG","Negro"],["M034000F","Fosco"]]),[A("M0403149","Gancho","No especificado","M0403149","Corrediza")],V("Cierre uñero con llave","MO34100","Corrediza",[["MO34100BL","Blanco"],["MO34100NG","Negro"],["MO34100F","Fosco"]]),[A("M0403198","Contragancho","No especificado","M0403198","Corrediza")],
[A("MS05211600","Multipunto sin llave 1600 mm - 3 puntos","No especificado","MS05211600","Corrediza"),A("M05231600","Multipunto con llave 1600 mm - 3 puntos","No especificado","M05231600","Corrediza"),A("MA05202","Kit cerradero multipunto - 3 puntos","No especificado","MA05202","Corrediza")],
V("Manija acodada izquierda","MB0778","Corrediza",[["MB0778BL","Blanco"],["MB0778NG","Negro"],["MB07780F","Fosco"]]),V("Manija acodada derecha","MB0777","Corrediza",[["MB0777BL","Blanco"],["MB0777NG","Negro"],["MB0777F","Fosco"]]),V("Manija multipunto","MA0771","Corrediza",[["MA0771BL","Blanco"],["MA0771NG","Negro"],["MA0771F","Fosco"]]),[A("M1704","Limitador de apertura","No especificado","M1704","Corrediza"),A("M1708","Cortavientos adhesivo","No especificado","M1708","Corrediza")],
[A("TNZC0050","Roldana para hoja mosquitera","No especificado","TNZC0050","Mosquitera"),A("TNZM0080","Tirador en nylon - mosquitero","No especificado","TNZM0080","Mosquitera"),A("AP381065","Escuadra gancho - hoja mosquitero","No especificado","AP381065","Mosquitera"),A("TNZF0070","Enguiador superior con muelle","No especificado","TNZF0070","Mosquitera"),A("AP81098C","Escuadra tetón redondo - 29 × 11 mm"),A("AP01134F","Escuadra pivote - 29 × 11 mm")],
[A("M10-190097-CE","Escuadra pivote - 19 × 9,7 mm"),A("M10-205097-CI","Escuadra pivote interior - 20,5 × 9,7 mm"),A("M81-287357336-CR","Escuadra tetón redondo - 28,7 × 35,7 mm"),A("AP62251P","Escuadra de alineación - 5 × 2,2 mm"),A("M6-049315014","Escuadra de alineación - 4,9 × 1,4 mm"),A("M6-058315009","Escuadra de alineación - 0,9 × 5,8 mm")],
V("Felpa 5 × 7 mm - rollo 50 m","FEL5X7","Comunes",[["FEL5X7BLA","Blanco"],["FEL5X7NEG","Negro"],["FEL5X7GRIS","Fosco"]],"Felpudos y guarniciones"),V("Felpa 7 × 7 mm - rollo 50 m","FEL7X7","Comunes",[["FEL7X7BLA","Blanco"],["FEL7X7NEG","Negro"],["FEL7X7GRIS","Fosco"]],"Felpudos y guarniciones"),V("Felpa 6 × 7 mm - rollo 50 m","FEL6X7","Comunes",[["FEL6X7BLA","Blanco"],["FEL6X7NEG","Negro"],["FEL6X7GRIS","Fosco"]],"Felpudos y guarniciones"),
[A("GUA397","Guarnición EPDM","Negro","GUA397","Mosquitera","Felpudos y guarniciones"),A("GUA30947","Guarnición EPDM perimetral interior hoja","Negro","GUA30947","Comunes","Felpudos y guarniciones"),A("GUAJCMT","Guarnición EPDM de estanqueidad marco","Negro","GUAJCMT","Comunes","Felpudos y guarniciones"),A("GUA442","Guarnición EPDM de estanqueidad marco","Negro","GUA442","Comunes","Felpudos y guarniciones"),A("GUA173","Guarnición EPDM acristalamiento externo - 2 mm","Negro","GUA173","Comunes","Felpudos y guarniciones"),A("GUAC2N","Guarnición EPDM acristalamiento interno - 2 mm","Negro","GUAC2N","Comunes","Felpudos y guarniciones"),A("GUAC3N","Guarnición EPDM acristalamiento interno - 3 mm","Negro","GUAC3N","Comunes","Felpudos y guarniciones"),A("GUAC4N","Guarnición EPDM acristalamiento interno - 4 mm","Negro","GUAC4N","Comunes","Felpudos y guarniciones"),A("GUAC5N","Guarnición EPDM acristalamiento interno - 5 mm","Negro","GUAC5N","Comunes","Felpudos y guarniciones"),A("GUAC6N","Guarnición EPDM acristalamiento interno - 6 mm","Negro","GUAC6N","Comunes","Felpudos y guarniciones")]
];

const calzoSpecs:[string,string,string[]][]=[
["CALDOB102","Calzo simple - 90 × 10 × 2 mm",["CALDOB102P","CALDOB102V2","CALDOB102"]],["CALDOB103","Calzo simple - 90 × 10 × 3 mm",["CALDOB103P","CALDOB103"]],["CALDOB104","Calzo simple - 90 × 10 × 4 mm",["CALDOB104P","CALDOB104V2","CALDOB104"]],["CALDOB105","Calzo simple - 90 × 10 × 5 mm",["CALDOB105P","CALDOB105V2","CALDOB105"]],
["CALDOB201","Calzo doble - 90 × 20 × 1 mm",["CALDOB201P","CALDOB201V2","CALDOB201"]],["CALDOB202","Calzo doble - 90 × 20 × 2 mm",["CALDOB202P","CALDOB202V2","CALDOB202"]],["CALDOB203","Calzo doble - 90 × 20 × 3 mm",["CALDOB203P","CALDOB203V2","CALDOB203"]],["CALDOB204","Calzo doble - 90 × 20 × 4 mm",["CALDOB204P","CALDOB204V2","CALDOB204"]],["CALDOB205","Calzo doble - 90 × 20 × 5 mm",["CALDOB205P","CALDOB205V2","CALDOB205"]],["CALDOB206","Calzo doble - 90 × 20 × 6 mm",["CALDOB206P","CALDOB206V2","CALDOB206"]],["CALDOB2014","Calzo doble - 90 × 20 × 14 mm",["CALDOB2014P","CALDOB2014V2","CALDOB2014"]]];
const calzos=calzoSpecs.flatMap(([img,nombre,codes])=>codes.map(code=>A(code,nombre,"No especificado",img.includes("10")&&!["CALDOB2014"].includes(img)?"CALZOSIMPLE":"CALZODOBLE")));
const comunes=[A("PALEACRIS","Paleta para acristalar"),A("APPRE005","Pata de agarre"),A("APPRE006","Cruceta para premarco - 300 mm"),A("APPRE007","Cruceta para premarco - 600 mm"),A("MA501065","Tirador en aluminio - 650 mm","Aluminio"),A("MA501036","Tirador en aluminio - 360 mm","Aluminio"),A("MA5231","Fijación de tirador","No especificado")];
export const mitosAccessories=[...mitosAccessoryGroups.flat(),...calzos,...comunes];
export const mitosData=[...mitosProfiles,...mitosAccessories];

const PG=(codigo:string,nombre:string,peso:string,tipologia="Comunes"):Item=>({codigo,nombre,color:"No especificado",categoria:"Perfiles",peso,imagen:`/gd/${codigo}.png`,tipologia});
export const gdProfiles:Item[]=[
PG("LG079","Columna divisoria atornillada para fijos","0,769 kg/m","Fijo"),
PG("LG176","Columna divisoria reforzada","1,420 kg/m","Fijo"),
PG("LG028","Complemento encastre lateral para marco","0,427 kg/m","Corrediza"),
PG("LG111","Complemento riel inferior para marcos corrediza","0,100 kg/m","Corrediza"),
PG("RM019","Contramarco curvo de 40 mm","0,205 kg/m"),
PG("RM021","Contramarco curvo de 40 mm con resalte interior","0,212 kg/m"),
PG("RM025","Contramarco curvo de 70 mm","0,386 kg/m"),
PG("RM005","Contramarco recto","0,221 kg/m"),
PG("RM002","Contramarco curvo 37 mm","0,212 kg/m"),
PG("BG057","Contravidrio horizontal recto de 13,5 mm","0,158 kg/m"),
PG("LG015","Contravidrio para DVH","0,141 kg/m"),
PG("LG059","Contravidrio recto de 17,2 mm","0,159 kg/m"),
PG("LG026","Contravidrio vertical curvo de 13,5 mm","0,146 kg/m"),
PG("CL006","Escuadra angular para fabricación de bastidores","1,134 kg/m"),
PG("CL009","Escuadra angular para fabricación de bastidores","1,605 kg/m"),
PG("LG091","Goterón superior para proyectante","0,143 kg/m","Proyectante"),
PG("LG125","Guía inferior de 2 rieles para puerta","0,980 kg/m","Corrediza"),
PG("LG159","Guía inferior de 2 rieles para ventana","1,123 kg/m","Corrediza"),
PG("LG143","Guía inferior de 3 rieles para puerta","1,380 kg/m","Corrediza"),
PG("LG116","Guía inferior de 3 rieles para ventana","1,447 kg/m","Corrediza"),
PG("LG161","Guía inferior de 4 rieles para puerta","1,847 kg/m","Corrediza"),
PG("LG044","Guía superior de 2 rieles para puerta y ventana","1,234 kg/m","Corrediza"),
PG("LG062","Guía superior de 3 rieles para puerta y ventana","1,777 kg/m","Corrediza"),
PG("LG070","Guía superior de 4 rieles para puerta y ventana","2,398 kg/m","Corrediza"),
PG("LG019","Hoja con enganche externo reforzado","0,975 kg/m","Corrediza"),
PG("LG162","Hoja de doble enganche para mosquitera","0,999 kg/m","Mosquitera"),
PG("LG139","Hoja de encuentro central con refuerzo exterior","1,609 kg/m","Corrediza"),
PG("LG020","Hoja de encuentro central con tirador","1,034 kg/m","Corrediza"),
PG("LG051","Hoja de encuentro central ventana","0,853 kg/m","Corrediza"),
PG("LG049","Hoja de enganche externo","0,886 kg/m","Corrediza"),
PG("LG140","Hoja de enganche externo con tubular","1,558 kg/m","Corrediza"),
PG("LG048","Hoja de enganche interno","0,907 kg/m","Corrediza"),
PG("LG137","Hoja de enganche interno con tubular","1,558 kg/m","Corrediza"),
PG("LG021","Hoja de enganche interno tubular media luna","1,662 kg/m","Corrediza"),
PG("LG007","Hoja horizontal de correr para puerta","1,147 kg/m","Corrediza"),
PG("LG006","Hoja horizontal de correr para ventana","0,594 kg/m","Corrediza"),
PG("LG058","Hoja horizontal superior batiente","0,747 kg/m","Batiente"),
PG("LG138","Hoja lateral y central con refuerzo exterior","1,519 kg/m","Corrediza"),
PG("LG017","Hoja lateral y central con tirador","1,007 kg/m","Corrediza"),
PG("LG043","Hoja lateral y central para batiente","0,918 kg/m","Batiente"),
PG("LG042","Hoja lateral y central reforzada para batiente","1,006 kg/m","Batiente"),
PG("LG050","Hoja lateral y central ventana","0,753 kg/m","Corrediza"),
PG("LG085","Hoja para proyectante a corte 45°","0,505 kg/m","Proyectante"),
PG("LG018","Hoja tubular de enganche mixto interno","1,522 kg/m","Corrediza"),
PG("LG082","Inversor de fijo a proyectante","0,332 kg/m","Proyectante / Fijo"),
PG("LG003","Marco horizontal liso para banderola de 2 rieles","0,757 kg/m","Corrediza"),
PG("LG124","Marco lateral de 2 rieles para puerta y ventana","0,764 kg/m","Corrediza"),
PG("LG158","Marco lateral liso para corrediza de 3 hojas combinable","0,876 kg/m","Corrediza"),
PG("LG072","Marco lateral liso para 4 rieles","1,291 kg/m","Corrediza"),
PG("LG145","Marco lateral para 3 rieles con 2 encastres","1,256 kg/m","Corrediza"),
PG("LG144","Marco lateral para 3 rieles con encastre central","1,018 kg/m","Corrediza"),
PG("LG170","Marco lateral para corrediza de 3 rieles con integrada","0,768 kg/m","Corrediza"),
PG("LG083","Marco para fijos a corte 45°","0,437 kg/m","Fijo"),
PG("LG068","Marco para proyectante a corte 45°","0,390 kg/m","Proyectante"),
PG("LG076","Marco para proyectante y fijo combinado","0,731 kg/m","Proyectante / Fijo"),
PG("LG056","Marco perimetral para batiente a corte 45°","0,506 kg/m","Batiente"),
PG("LG175","Marco reforzado para batiente a corte 45°","1,073 kg/m","Batiente"),
PG("CM099","Pata de agarre premarco CM200 (CHU840)","0,412 kg/m"),
PG("CL011","Perfil macho en cuña para escuadra de 50 mm","0,311 kg/m"),
PG("CL010","Perfil macho en cuña para escuadra de 64 mm","0,366 kg/m"),
PG("CM200","Premarco de 26 × 24 para proyectante y batiente","0,190 kg/m","Proyectante / Batiente"),
PG("LG016","Tapa junta central para hoja batiente","0,321 kg/m","Batiente"),
PG("LG055","Traversa central para batiente/corrediza","0,759 kg/m","Batiente / Corrediza"),
PG("LG022","Traversa central para puerta batiente/corrediza","1,061 kg/m","Batiente / Corrediza")
];

const AG=(codigo:string,nombre:string,tipologia="Comunes"):Item=>({codigo,nombre,color:"No especificado",categoria:"Herrajes y accesorios",imagen:`/gd/${codigo}.png`,tipologia});
export const gdAccessories:Item[]=[
AG("AP62251P","Conector interno a 90° para contramarco RM005","Batiente"),
AG("BRA766","Brazo Max-Ar GD de 342 mm","Proyectante"),
AG("BRA767","Brazo Max-Ar GD de 600 mm","Proyectante"),
AG("BRA768","Brazo Max-Ar GD de 951 mm","Proyectante"),
AG("CAL929","Tapa vedación en columna corrediza","Corrediza"),
AG("CON381","Vedación cortavientos superior para ventana y puerta","Corrediza"),
AG("CON383","Contracierre lateral para corredizas","Corrediza"),
AG("CON385","Contracierre central para corredizas","Corrediza"),
AG("CON386","Contracerradura espejo para batiente","Batiente"),
AG("CON448","Concha de uñera ciega para ventana de 158 mm","Corrediza"),
AG("CON449","Concha de uñera ciega para puerta de 204 mm","Corrediza"),
AG("CON454","Contracierre cremona de aluminio","Corrediza"),
AG("DOB828","Bisagra de 3 paletas para batiente","Batiente"),
AG("ESP955","Espejo para cilindro nylon","Corrediza"),
AG("FEC338","Tranca embutida para batiente","Batiente"),
AG("FEC495D","Cierre Max-Ar GD derecho","Proyectante"),
AG("FEC495I","Cierre Max-Ar GD izquierdo","Proyectante"),
AG("FEC509","Pasador para puerta batiente","Batiente"),
AG("FEC1036","Cierre de uñera automático con llave para ventana de 158 mm","Corrediza"),
AG("FEC1038","Cierre de uñera automático para ventana de 158 mm","Corrediza"),
AG("FEC1040","Cierre uñera manual con llave para puerta de 204 mm","Corrediza"),
AG("FEC1042","Cierre de uñera manual para puerta de 204 mm","Corrediza"),
AG("FEC1067","Manija para cierre multipunto","Corrediza"),
AG("FRA820","Cerradura puerta corrediza","Corrediza"),
AG("FRA822","Cerradura para batiente","Batiente"),
AG("HAS925","Conjunto haste/parafuso de 55 mm cremona sin llave","Corrediza"),
AG("KIT610","Kit multipunto de dos trabas con cremona","Corrediza"),
AG("MAC1004","Manija y espejo para cerradura de batiente","Batiente"),
AG("NYL042","Botón para tapa de agujeros de 10 mm","Batiente"),
AG("NYL190","Presilla de fijación en nylon para contramarco","Batiente"),
AG("NYL394","Calce para hoja fija","Corrediza"),
AG("NYL395","Cortavientos con dreno inferior","Corrediza"),
AG("NYL396","Enguiador deslizante central para puerta y ventana","Corrediza"),
AG("NYL398","Tope apertura para cierre con llave de puerta y ventana","Corrediza"),
AG("NYL400","Tapa para hoja reforzada LG021","Corrediza"),
AG("NYL401","Tapa para hoja reforzada LG018","Corrediza"),
AG("NYL462","Conector interno a 90° para contramarcos curvos","Batiente"),
AG("NYL479","Calce de cremona nylon","Corrediza"),
AG("NYL473","Tapa para hoja reforzada LG137 a LG140","Corrediza"),
AG("PUX006","Manijón de 200 mm para puerta corrediza","Corrediza"),
AG("ROL413","Rueda doble con regulación para hoja de 80 kg","Corrediza"),
AG("ROL468","Rueda simple con regulación para hoja de 40 kg","Corrediza"),
AG("ROL470","Rueda simple reforzada para hoja de 130 kg","Corrediza"),
AG("ROL471","Rueda doble reforzada para hoja de 260 kg","Corrediza"),
AG("SUP622","Traba fijador para hoja fija","Corrediza"),
AG("TRA011","Traba descentrada para cierre embutido","Corrediza")
];

const SG=(codigo:string,nombre:string):Item=>({codigo,nombre,color:"No especificado",categoria:"Felpudos y guarniciones",imagen:`/gd/${codigo}.png`,tipologia:"Vedación"});
export const gdSeals:Item[]=[
SG("FEL5X8","Felpudo de 5 × 8 mm"),SG("FEL5X6","Felpudo de 5 × 6 mm"),SG("FEL7X6","Felpudo de 7 × 6 mm"),
SG("GUA007","Guarnición exterior para goterón proyectante"),SG("GUA157","Guarnición adhesiva de 11 × 6,2 mm"),SG("GUA171","Guarnición adhesiva de 11 × 3 mm"),SG("GUA172","Guarnición adhesiva de 11 × 1,8 mm"),SG("GUA239","Guarnición interior/exterior para proyectante y batiente"),SG("GUA256","Guarnición de EPDM de 12 × 6,3 mm"),SG("GUA258","Guarnición adhesiva de 11 × 4 mm"),SG("GUA259","Guarnición de EPDM de 12 × 4,3 mm"),SG("GUA303","Guarnición de EPDM de 14 × 2,4 mm")
];

export const gdData=[...gdProfiles,...gdAccessories,...gdSeals];

const PB=(codigo:string,nombre:string,peso:string,tipologia:string):Item=>({codigo,nombre,color:"No especificado",categoria:"Perfiles",peso,imagen:`/box/${codigo}.png`,tipologia});
export const boxProfiles:Item[]=[
PB("SBAF460","Guía inferior Sorobox","0,201 kg/m","Sorobox"),
PB("BX086","Guía inferior para box de baño","0,312 kg/m","Box baño"),
PB("SBAF86","Guía superior Sorobox","0,454 kg/m","Sorobox"),
PB("BX084","Guía superior para box de baño","0,804 kg/m","Box baño"),
PB("SBAF85","Perfil lateral para Sorobox","0,172 kg/m","Sorobox"),
PB("SBAF87","Perfil montante para Sorobox","0,152 kg/m","Sorobox"),
PB("SBAF90","Perfil traversa para Sorobox","0,197 kg/m","Sorobox"),
PB("BX100","Perfil U para 8 mm","0,165 kg/m","Box baño"),
PB("BX246","Perfil lateral para 8 mm","0,153 kg/m","Box baño"),
PB("BX500","Tapa guía superior para box de baño","0,257 kg/m","Box baño"),
PB("CL023","Tapita superior/inferior para guía de 8 mm","0,053 kg/m","Box baño"),
PB("CK333","Tubo redondo","0,120 kg/m","Sorobox")
];

const AB=(codigo:string,nombre:string,tipologia:string,color="No especificado"):Item=>({codigo,nombre,color,categoria:"Herrajes y accesorios",imagen:`/box/${codigo}.png`,tipologia});
export const boxAccessories:Item[]=[
AB("KITESQBLA","Kit de box esquinero","Box baño","Blanco"),
AB("KITFRONTAL","Kit para box de baño frontal","Box baño"),
AB("BXSOPTOA","Soporte toallero","Sorobox"),
AB("SBFIJADOR","Fijador Sorobox","Sorobox"),
AB("SBGUIA","Guía deslizante Sorobox","Sorobox"),
AB("SBROLDANA","Roldana Sorobox","Sorobox"),
AB("TIRABOX","Tirador simple","Sorobox"),
AB("SBVEDABOX","Vedabox para línea Sorobox","Sorobox")
];

export const boxSeals:Item[]=[{codigo:"FEL5X6BLA",nombre:"Felpa de 5 × 6 mm para cortavientos con vedación",color:"Blanco",categoria:"Felpudos y guarniciones",imagen:"/box/FEL5X6BLA.png",tipologia:"Vedación"}];
export const boxData=[...boxProfiles,...boxAccessories,...boxSeals];

const AL=(codigo:string,nombre:string,categoria:string,color="No especificado",tipologia="Puerta batiente / pivotante"):Item=>({codigo,nombre,color,categoria,imagen:`/aldaba-light/${codigo}.png?v=1`,tipologia});
export const aldabaData:Item[]=[
AL("ME185","Marco batiente para prolongar Aldaba Light","Perfiles","Negro pintado / efecto madera"),
AL("AK141","Marco externo para puerta interna de 130 a 155 mm","Perfiles","Negro pintado / efecto madera"),
AL("ME081","Hoja batiente Aldaba Light","Perfiles","Negro pintado / efecto madera"),
AL("CK506","Revestimiento tubular liso machimbrado","Perfiles","Negro pintado / efecto madera"),
AL("6-22051-P","Escuadra de alineación","Herrajes y accesorios"),
AL("CL006","Conexión hembra","Herrajes y accesorios"),
AL("CL011","Conexión macho","Herrajes y accesorios"),
AL("FRA822","Cerradura con cilindro","Herrajes y accesorios"),
AL("DOB751","Bisagra de 2 palas","Herrajes y accesorios")
];

const GF=(codigo:string,nombre:string,peso:string):Item=>({codigo,nombre,color:"No especificado",categoria:"Perfiles",peso,imagen:`/gd-flaute/${codigo}.png?v=1`,tipologia:"Corrediza"});
export const gdFlauteData:Item[]=[
GF("LG245F","Marco inferior ventana de 2 rieles con caja de dreno","1,343 kg/m"),
GF("LG274F","Marco inferior puerta de 2 rieles con caja de dreno","1,253 kg/m"),
GF("LG157","Guía única multirriel inferior y superior","0,303 kg/m"),
GF("LG111","Complemento de riel inferior","0,100 kg/m"),
GF("CK373","Complemento de riel","0,153 kg/m"),
GF("CK374","Acople para multirrieles","0,201 kg/m"),
GF("LG044","Guía superior de 2 rieles","1,234 kg/m"),
GF("LG124","Marco lateral de 2 rieles","0,764 kg/m"),
GF("LG006","Hoja horizontal inferior y superior para ventana","0,594 kg/m"),
GF("LG007","Hoja horizontal inferior y superior para puerta","1,147 kg/m"),
GF("LG050","Hoja lateral y central","0,753 kg/m"),
GF("LG028","Complemento de encastre lateral","0,427 kg/m"),
GF("LG251F","Hoja mano amiga externa","1,382 kg/m"),
GF("LG250F","Hoja mano amiga interna","1,444 kg/m"),
GF("LG139","Hoja central de encastre con refuerzo","1,609 kg/m"),
GF("LG138","Hoja central con refuerzo","1,519 kg/m"),
GF("BG057","Contravidrio horizontal para vidrio de 5 a 10 mm","0,158 kg/m"),
GF("LG026","Contravidrio vertical para vidrio de 5 a 10 mm","0,146 kg/m"),
GF("LG059","Contravidrio perimetral para vidrio de 4 a 6 mm","0,159 kg/m"),
GF("LG015","Contravidrio perimetral para DVH","0,141 kg/m")
];

const ACM=(codigo:string,nombre:string,color:string):Item=>({codigo,nombre,color,categoria:"Paneles ACM",imagen:`/alumetal/${codigo}.png?v=1`,tipologia:"Placa ACM con revestimiento PVDF"});
export const alumetalData:Item[]=[
ACM("PA3MMAZ","Panel de aluminio 3 mm - 1.220 x 5.000 mm","Azul"),
ACM("PA4MMAZ","Panel de aluminio 4 mm - 1.220 x 5.000 mm","Azul"),
ACM("PA3MMBLANCO","Panel de aluminio 3 mm - 1.220 x 5.000 mm","Blanco"),
ACM("PA4MMBLANCO","Panel de aluminio 4 mm - 1.220 x 5.000 mm","Blanco"),
ACM("PA3MMROJO","Panel de aluminio 3 mm - 1.220 x 5.000 mm","Rojo"),
ACM("PA4MMROJO","Panel de aluminio 4 mm - 1.220 x 5.000 mm","Rojo"),
ACM("PA3MMCAFE","Panel de aluminio 3 mm - 1.220 x 5.000 mm","Marron cafe"),
ACM("PA4MMCAFE","Panel de aluminio 4 mm - 1.220 x 5.000 mm","Marron cafe"),
ACM("PA3MMGRAFITO","Panel de aluminio 3 mm - 1.220 x 5.000 mm","Grey metallic (grafito)"),
ACM("PA4MMGRAFITO","Panel de aluminio 4 mm - 1.220 x 5.000 mm","Grey metallic (grafito)"),
ACM("PA3MMSILVE","Panel de aluminio 3 mm - 1.220 x 5.000 mm","Silver metallic"),
ACM("PA4MMSILVE","Panel de aluminio 4 mm - 1.220 x 5.000 mm","Silver metallic"),
ACM("PA3MMNEGRO","Panel de aluminio 3 mm - 1.220 x 5.000 mm","Negro"),
ACM("PA4MMNEGRO","Panel de aluminio 4 mm - 1.220 x 5.000 mm","Negro"),
ACM("PA4MMAM","Panel de aluminio 4 mm - 1.220 x 5.000 mm","Amarillo"),
ACM("PA4MMNAR","Panel de aluminio 4 mm - 1.220 x 5.000 mm","Naranja"),
ACM("PA4MMDOR","Panel de aluminio 4 mm - 1.220 x 5.000 mm","Dorado")
];

const M3=(codigo:string,nombre:string,color:string,categoria:string,tipologia:string):Item=>({codigo,nombre,color,categoria,imagen:`/3m/${codigo}.png?v=1`,tipologia});
export const threeMData:Item[]=[
M3("3M4670228","Cinta doble faz VHB 4950 - 15 mm x 33 m","Blanco","Construcción 3M","Cintas y montaje"),
M3("3M499159","Cinta doble faz VHB 4991 - 12 mm x 33 m","Gris","Construcción 3M","Cintas y montaje"),
M3("3M467017","Cinta doble faz VHB 4972 - 15 mm x 33 m","Gris","Construcción 3M","Cintas y montaje"),
M3("3M467083","Cinta doble faz VHB 4972 - 19 mm x 33 m","Gris","Construcción 3M","Cintas y montaje"),
M3("3M0466985","Cinta doble faz VHB 4910 - 12 mm x 33 m","Transparente","Construcción 3M","Cintas y montaje"),
M3("3M49101933","Cinta doble faz VHB 4910 - 19 mm x 33 m","Transparente","Construcción 3M","Cintas y montaje"),
M3("3M226020","Cinta doble faz GPT-020F - 12 mm x 50 m","Transparente","Construcción 3M","Cintas y montaje"),
M3("3M225996","Cinta doble faz GPT-020F - 19 mm x 50 m","Transparente","Construcción 3M","Cintas y montaje"),
M3("3M273398","Cinta doble faz VHB RP+110 - 12 mm x 33 m","Gris","Construcción 3M","Cintas y montaje"),
M3("3M281406","Cinta doble faz VHB RP+110 - 19 mm x 33 m","Gris","Construcción 3M","Cintas y montaje"),
M3("3M021302","Cinta de sellado extremo 4412N - 50 mm x 16 m","Blanco","Construcción 3M","Cintas y montaje"),
M3("3M7000049774","Cinta de sellado All Weather Flashing Tape 8067 - 76 mm x 23 m","Tostado","Construcción 3M","Cintas y montaje"),
M3("3M039259","Adhesivo instantáneo Scotch-Weld PR100 - 500 g","Transparente","Construcción 3M","Adhesivos y selladores"),
M3("3M000932","Sellador de poliuretano 550 FC - 310 ml","Blanco","Construcción 3M","Adhesivos y selladores"),
M3("3M198000","Sellador de poliuretano 550 FC - 600 ml","Blanco","Construcción 3M","Adhesivos y selladores"),
M3("3M003278","Imprimador de cinta Primer 94 - 236,5 ml","Incoloro","Construcción 3M","Adhesivos y selladores"),
M3("3M028595","Limpiador industrial base cítrica - 525 g","Aroma cítrico","Construcción 3M","Limpieza industrial"),
M3("3M316486","Adhesivo para juntas de motores diésel - 73 g","Ámbar","Construcción 3M","Adhesivos y selladores"),
M3("3M000728","Almohadilla Scotch-Brite 7447 - 15 mm x 23 cm","No especificado","Construcción 3M","Abrasivos"),
M3("3M138192","Disco de cerdas Scotch-Brite Roloc RD-ZB 120 TR - 76 mm","Blanco","Construcción 3M","Abrasivos"),
M3("3M000750","Disco acondicionador Scotch-Brite Roloc VFN - 50,8 mm","No especificado","Construcción 3M","Abrasivos"),
M3("3M000751","Disco acondicionador Scotch-Brite Roloc - 50,8 mm","No especificado","Construcción 3M","Abrasivos"),
M3("3M033192","Disco de fibra Cubitron II Roloc 786C, grano 80+ - 75 mm","No especificado","Construcción 3M","Abrasivos"),
M3("3M110951","Pistola manual de lijado de disco PN33577","No especificado","Construcción 3M","Herramientas"),
M3("3M028631","Aplicador de calafateo manual 600M","No especificado","Construcción 3M","Herramientas"),
M3("3M228331","Cinta de aluminio para altas temperaturas 433 - 50,8 mm x 54,8 m","Plateado","Construcción 3M","Cintas y montaje"),
M3("3M001941","Paño absorbente para petróleo HP-156 - 430 x 480 mm","No especificado","Construcción 3M","Protección de superficies"),
M3("3M051991","Filtro para partículas 2091","Fucsia","Seguridad industrial","Protección respiratoria"),
M3("3M000193","Respirador reutilizable de media máscara Serie 6000","Gris","Seguridad industrial","Protección respiratoria"),
M3("3M002008","Filtro para partículas 5N11 N95","No especificado","Seguridad industrial","Protección respiratoria"),
M3("3M211073","Retenedor de filtro 501","Blanco translúcido","Seguridad industrial","Protección respiratoria"),
M3("3M132742","Respirador para partículas 8210V N95 con válvula","Blanco translúcido","Seguridad industrial","Protección respiratoria"),
M3("3M109223","Lentes de protección Virtua","Transparente","Seguridad industrial","Protección ocular"),
M3("3M114636","Lentes de protección Virtua","Gris","Seguridad industrial","Protección ocular"),
M3("3M112436","Lentes de seguridad SecureFit Serie 40","Transparente","Seguridad industrial","Protección ocular"),
M3("3M240000","Casco de seguridad SecureFit","Gris","Seguridad industrial","Protección craneal"),
M3("3M240004","Casco de seguridad SecureFit","Rojo","Seguridad industrial","Protección craneal"),
M3("3M239985","Casco de seguridad SecureFit","Amarillo","Seguridad industrial","Protección craneal"),
M3("3M239982","Casco de seguridad SecureFit","Blanco","Seguridad industrial","Protección craneal"),
M3("3M051849","Cartucho para vapor orgánico y gas ácido 6003/07047","Blanco translúcido","Seguridad industrial","Protección respiratoria"),
M3("3M002326","Orejeras para casco Peltor Optime 98","Amarillo con negro","Seguridad industrial","Protección auditiva"),
M3("3M034912","Guantes de uso general Comfort Grip CGM-GU - mediano","Gris","Seguridad industrial","Protección de manos"),
M3("3M034763","Traje de protección 4520 - XL","Blanco con verde","Seguridad industrial","Protección corporal"),
M3("3M034764","Traje de protección 4520 - XXL","Blanco con verde","Seguridad industrial","Protección corporal"),
M3("3M100644","Tapón auditivo reutilizable 1270","Amarillo con cordón azul","Seguridad industrial","Protección auditiva"),
M3("3M028955","Cinta de seguridad 766 - 50 mm x 33 m","Negro y amarillo","Seguridad industrial","Señalización"),
M3("3M133325","Cinta antideslizante Safety-Walk 613 - 50 mm x 18 m","Amarillo con negro","Seguridad industrial","Señalización"),
M3("3M344036","Cinta reflectiva Diamond Grade Serie 983 - 5,08 mm x 45,7 m","Rojo y blanco","Seguridad industrial","Señalización"),
M3("3M001996","Cinta antideslizante Safety-Walk grano fino 220 - 50 mm x 15 m","Blanco","Seguridad industrial","Señalización")
];

export const climaGuardData:Item[]=[{
codigo:"NO PUBLICADO",
nombre:"ClimaGuard SunLight - vidrio de control solar",
color:"Neutral Clear",
categoria:"Vidrios de control solar",
imagen:"/climaguard/climaguard-sunlight.png?v=1",
tipologia:"Vidrio de capa duradera · sustrato Clear de 4 a 12 mm"
}];

const PS=(codigo:string,nombre:string,peso:string,tipologia:string):Item=>({codigo,nombre,color:"No especificado",categoria:"Perfiles",peso,imagen:`/supra/${codigo}.png`,tipologia});
export const supraProfiles:Item[]=[
PS("SU086","Columna divisoria atornillada para proyectante","0,567 kg/m","Proyectante"),
PS("SU009","Columna divisoria de refuerzo central","0,915 kg/m","Corrediza"),
PS("SU291","Complemento encastre central y lateral","0,257 kg/m","Corrediza"),
PS("SU008","Complemento encastre lateral para marco","0,232 kg/m","Corrediza"),
PS("SU292","Complemento inversor contravidrio para fijo","0,224 kg/m","Fijo"),
PS("SU108","Complemento para veneziana","0,141 kg/m","Veneziana"),
PS("SU084","Complemento solape inferior proyectante","0,135 kg/m","Proyectante"),
PS("RM005","Contramarco recto","0,221 kg/m","Batiente"),
PS("SU102","Contravidrio de altura 12 mm","0,122 kg/m","Fijo"),
PS("SU103","Contravidrio de altura 15 mm","0,152 kg/m","Fijo"),
PS("CL006","Escuadra angular de fabricación de bastidores","1,134 kg/m","Bastidores"),
PS("SU083","Goterón superior para proyectante","0,141 kg/m","Proyectante"),
PS("SU006","Guía inferior de 2 rieles combinable con fijo","1,080 kg/m","Corrediza"),
PS("SU228","Guía inferior de 2 rieles con ala alta para puerta","0,694 kg/m","Corrediza"),
PS("SU260","Guía inferior de 2 rieles para puerta","0,641 kg/m","Corrediza"),
PS("SU002","Guía inferior de 2 rieles para ventana","0,745 kg/m","Corrediza"),
PS("SU230","Guía inferior de 3 rieles con ala alta para puerta","0,963 kg/m","Corrediza"),
PS("SU011","Guía inferior de 3 rieles para ventana","1,002 kg/m","Corrediza"),
PS("SU122","Guía inferior de 4 rieles para puerta y ventana","1,415 kg/m","Corrediza"),
PS("SU005","Guía superior de 2 rieles combinable con fijo","1,095 kg/m","Corrediza"),
PS("SU001","Guía superior de 2 rieles para puerta y ventana","0,786 kg/m","Corrediza"),
PS("SU010","Guía superior de 3 rieles para puerta y ventana","1,091 kg/m","Corrediza"),
PS("SU121","Guía superior de 4 rieles para puerta y ventana","1,543 kg/m","Corrediza"),
PS("SU042","Hoja de doble enganche para mosquitera","0,553 kg/m","Corrediza"),
PS("SU043","Hoja de encuentro central con tubular","0,935 kg/m","Corrediza"),
PS("SU192","Hoja de encuentro central ventana","0,518 kg/m","Corrediza"),
PS("SU041","Hoja de enganche externo","0,500 kg/m","Corrediza"),
PS("SU049","Hoja de enganche externo con tubular","1,061 kg/m","Corrediza"),
PS("SU040","Hoja de enganche interno","0,473 kg/m","Corrediza"),
PS("SU047","Hoja de enganche interno con tubular","1,026 kg/m","Corrediza"),
PS("SU113","Hoja encuentro central para batiente","0,728 kg/m","Batiente"),
PS("SU225","Hoja horizontal de correr para puerta","1,002 kg/m","Corrediza"),
PS("SU053","Hoja horizontal de correr para ventana","0,456 kg/m","Corrediza"),
PS("SU110","Hoja horizontal para batiente","0,545 kg/m","Batiente"),
PS("SU200","Hoja lateral e inferior proyectante a corte 45°","0,410 kg/m","Proyectante"),
PS("SU081","Hoja lateral para proyectante a corte recto","0,386 kg/m","Proyectante"),
PS("SU250","Hoja lateral y central con tirador","0,711 kg/m","Corrediza"),
PS("SU280","Hoja lateral y central con tirador para cerradura","0,965 kg/m","Corrediza"),
PS("SU044","Hoja lateral y central con tubular","0,924 kg/m","Corrediza"),
PS("SU111","Hoja lateral y central para batiente","0,635 kg/m","Batiente"),
PS("SU039","Hoja lateral y central ventana","0,483 kg/m","Corrediza"),
PS("SU082","Hoja superior e inferior para proyectante a corte recto","0,364 kg/m","Proyectante"),
PS("SU080","Hoja superior para proyectante a corte 45°","0,351 kg/m","Proyectante"),
PS("SU004","Marco horizontal liso para banderola de 2 rieles","0,539 kg/m","Corrediza"),
PS("SU018","Marco horizontal liso para banderola de 3 rieles","0,673 kg/m","Corrediza"),
PS("SU003","Marco lateral de 2 rieles para puerta y ventana","0,491 kg/m","Corrediza"),
PS("SU007","Marco lateral liso combinable para 2 rieles","0,413 kg/m","Corrediza"),
PS("SU012","Marco lateral liso para corrediza de 3 hojas combinable","0,546 kg/m","Corrediza"),
PS("SU123","Marco lateral liso para 4 rieles","0,879 kg/m","Corrediza"),
PS("SU013","Marco lateral para 3 rieles con 2 encastres","0,702 kg/m","Corrediza"),
PS("SU014","Marco lateral para 3 rieles con encastre central","0,640 kg/m","Corrediza"),
PS("SU079","Marco para proyectante a corte 45°","0,273 kg/m","Proyectante"),
PS("SU279","Marco perimetral corte 45° para batiente","0,545 kg/m","Batiente"),
PS("CL011","Perfil macho en cuña para fabricación de bastidores","0,311 kg/m","Bastidores"),
PS("SU107","Tapa vedación en columnas corrediza","0,265 kg/m","Corrediza"),
PS("SU227","Traversa central para batiente/corrediza","0,544 kg/m","Batiente / Corrediza"),
PS("SU050","Traversa central para puerta batiente/corrediza","0,889 kg/m","Batiente / Corrediza"),
PS("SU085","Traversa divisoria múltiple con unión","0,491 kg/m","Comunes")
];

const AS=(codigo:string,nombre:string,tipologia:string,color="No especificado"):Item=>({codigo,nombre,color,categoria:"Herrajes y accesorios",imagen:`/supra/${codigo}.png`,tipologia});
export const supraAccessories:Item[]=[
AS("BRA702","Brazo Max-Ar Supra de 500 mm","Proyectante"),AS("BRA703","Brazo Max-Ar Supra de 750 mm","Proyectante"),AS("BRA705","Brazo Max-Ar Supra de 250 mm","Proyectante"),
AS("CON295","Contracerradura espejo para batiente","Batiente"),AS("CON370","Contratraba lateral enguiada para ventana","Corrediza"),AS("CON376","Unión tope travesaño/divisoria para SU085","Comunes"),AS("CON409","Contratraba lateral/central enguiada para puerta","Corrediza"),AS("CON448","Concha uñera ciega para ventana de 158 mm","Corrediza"),AS("CON449","Concha uñera ciega para puerta de 204 mm","Corrediza"),
AS("DOB840","Bisagra de 3 paletas para batiente","Batiente"),AS("FEC009D","Cierre Max-Ar derecho","Proyectante"),AS("FEC009I","Cierre Max-Ar izquierdo","Proyectante"),AS("FEC055","Contratraba central enguiada","Corrediza"),AS("FEC056","Gancho cierre de seguridad hoja izquierda interna","Corrediza"),AS("FEC058","Gancho cierre de seguridad hoja derecha interna","Corrediza"),AS("FEC338","Tranca embutida para batiente","Batiente"),AS("FEC1036","Cierre automático de 158 mm de aluminio con llave para ventana","Corrediza"),AS("FEC1038","Cierre automático de 158 mm de aluminio para ventana","Corrediza"),AS("FEC1040","Cierre manual de 204 mm de aluminio con llave para puerta","Corrediza"),AS("FEC1042","Cierre manual de 204 mm de aluminio para puerta","Corrediza"),
AS("FRA820","Cerradura para puerta corrediza","Corrediza","Negro / Blanco"),AS("FRA822","Cerradura para batiente","Batiente"),AS("MAC927","Manija y espejo para cerradura de batiente","Batiente"),AS("NYL042","Botón para tapa de agujeros de 10 mm","Comunes"),AS("NYL101","Tope apertura para cierre con llave para puerta","Corrediza"),AS("NYL190","Presilla de fijación en nylon para contramarcos","Comunes"),AS("NYL329","Cortavientos con dreno para ventana","Corrediza"),AS("NYL332","Enguiador deslizante central","Corrediza"),AS("NYL335","Cortavientos superior para ventana y puerta","Corrediza"),AS("NYL355","Tapa superior/inferior para SU081/200","Proyectante"),AS("NYL356","Tapa para hoja reforzada SU043/SUP044","Corrediza"),AS("NYL357","Tapa para hoja reforzada SU047/SU049","Corrediza"),AS("PUX006","Manijón para puerta corrediza de 200 mm","Corrediza"),AS("ROL439","Rueda doble con regulación y rulemán para puerta","Corrediza"),AS("ROL440","Rueda simple con regulación y rulemán para ventana","Corrediza"),AS("TRA005","Traba recta inox para cierre embutido","Batiente")
];

const SS=(codigo:string,nombre:string):Item=>({codigo,nombre,color:"No especificado",categoria:"Felpudos y guarniciones",imagen:`/supra/${codigo}.png`,tipologia:"Vedación"});
export const supraSeals:Item[]=[
SS("FEL5X8","Felpudo de 5 × 8 mm"),SS("FEL5X6","Felpudo de 5 × 6 mm"),SS("FEL7X6","Felpudo de 7 × 6 mm"),SS("GUA007","Guarnición exterior para goterón proyectante"),SS("GUA053","Guarnición exterior para hoja proyectante"),SS("GUA157","Guarnición adhesiva de 11 × 6,2 mm"),SS("GUA171","Guarnición adhesiva de 11 × 3 mm"),SS("GUA172","Guarnición adhesiva de 11 × 1,8 mm"),SS("GUA239","Guarnición interior/exterior para proyectante y batiente"),SS("GUA256","Guarnición EPDM de 12 × 6,3 mm"),SS("GUA258","Guarnición adhesiva de 11 × 4 mm"),SS("GUA259","Guarnición EPDM de 12 × 4,3 mm")
];
export const supraData=[...supraProfiles,...supraAccessories,...supraSeals];

const PP=(codigo:string,nombre:string,peso:string,tipologia:string):Item=>({codigo,nombre,color:"No especificado",categoria:"Perfiles",peso,imagen:`/prestigio/${codigo}.png`,tipologia});
export const prestigioProfiles:Item[]=[
PP("A6037","Guía horizontal inferior y superior de 2 rieles","1,774 kg/m","Corrediza"),
PP("A6036","Parante lateral marco de 2 rieles","0,891 kg/m","Corrediza"),
PP("A6034","Hoja lateral para vidrio simple","1,400 kg/m","Corrediza"),
PP("A6061","Hoja horizontal de ventana para vidrio simple","0,940 kg/m","Corrediza"),
PP("A5965","Complemento encastre central para 4 hojas","0,305 kg/m","Corrediza"),
PP("A6035","Hoja encuentro central vidrio simple","1,534 kg/m","Corrediza"),
PP("A6083","Hoja encuentro central exterior vidrio simple","1,528 kg/m","Corrediza"),
PP("A6062","Zócalo de puerta corrediza para vidrio simple","1,484 kg/m","Corrediza"),
PP("A6081","Guía horizontal superior e inferior de 3 rieles","2,966 kg/m","Corrediza"),
PP("A6080","Parante lateral para 3 rieles","1,426 kg/m","Corrediza"),
PP("A6071","Hoja lateral corrediza para DVH","1,336 kg/m","Corrediza DVH"),
PP("A6073","Hoja horizontal de ventana para DVH","0,876 kg/m","Corrediza DVH"),
PP("A6072","Hoja central con enganche interno para DVH","1,480 kg/m","Corrediza DVH"),
PP("A6082","Hoja central con enganche externo para DVH","1,477 kg/m","Corrediza DVH"),
PP("A6074","Zócalo de puerta corrediza para DVH","1,412 kg/m","Corrediza DVH"),
PP("A6059","Marco recto perimetral para ventana","1,053 kg/m","Batiente"),
PP("A6055","Marco curvo perimetral","1,037 kg/m","Batiente"),
PP("A6040","Marco perimetral batiente coplanar","1,188 kg/m","Batiente"),
PP("A6057","Marco perimetral para proyectante","0,833 kg/m","Proyectante"),
PP("A6054","Hoja perimetral recta para ventana","1,182 kg/m","Batiente"),
PP("A6041","Hoja para puerta batiente","1,385 kg/m","Batiente"),
PP("A6044","Batiente central para 2 hojas","1,038 kg/m","Batiente"),
PP("A6058","Hoja de apertura exterior para proyectante","1,350 kg/m","Proyectante"),
PP("A6042","Traversa para puerta batiente","1,390 kg/m","Batiente"),
PP("A6043","Zócalo para puerta batiente","2,311 kg/m","Batiente"),
PP("A6060","Travesaño / divisoria","1,102 kg/m","Batiente / Proyectante"),
PP("A6047","Contravidrio curvo de 37 mm","0,252 kg/m","Contravidrio"),
PP("A6048","Contravidrio curvo de 19 mm","0,193 kg/m","Contravidrio"),
PP("A6050","Contravidrio curvo de 12 mm","0,193 kg/m","Contravidrio"),
PP("A6045","Contravidrio recto de 37 mm","0,330 kg/m","Contravidrio"),
PP("A6046","Contravidrio recto de 19 mm","0,248 kg/m","Contravidrio"),
PP("A6049","Contravidrio recto de 12 mm","0,233 kg/m","Contravidrio"),
PP("A6038","Mosquitero reforzado","0,622 kg/m","Mosquitero"),
PP("A6039","Tope mosquitero","0,331 kg/m","Mosquitero"),
PP("A6206","Contramarco Prestigio","0,185 kg/m","Complementarios"),
PP("A6066","Premarco perimetral","0,545 kg/m","Complementarios"),
PP("A6067","Perfil de acople","0,329 kg/m","Complementarios")
];
export const prestigioData=[...prestigioProfiles];

const PT=(codigo:string,nombre:string,peso:string):Item=>({codigo,nombre,color:"No especificado",categoria:"Perfiles",peso,imagen:`/templado/${codigo}.png`,tipologia:"Templado"});
export const templadoProfiles:Item[]=[
PT("CK330","Angular cortavientos con felpudo","0,142 kg/m"),
PT("CK339","Encuentro central de cruce para templado de 10 mm","0,276 kg/m"),
PT("CK338","Encuentro central de cruce para templado de 8 mm","0,224 kg/m"),
PT("CK547","Guía adicional de 15 mm para mosquitero","0,131 kg/m"),
PT("CK546","Guía adicional de 9 mm para mosquitero","0,110 kg/m"),
PT("CK331","Guía doble para 10 mm","0,444 kg/m"),
PT("CK321","Guía inferior chica para 8 mm","0,308 kg/m"),
PT("CK315","Guía inferior doble de 10 mm","0,699 kg/m"),
PT("CK336","Guía inferior leve con ala alta para 8 mm","0,346 kg/m"),
PT("CK320","Guía inferior leve para 10 mm","0,376 kg/m"),
PT("LGG1","Guía inferior leve para 8 mm","0,286 kg/m"),
PT("BX206","Guía inferior para 10 mm","0,505 kg/m"),
PT("BX066","Guía inferior para 8 mm","0,397 kg/m"),
PT("VC4273","Guía Roma de 48 × 48 mm","1,447 kg/m"),
PT("CK316","Guía superior doble","1,839 kg/m"),
PT("LCK318","Guía superior extra leve de 10 mm","0,540 kg/m"),
PT("LBX257","Guía superior leve para 10 mm","0,858 kg/m"),
PT("CK318","Guía superior leve para 10 mm","0,686 kg/m"),
PT("LGGS","Guía superior leve para 8 mm","0,547 kg/m"),
PT("BX257","Guía superior para 10 mm","0,967 kg/m"),
PT("BX229","Guía superior para 8 mm","0,910 kg/m"),
PT("BX069","Guía única para 10 mm","0,324 kg/m"),
PT("BX241","Lateral grande para 10 mm Carro Roma","0,221 kg/m"),
PT("CK324","Perfil de enganche externo para 10 mm","0,348 kg/m"),
PT("CK322","Perfil de enganche externo para 8 mm","0,305 kg/m"),
PT("CK323","Perfil de enganche interno con felpa para 8 mm","0,332 kg/m"),
PT("CK325","Perfil de enganche interno con felpa para 10 mm","0,391 kg/m"),
PT("LBX209","Perfil encuentro para 10 mm leve","0,228 kg/m"),
PT("BX209","Perfil encuentro para 10 mm","0,275 kg/m"),
PT("BX232","Perfil encuentro para 8 mm","0,152 kg/m"),
PT("BX226","Perfil encuentro para 8 mm","0,308 kg/m"),
PT("LBX226","Perfil encuentro para 8 mm leve","0,221 kg/m"),
PT("BX261","Perfil lateral para 10 mm","0,159 kg/m"),
PT("BX246","Perfil lateral para 8 mm","0,153 kg/m"),
PT("LUC20","Perfil U de terminación perimetral","0,128 kg/m"),
PT("CK328","Perfil U de 18 × 25,4 × 1,2 mm","0,210 kg/m"),
PT("CK329","Perfil U de 25 × 25,4 × 1,2 mm","0,231 kg/m"),
PT("BX158","Recuadro de hoja","0,211 kg/m"),
PT("CK317","Tapa guía superior doble","0,548 kg/m"),
PT("CK319","Tapa guía superior leve para 10 mm","0,265 kg/m"),
PT("LGT6","Tapa guía superior leve para 8 mm","0,265 kg/m"),
PT("BX258","Tapa guía superior para 10 mm","0,302 kg/m"),
PT("BX184","Tapa guía superior para 8 mm","0,243 kg/m"),
PT("BX068","Tapita para guía inferior de 8 mm","0,086 kg/m"),
PT("BX225","Tapita para guía inferior de box de baño","0,100 kg/m"),
PT("CL022","Tapita para guías de 10 mm","0,105 kg/m"),
PT("CL023","Tapita superior/inferior para guía de 8 mm","0,053 kg/m"),
PT("BX101","Traversa superior e inferior","0,338 kg/m"),
PT("BX159","Traversa para box","0,268 kg/m"),
PT("CK500","Zócalo para soporte de freno empotrado","1,858 kg/m")
];

const AT=(codigo:string,nombre:string,color:string):Item=>({codigo,nombre,color,categoria:"Herrajes y accesorios",imagen:`/templado/${codigo}.png`,tipologia:"Templado"});
export const templadoAccessories:Item[]=[
AT("1629J","Tirador simple","Cromado"),AT("2629J","Tirador simple","Ceniza"),AT("5629J","Tirador simple","Bronce"),
AT("1629P","Tirador doble","Cromado"),AT("5629P","Tirador doble","Bronce"),AT("M5629P","Tirador doble","Marrón"),
AT("1038C","Castaña","Cromado"),AT("5038C","Castaña","Bronce"),
AT("1710CR","Mano amiga grande","Cromado"),AT("1710DR","Mano amiga grande","Dorado"),AT("1710BR","Mano amiga grande","Bronce"),
AT("GL40632","Manijón de 450 mm","Cromado"),AT("HDL639","Manijón rectangular de 305 mm","Cromado"),
AT("1335","Pasador chico","Cromado"),AT("M5335","Pasador chico","Marrón"),AT("5335","Pasador chico","Bronce"),
AT("1335M","Mini pasador","Cromado"),AT("5335M","Mini pasador","Marrón"),
AT("1504AM","Contracerradura vidrio/pared de abrir con aba","Cromado"),AT("5504A","Contracerradura vidrio/pared de abrir con aba","Bronce"),AT("M5504AMP","Contracerradura vidrio/pared de abrir con aba","Marrón"),
AT("1511M","Contracerradura para corrediza corte 3000","Cromado"),AT("5511M","Contracerradura para corrediza corte 3000","Bronce"),AT("5511MBL","Contracerradura para corrediza corte 3000","Blanco"),
AT("1510M","Cerradura para corrediza corte 3000","Cromado"),AT("5510M","Cerradura para corrediza corte 3000","Bronce"),AT("M5510M","Cerradura para corrediza corte 3000","Marrón"),
AT("1510MJ","Cerradura de un solo cilindro","Cromado"),AT("5510MJ","Cerradura de un solo cilindro","Bronce"),AT("M5510MJ","Cerradura de un solo cilindro","Marrón"),
AT("RUEDAROMA","Ruedita doble Roma","Cromado"),AT("RUEDAROMADO","Ruedita doble Roma","Dorado"),AT("RUEROMABR","Ruedita doble Roma","Bronce"),
AT("RUDROCRCHAX","Rueda doble Carro Roma chico","Cromado"),AT("RUDROBRCHAX","Rueda doble Carro Roma chico","Dorado"),
AT("5125","Ruedita simple","No especificado"),AT("5125EXC","Ruedita simple regulable","No especificado"),AT("5125A","Ruedita doble","Cromado"),
AT("1571GCR","Cerradura B/F aluminio vidrio/pared grande","Cromado"),AT("1571GMA","Cerradura B/F aluminio vidrio/pared grande","Marrón"),
AT("1570GCR","Cerradura B/F aluminio vidrio/vidrio grande","Cromado"),AT("1570GMA","Cerradura B/F aluminio vidrio/vidrio grande","Marrón"),
AT("KITFRONTAL","Kit para box frontal","Fosco"),AT("KITFRONBLA","Kit para box frontal","Blanco"),AT("KITFRONEG","Kit para box frontal","Negro"),
AT("KITESQUINE","Kit para box esquinero","Fosco"),AT("KITESQBLA","Kit para box esquinero","Blanco"),AT("KITESQNEG","Kit para box esquinero","Negro")
];
export const templadoData=[...templadoProfiles,...templadoAccessories];

const PF=(codigo:string,nombre:string,peso:string,tipologia:string):Item=>({codigo,nombre,color:"No especificado",categoria:"Perfiles",peso,imagen:`/fachadas/${codigo}.png`,tipologia});
export const fachadasProfiles:Item[]=[
PF("LUV990","Alma interna de conexión columna VL024","1,848 kg/m","City"),
PF("VL048","Anclaje frontal losa para fachada","4,025 kg/m","City"),
PF("VL024","Columna central de 65 mm","1,753 kg/m","City"),
PF("VL025","Columna de 20 mm","1,287 kg/m","City"),
PF("VL041","Columna esquinero a 90° exterior","2,273 kg/m","City"),
PF("VL001","Columna mediana de 40 mm","1,479 kg/m","City"),
PF("RM025","Contramarco curvo de 70 mm","0,386 kg/m","City"),
PF("VL067","Contravidrio para hoja DVH VL066","0,179 kg/m","City"),
PF("CL006","Escuadra angular para fabricación de bastidores","1,134 kg/m","City"),
PF("VL066","Hoja perimetral para DVH fijo y proyectante","0,901 kg/m","City"),
PF("VL003","Hoja perimetral para proyectante","0,690 kg/m","City"),
PF("VL005","Marco perimetral para módulo fijo","0,556 kg/m","City"),
PF("VL032","Media columna de 20 mm","1,021 kg/m","City"),
PF("VL030","Media columna de 40 mm","1,310 kg/m","City"),
PF("VL028","Media columna lateral de 65 mm","1,442 kg/m","City"),
PF("CL011","Perfil macho en cuña para escuadra de 50 mm","0,311 kg/m","City"),
PF("LC041","Perfil rufo","0,535 kg/m","City"),
PF("CM129","Premarco de 65 × 34 para City","0,470 kg/m","City"),
PF("VL011","Presilla para fijación de cuadros fijos","0,238 kg/m","City"),
PF("FC369","Rufo interior tipo C","0,570 kg/m","City"),
PF("FC368","Tapita rufo","0,130 kg/m","City"),
PF("VL068","Travesaño para fijo y proyectante","0,975 kg/m","City"),
PF("CK524","Ángulo reforzado para anclaje","1,556 kg/m","Tapa-Presilla"),
PF("CK548","Ángulo reforzado para anclaje","2,073 kg/m","Tapa-Presilla"),
PF("FC018","Anclaje de conexión columnas de 50 mm","2,645 kg/m","Tapa-Presilla"),
PF("FC012","Columna fachada tapa y presilla de 80 × 40","1,237 kg/m","Tapa-Presilla"),
PF("FC017","Columna fachada tapa y presilla de 100 × 50","1,863 kg/m","Tapa-Presilla"),
PF("FC150","Columna fachada tapa y presilla de 150 × 50","3,321 kg/m","Tapa-Presilla"),
PF("FC200","Columna fachada con tapa de 200 mm","4,588 kg/m","Tapa-Presilla"),
PF("FC014","Presilla 40 mm para fachada","0,380 kg/m","Tapa-Presilla"),
PF("FC543","Presilla 50 mm para fachada","0,426 kg/m","Tapa-Presilla"),
PF("FC013","Tapa 40 mm para fachada","0,251 kg/m","Tapa-Presilla"),
PF("FC542","Tapa 50 mm para fachada","0,329 kg/m","Tapa-Presilla"),
PF("CK549","Tubo rectangular de 20 × 15","0,252 kg/m","Tapa-Presilla"),
PF("SI501","Columna fachada para vidrio botoneado","2,225 kg/m","Botoneada"),
PF("UN339","Media columna lateral derecha","1,395 kg/m","Modular"),
PF("UN340","Media columna lateral izquierda","1,708 kg/m","Modular"),
PF("UN354","Travesa central modular","0,897 kg/m","Modular"),
PF("UN353","Tapa travesa central modular","0,305 kg/m","Modular"),
PF("UN342","Travesa inferior modular","1,864 kg/m","Modular"),
PF("UN341","Travesa superior modular","2,295 kg/m","Modular"),
PF("UN208","Perfil de cuelgue lateral exterior","3,233 kg/m","Modular"),
PF("UN363","Guía interior de refuerzo de anclaje","2,616 kg/m","Modular")
];

const AF=(codigo:string,nombre:string,tipologia:string):Item=>({codigo,nombre,color:"No especificado",categoria:"Herrajes y accesorios",imagen:`/fachadas/${codigo}.png`,tipologia});
export const fachadasAccessories:Item[]=[
AF("PRE984","Presilla apoyo de marco perimetral","City"),AF("PRE976","Presilla interna para perfil rufo","City"),AF("PRE989","Presilla de fijación travesa","City"),AF("NYL190","Presilla de fijación en nylon para contramarcos","City"),AF("PAR691","Tornillo 4,8 × 16 inox.","City"),AF("FEC4800","Manija de cierre articulado derecho","City"),AF("FEC4810","Manija de cierre articulado izquierdo","City"),AF("BRA7620","Brazo de 34 cm para proyectante","City"),AF("BRA7630","Brazo de 60 cm para proyectante","City"),AF("BRA7640","Brazo de 95 cm para proyectante","City"),
AF("9224","Oreja muro cortina central","Botoneada"),AF("CBTO","Conjunto botón plástico para muro cortina","Botoneada"),
AF("PAR437","Tornillo 3,5 × 9,5 mm inox.","Modular"),AF("PAR936","Tornillo 4,2 × 16 mm inox.","Modular"),AF("PAR6700","Tornillo para anclaje","Modular"),AF("PAR4280","Tornillo ensamble de travesaños","Modular"),AF("PAR1087","Tornillo para canto","Modular"),AF("PAR1073","Tornillo anclaje lateral","Modular")
];

const SF=(codigo:string,nombre:string,tipologia:string):Item=>({codigo,nombre,color:"No especificado",categoria:"Felpudos y guarniciones",imagen:`/fachadas/${codigo}.png`,tipologia});
export const fachadasSeals:Item[]=[
SF("GUA366","Goma para tubo fachada","City"),SF("GUA367","Goma frontal de vedación","City"),SF("TARU20","Goma de espuma para vedación de 20 mm","City"),SF("3M1418872","Cinta 3M base espuma 19 mm vidrio-aluminio","City / Modular"),SF("GUA030","Goma para tubo fachada","Tapa-Presilla"),SF("GOMA1","Goma para muro cortina","Botoneada"),SF("GUA328","Goma junta tubular","Modular"),SF("GUA383","Goma junta central","Modular"),SF("GUA381","Goma junta horizontal","Modular")
];
export const fachadasData=[...fachadasProfiles,...fachadasAccessories,...fachadasSeals];
