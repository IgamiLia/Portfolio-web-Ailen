# ✅ Checklist de Verificación Final – Portfolio Fotográfico
**Fecha:** 29/07/2025

Este checklist cubre las pruebas funcionales, de contenido, rendimiento, accesibilidad y SEO para garantizar que el sitio esté listo para producción.

---

## 🔍 Navegación y Enlaces
- [ ] Todas las rutas principales funcionan (`/`, `/galeria`, `/galeria/[categoria]`)
- [ ] El enlace "Volver al inicio" funciona desde todas las páginas
- [ ] Todos los enlaces a redes sociales (Instagram, Gmail, Facebook, WhatsApp) funcionan
- [✅] El botón del slider lleva a la galería correctamente
- [ ] Las categorías cargan sus fotos correctamente

## 🖼️ Imágenes y CMS (DatoCMS)
- [ ] Todas las imágenes de portada en la galería se ven correctamente
- [ ] Las imágenes dentro de cada categoría se cargan sin errores
- [ ] Todas las imágenes tienen `alt` correcto cargado desde el CMS
- [✅] Las imágenes están optimizadas automáticamente (`?fm=webp&auto=compress`)
- [ ] El nombre y descripción de cada categoría se visualizan correctamente

## 📱 Responsive y Visual
- [ ] El diseño se adapta correctamente en pantallas grandes (desktop)
- [ ] El diseño se adapta correctamente en pantallas medianas (tablet)
- [ ] El diseño se adapta correctamente en móviles (menú, texto, galería)
- [ ] No hay elementos rotos o que se superpongan

## ⚙️ Funcionalidad Técnica
- [ ] No hay errores en la consola del navegador
- [ ] No hay advertencias de carga de recursos (404, CORS, etc.)
- [ ] El archivo `robots.txt` está presente y configurado correctamente
- [✅] Existe el archivo `src/pages/404.astro` y se renderiza correctamente

## 🚀 Rendimiento (Lighthouse / PageSpeed)
- [ ] Performance > 90
- [ ] Accesibilidad > 90
- [ ] SEO > 90
- [ ] Mejores prácticas > 90
- [✅] Todas las imágenes relevantes usan `loading="lazy"`
- [✅] Las fuentes están auto-hosteadas o bien optimizadas

## 🧠 Accesibilidad (A11Y)
- [ ] Se puede navegar todo el sitio con teclado (Tab, Enter)
- [ ] Todos los links son distinguibles y visibles
- [ ] El contraste de texto sobre fondo cumple mínimo WCAG AA
- [ ] El contenido tiene estructura semántica (`h1`, `main`, `section`, etc.)

## 📦 SEO y Metadatos
- [ ] `<title>` único por página
- [✅] `<meta name="description">` presente y descriptivo
- [✅] `<link rel="canonical">` presente y correcto //falta corregir los url
- [ ] Metaetiquetas Open Graph (`og:title`, `og:image`, etc.) configuradas
- [ ] Archivo `sitemap.xml` si se desea indexación completa
- [ ] Favicon en `.ico` + `.svg` correctamente instalado

---

**Comentario final:**  
Dejar constancia de que todos los puntos fueron revisados antes de hacer el deploy final.
