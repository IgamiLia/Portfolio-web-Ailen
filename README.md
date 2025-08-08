TAREAS COMPLETAS (10)

✅ Crear el inicio con sus datos
✅ Slider
✅ Crear Galería > Categorías > Fotos
✅ Crear cuenta en DatoCMS y conectarla al proyecto
✅ Crear Categorías y Fotos en el panel de DatoCMS 
✅ Optimizar imágenes automaticamente 
✅ Funcionamiento
✅ Implementar lazy-loading de imágenes con loading="lazy"
✅ Implementar 404.astro personalizado

Metadatos completos {
✅<html lang="es">
✅<title>
✅<meta name="description">
✅<meta charset="utf-8">
✅<link rel="canonical"> //falta corregir los url
✅<meta name="viewport" content="width=device-width, initial-scale=1.0">
}

TAREAS PENDIENTES (22)

IMPORTANTE: Verificar datos antes de hacer el deploy

Crear los favicon de las páginas(Inicio, Galería, y Fotos) y hacerlo compatible para toda plataforma (incluir .ico junto al .svg)
Terminar los estilos del inicio
Hacer los estilos con grid de la galería
Hacer los estilos con grid de las fotos
No olvidar el botón de regresar a la página anterior
Revisar y verificar contraste de colores https://webaim.org/resources/contrastchecker/
Crear el responsive design
Hacer tests completos del CMS
Hacer tests generales
Hacer la invitación al proyecto dentro del panel en DatoCMS para administrar el contenido
Testear todos los alt de las imágenes
Poner los enlaces de sus redes (Gmail, Facebook, Instagram y WhatsApp) dentro de los ancor
Crear TODOS los metadatos necesarios (
<meta name="robots">

Controla indexación (index/noindex) y seguimiento (follow/nofollow). También admite valores como nosnippet, noarchive, max-snippet 
Google for Developers
Search Engine Land
.



Evita contenido duplicado declarando la URL canónica absoluta 
Cronbay Tech
.


Facebook tags {
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Título de tu sitio" />
    <meta property="og:description" content="Descripción atractiva de la página" />
    <meta property="og:image" content="https://tusitio.com/imagen.jpg" />
    <meta property="og:url" content="https://tusitio.com" />
    <meta property="og:locale" content="es_AR" />
    <meta property="og:site_name" content="Nombre del sitio" />
    
    Test: https://developers.facebook.com/tools/debug/
}
Twitter tags (para mayor alcance en Twitter, Slack, Discord, Telegram y Clientes de correo avanzados) {
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Título del contenido" />
    <meta name="twitter:description" content="Descripción atractiva" />
    <meta name="twitter:image" content="https://tusitio.com/imagen.jpg" />
    <meta name="twitter:site" content="@TuUsuarioTwitter" />

    Test: https://cards-dev.x.com/validator
}

Fortalece señales de experiencia y autoridad en blogs y contenido editorial 
Google for Developers
+4
Search Engine Land
+4
Google for Developers
+4
.

Geo tags (geo.position, geo.region)

Útiles si tu negocio tiene presencia local o internacional 
)

Schema Author {

En el head
<script type="application/ld+json">
  {JSON.stringify(schemaPrincipal)}
</script>

En un archivo .js

export const schemaPrincipal = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Portfolio de Fotografía - Nombre de la Fotógrafa",
  "url": "https://tusitio.com",
  "description": "Portfolio profesional de retratos, paisajes y fotografía documental.",
  "inLanguage": "es",
  "author": {
    "@type": "Person",
    "name": "Nombre de la Fotógrafa",
    "url": "https://tusitio.com/sobre-mi",
    "sameAs": [
      "https://www.instagram.com/usuario",
      "https://www.facebook.com/usuario",
      "mailto:tuemail@gmail.com"
    ]
  },
  "image": {
    "@type": "ImageObject",
    "url": "https://tusitio.com/images/preview.jpg",
    "width": 1200,
    "height": 630
  },
  "publisher": {   // No es necesario, solo en necesidad de un logo 
    "@type": "Organization",
    "name": "Nombre del Portfolio",
    "logo": {
      "@type": "ImageObject",
      "url": "https://tusitio.com/images/logo.png",
      "width": 512,
      "height": 512
    }
  }
}


Importarlo en Astro

---
import { schemaPrincipal } from '@lib/schemaPrincipal';
---
<script type="application/ld+json">
  {JSON.stringify(schemaPrincipal)}
</script>



Schema dinámico para categorías

En un .js
export function buildCategoriaSchema(slug: string, titulo: string, imagenes: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `Galería - ${titulo}`,
    "url": `https://tusitio.com/galeria/${slug}`,
    "hasPart": imagenes.map((url) => ({
      "@type": "ImageObject",
      "contentUrl": url
    }))
  };
}

En Astro
---
import { buildCategoriaSchema } from '@lib/schemas';
const schemaCategoria = buildCategoriaSchema(slug, titulo, imagenes.map(img => img.url));
---
<script type="application/ld+json">
  {JSON.stringify(schemaCategoria)}
</script>

}



Generar y subir un sitemap XML dinámico

Minificación y compresión (gzip/brotli) al hacer astro build //Asegurar que esté habilitado el servidor en producción

Verificar la estructura y orden correctos del HTML5



Verificar velocidad de carga en Lighthouse

Verificar el SEO antes y después del deploy / Integración con Google Search Console

Revisión y estandarización de slugs 

Política de privacidad y/o aviso legal básico

Agregar aviso de uso de cookies si se implementa analítica

Integrar Google Analytics 4 o alternativa sin cookies

Verificar datos estructurados en Google con Rich Results Test // https://search.google.com/test/rich-results

Verificar el dominio en Search Console y enviar el sitemap