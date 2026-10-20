import type {Item} from "./catalog-data";
const V=(codigo:string,nombre:string,color:string,tipologia:string):Item=>({codigo,nombre,color,categoria:"Tipos de vidrio",peso:"No aplica",imagen:`/tipos-vidrio/${codigo}.png?v=1`,tipologia});
export const tiposVidrioData:Item[]=[
V("VILUX-VID-TEMP","Vidrio templado","Incoloro o tonalizado","Seguridad · hasta 5 veces más resistente"),
V("VILUX-VID-LAM","Vidrio laminado / multilaminado","Según composición","Seguridad · PVB o SentryGlas®"),
V("VILUX-VID-DVH","Doble Vidriado Hermético (DVH)","Según composición","Aislamiento térmico y acústico · aire o argón"),
V("VILUX-VID-SUNLIGHT","ClimaGuard SunLight","Control solar","Reduce calor y deslumbramiento"),
V("VILUX-VID-SS20","SunGuard Solar Silver 20","Plateado reflectivo","Control solar reflectivo"),
V("VILUX-VID-CHAMP","Sunlux Champagne","Champagne","Tonalizado decorativo"),
V("VILUX-VID-STIP","Stipolite","Translúcido texturado","Privacidad con iluminación"),
V("VILUX-VID-STAMPA","Vilux Stampa","Impresión personalizada","Impresión digital resistente a UV e intemperie"),
V("VILUX-VID-TERMO","Vidrio termoendurecido","Según vidrio base","Tratamiento térmico para laminados y fachadas")
];
