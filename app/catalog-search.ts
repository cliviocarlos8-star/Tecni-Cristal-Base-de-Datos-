import type {Item} from "./catalog-data";

export function normalizeSearch(value:string){
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("es")
    .trim()
    .replace(/\s+/g, " ");
}

export function matchesCatalogItem(item:Item, query:string){
  const normalizedQuery=normalizeSearch(query);
  if(!normalizedQuery)return true;
  const searchable=normalizeSearch([
    item.codigo,item.nombre,item.categoria,item.tipologia,item.color,
  ].filter(Boolean).join(" "));
  const compactQuery=normalizedQuery.replace(/[^a-z0-9]/g, "");
  const compactSearchable=searchable.replace(/[^a-z0-9]/g, "");
  return searchable.includes(normalizedQuery)||
    (compactQuery.length>0&&compactSearchable.includes(compactQuery));
}

export function filterCatalog(items:Item[], query:string, category:string){
  return items.filter(item=>(category==="Todos"||item.categoria===category)&&matchesCatalogItem(item,query));
}
