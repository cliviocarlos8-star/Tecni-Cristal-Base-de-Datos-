import type {Item} from "./catalog-data";

const C=(codigo:string,nombre:string,peso:string,tipologia:string):Item=>({
  codigo,nombre,color:"No especificado",categoria:"Perfiles",peso,
  imagen:`/city/${codigo}.png?v=1`,tipologia
});

export const cityData:Item[]=[
  C("VL025","Columna 20 mm","1,287 kg/m","Columnas"),
  C("VL032","Media columna 20 mm","1,021 kg/m","Columnas"),
  C("VL001","Columna 40 mm","1,497 kg/m","Columnas"),
  C("VL030","Media columna 40 mm","1,310 kg/m","Columnas"),
  C("VL024","Columna 65 mm","1,753 kg/m","Columnas"),
  C("VL028","Media columna 65 mm","1,442 kg/m","Columnas"),
  C("VL041","Esquinero 65 mm","2,273 kg/m","Columnas"),
  C("VL068","Travesaño fachada","0,975 kg/m","Travesaño"),
  C("VL005","Hoja para fijo","0,556 kg/m","Hojas"),
  C("VL003","Hoja para proyectante","0,690 kg/m","Hojas"),
  C("VL066","Hoja para vidrio DVH hasta 21 mm","0,901 kg/m","Hojas"),
  C("VL067","Contravidrio para vidrio DVH hasta 21 mm","0,179 kg/m","Contravidrios"),
  C("CM129","Premarco de 65 × 34 para City","0,470 kg/m","Premarcos"),
  C("VL011","Presilla fachada para hoja fija","0,283 kg/m","Complementarios"),
  C("VL043","Conexión para fachada para VL024","1,848 kg/m","Complementarios"),
  C("LC041","Remate de losa salida travesaño","0,535 kg/m","Complementarios"),
  C("FC369","Remate de losa intermedio","0,570 kg/m","Complementarios"),
  C("FC368","Remate de losa tapa","0,130 kg/m","Complementarios"),
  C("VL048","Anclaje fachada para VL024","3,882 kg/m","Complementarios")
];
