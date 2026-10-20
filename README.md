# Base de datos Tecni Cristal

Proyecto completo del catálogo de materiales de Tecni Cristal, recuperado desde Sites. Incluye la interfaz, los datos del catálogo, sus imágenes y las herramientas de desarrollo originales.

## Origen de esta copia

- Sitio original: https://tecni-cristal-catalogo.cliviocarlos8.chatgpt.site
- Nombre en Sites: **Base de datos Tecni Cristal**.
- Versión de Sites: **43**.
- Commit de origen: `c5bcea8c29693f3ce159b699da3e312489812d23`.
- Fecha de copia a GitHub: **20 de octubre de 2026**.

Se conservan todos los archivos del proyecto original y su configuración de Sites. La documentación técnica original está en [docs/README-Sites.md](docs/README-Sites.md).

## Contenido

- `app/`: interfaz, búsqueda y datos de las familias de materiales del catálogo.
- `public/`: imágenes y recursos del catálogo, organizados por familias y marcas.
- `scripts/`: herramientas originales de preparación y desarrollo.
- `tests/`: pruebas originales del proyecto.
- `build/`, `worker/` y `.openai/`: integración y configuración para Sites.
- `package.json` y `package-lock.json`: dependencias y versiones del proyecto.

## Datos del catálogo

Este sitio contiene los datos del catálogo en archivos del propio proyecto, principalmente `app/catalog-data.ts`, los demás archivos `app/*-data.ts` y `app/page.tsx`. Esos datos están incluidos en la copia a GitHub.

La configuración actual no utiliza una base D1 ni un contenedor R2 de Sites. Esta copia corresponde al catálogo de materiales y es independiente de los datos operativos del inventario, que permanecen en Supabase.

Las claves privadas y los archivos `.env` no deben guardarse en Git. La subida a GitHub no cambia el sitio publicado ni configura una sincronización automática entre GitHub y Sites.

## Desarrollo

El proyecto usa React y Vinext. Requiere Node.js `>=22.13.0`. Los scripts originales están preparados para Linux, con `bash`, `flock`, `curl` y GNU `timeout`; en Windows requieren un entorno compatible, como WSL.

```bash
npm run install:ci
npm run dev
```

Para compilar, usar `npm run build`. Consultar [la documentación original](docs/README-Sites.md) para los detalles del entorno.
