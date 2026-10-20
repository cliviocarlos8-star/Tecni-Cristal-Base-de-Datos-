import type {Item} from "./catalog-data";

const I=(codigo:string,nombre:string,peso:string,tipologia:string):Item=>({
  codigo,nombre,color:"No especificado",categoria:"Perfiles",peso,
  imagen:`/integra/${codigo}.png?v=1`,tipologia
});

export const integraData:Item[]=[
  I("CK600","Tapa frontal curva para cajón de 155 mm","0,879 kg/m","Cajón de persiana"),
  I("CK601","Tapa frontal curva para cajón de 200 mm","1,058 kg/m","Cajón de persiana"),
  I("CK650","Tapa registro interior para cajón de 200 mm","0,944 kg/m","Cajón de persiana"),
  I("CK651","Tapa inferior para cajón de 200 mm","0,806 kg/m","Cajón de persiana"),
  I("CK652","Tapa frontal externa para cajón de 200 mm","0,993 kg/m","Cajón de persiana"),
  I("CK653","Tapa superior para cajón de 200 mm","1,029 kg/m","Cajón de persiana"),
  I("CK654","Tapa registro interior para cajón de 155 mm","0,715 kg/m","Cajón de persiana"),
  I("CK655","Tapa inferior para cajón de 155 mm","0,628 kg/m","Cajón de persiana"),
  I("CK656","Tapa frontal externa para cajón de 155 mm","0,771 kg/m","Cajón de persiana"),
  I("CK657","Tapa superior para cajón de 155 mm","0,849 kg/m","Cajón de persiana"),
  I("CK658","Complemento clip contramarco Alpha","0,110 kg/m","Complementarios"),
  I("CK659","Terminal inferior para persiana enrollable","0,277 kg/m","Persiana enrollable"),
  I("CK660","Guía doble central para persiana enrollable","0,882 kg/m","Persiana enrollable"),
  I("CK661","Guía lateral para persiana enrollable","0,590 kg/m","Persiana enrollable"),
  I("CK662","Complemento guía de 130 mm para cinta manual","0,590 kg/m","Persiana enrollable"),
  I("CK663","Complemento guía de 130 mm para motor","0,201 kg/m","Persiana enrollable"),
  I("CK664","Complemento guía de 150 mm para cinta manual","1,048 kg/m","Persiana enrollable"),
  I("CK665","Complemento guía de 150 mm para motor","0,820 kg/m","Persiana enrollable"),
  I("DS238","Eje octogonal de 41 mm","0,481 kg/m","Ejes"),
  I("MN015","Eje octogonal de 62 mm","0,879 kg/m","Ejes")
];
