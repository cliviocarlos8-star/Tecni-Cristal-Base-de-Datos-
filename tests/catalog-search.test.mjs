import test from "node:test";
import assert from "node:assert/strict";
import {filterCatalog,matchesCatalogItem} from "../app/catalog-search.ts";

const rows=[
  {codigo:"RM002",nombre:"Contramarco curvo 37 mm",categoria:"Perfiles",tipologia:"Contramarcos",color:"No especificado",peso:"0,212 kg/m",imagen:"/gd/RM002.png"},
  {codigo:"AK101",nombre:"Marco perimetral chico",categoria:"Perfiles",tipologia:"Batiente",color:"No especificado",imagen:"/alpha/AK101.png"},
  {codigo:"ÁK230",nombre:"Travesaño con contravidrio",categoria:"Perfiles",tipologia:"Corrediza",color:"No especificado",imagen:"/alpha/AK230.png"},
];

for(const query of ["RM002","rm002","Rm002","RM 002","  rm002  "]){
  test(`encuentra códigos normalizados: ${JSON.stringify(query)}`,()=>assert.equal(matchesCatalogItem(rows[0],query),true));
}

for(const query of ["contramarco","Contramarco","contramarco curvo","curvo 37"]){
  test(`encuentra nombres parciales: ${query}`,()=>assert.equal(matchesCatalogItem(rows[0],query),true));
}

test("ignora acentos",()=>assert.equal(matchesCatalogItem(rows[2],"travesano"),true));
test("Todos no agrega filtros ocultos",()=>assert.equal(filterCatalog(rows,"","Todos").length,3));
test("el filtro de categoría se combina con la búsqueda",()=>assert.deepEqual(filterCatalog(rows,"rm 002","Perfiles").map(x=>x.codigo),["RM002"]));
test("limpiar la búsqueda restaura el universo",()=>assert.equal(filterCatalog(rows,"","Todos").length,rows.length));
