import type {Item} from "./catalog-data";

const E=(codigo:string,nombre:string,peso:string,tipologia:string):Item=>({
  codigo,nombre,color:"No especificado",categoria:"Perfiles",peso,
  imagen:`/endura-apilable/${codigo}.png?v=1`,tipologia
});

export const enduraApilableData:Item[]=[
  E("CK700","Guía superior para doble carro","1,530 kg/m","Guías"),
  E("CK701","Hoja puerta para vidrio atornillado","1,391 kg/m","Hojas"),
  E("CK702","Clip complemento recto","0,189 kg/m","Complementarios"),
  E("CK703","Clip complemento curvo","0,269 kg/m","Complementarios"),
  E("CK704","Guía inferior","0,718 kg/m","Guías"),
  E("CK705","Hoja ventana para cortina de vidrio","0,551 kg/m","Hojas"),
  E("CK706","Perfil compensador de desniveles","0,201 kg/m","Complementarios")
];
