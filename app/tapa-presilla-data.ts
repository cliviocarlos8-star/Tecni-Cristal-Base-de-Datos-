import type {Item} from "./catalog-data";

const C=(codigo:string,nombre:string,peso:string,tipologia:string):Item=>({
  codigo,nombre,color:"No especificado",categoria:"Perfiles",peso,
  imagen:`/tapa-presilla/${codigo}.png?v=1`,tipologia
});

export const tapaPresillaData:Item[]=[
  C("FC012","Columna 80 × 40 mm","1,237 kg/m","Columnas"),
  C("FC017","Columna 100 × 50 mm","1,863 kg/m","Columnas"),
  C("FC150","Columna reforzada 150 × 50 mm","3,321 kg/m","Columnas"),
  C("FC200","Columna reforzada 200 × 50 mm","4,588 kg/m","Columnas"),
  C("FC543","Presilla de fachada para columna de 50 mm","0,426 kg/m","Complementarios"),
  C("FC542","Tapa de fachada para columna de 50 mm","0,329 kg/m","Complementarios"),
  C("FC014","Presilla de fachada para columna de 40 mm","0,380 kg/m","Complementarios"),
  C("FC013","Tapa de fachada para columna de 40 mm","0,251 kg/m","Complementarios"),
  C("FC018","Anclaje de fachada para FC017 y FC200","2,645 kg/m","Complementarios")
];
