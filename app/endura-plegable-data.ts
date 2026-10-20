import type {Item} from "./catalog-data";

const E=(codigo:string,nombre:string,peso:string,tipologia:string):Item=>({
  codigo,nombre,color:"No especificado",categoria:"Perfiles",peso,
  imagen:`/endura-plegable/${codigo}.png?v=1`,tipologia
});

export const enduraPlegableData:Item[]=[
  E("CK710","Marco para puerta plegable","1,251 kg/m","Marcos y guías"),
  E("CK711","Hoja abierta para plegable","0,974 kg/m","Hojas"),
  E("CK712","Hoja mallorquina para plegable","0,967 kg/m","Hojas"),
  E("CK713","Guía carro superior plegable","0,678 kg/m","Marcos y guías"),
  E("CK714","Guía inferior plegable","0,729 kg/m","Marcos y guías")
];
