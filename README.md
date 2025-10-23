# C# 🚀 Comercyo.com - Landing Page con SEO Extremo

Landing page profesional desarrollada con **Astro.js**, optimizada para SEO, Core Web Vitals y rendimiento máximo.

## ✨ Características

- **SEO Extremo**: Meta tags completos, JSON-LD Schema, Open Graph, Twitter Cards
- **Rendimiento Optimizado**: Core Web Vitals, lazy loading, assets optimizados
- **Responsive Design**: Mobile-first con TailwindCSS
- **Accesibilidad**: ARIA labels, navegación por teclado, contraste optimizado
- **Sitemap Automático**: Generación automática con @astrojs/sitemap
- **TypeScript**: Type-safe con configuración strict
- **Geolocalización SEO**: Optimizado para Colombia (principales ciudades)

## 🛠️ Stack Tecnológico

- **Framework**: Astro 4.x
- **Estilos**: TailwindCSS 3.x
- **Lenguaje**: TypeScript (strict mode)
- **SEO**: @astrojs/sitemap
- **Build**: Vite

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 🏗️ Estructura del Proyecto

```
/
├── public/
│   ├── robots.txt          # Configuración de crawlers
│   ├── favicon.svg         # Favicon SVG
│   └── images/             # Imágenes estáticas
├── src/
│   ├── components/
│   │   ├── SEOHead.astro   # Componente SEO principal
│   │   ├── Header.astro    # Header con navegación
│   │   └── Footer.astro    # Footer con enlaces
│   ├── config/
│   │   └── site.config.ts  # Configuración del sitio
│   ├── layouts/
│   │   └── BaseLayout.astro # Layout base
│   ├── pages/
│   │   └── index.astro     # Página principal
│   └── styles/
│       └── global.css      # Estilos globales
├── astro.config.mjs        # Configuración de Astro
├── tailwind.config.mjs     # Configuración de Tailwind
└── tsconfig.json           # Configuración de TypeScript
```

## 🎯 SEO Features

### Meta Tags
- Title y description optimizados
- Keywords específicos
- Canonical URLs
- Hreflang para español (Colombia)
- Geo tags para Colombia

### Open Graph
- og:title, og:description, og:image
- og:type, og:url, og:site_name
- og:locale (es-CO)

### Twitter Cards
- twitter:card (summary_large_image)
- twitter:title, twitter:description
- twitter:image, twitter:creator

### JSON-LD Schema
- Organization
- WebSite con SearchAction
- WebPage
- Service con areaServed (ciudades colombianas)

### Sitemap
- Generación automática
- Frecuencia de actualización
- Prioridades configuradas

## 🚀 Optimizaciones de Performance

### Core Web Vitals
- **LCP**: Optimización de imágenes y CSS crítico inline
- **FID**: JavaScript mínimo, componentes estáticos
- **CLS**: Dimensiones de imágenes definidas

### Assets
- Imágenes en formatos modernos (WebP, AVIF)
- Lazy loading de imágenes
- Preconnect a dominios externos
- DNS prefetch

### Build
- Minificación automática
- Tree shaking
- Code splitting
- Compresión gzip/brotli

## 📝 Configuración

### Site Config (`src/config/site.config.ts`)

Personaliza la información del sitio:

```typescript
export const SITE = {
  name: 'Comercyo.com',
  domain: 'https://comercyo.com',
  defaultTitle: 'Tu título',
  description: 'Tu descripción',
  keywords: ['keyword1', 'keyword2'],
  cities: ['Bogotá', 'Medellín', ...],
  // ...
};
```

### Variables de Entorno

Copia `.env.example` a `.env` y configura:

```bash
PUBLIC_SITE_URL=https://comercyo.com
```

## 🎨 Personalización

### Colores
Modifica `tailwind.config.mjs` para cambiar la paleta de colores:

```javascript
theme: {
  extend: {
    colors: {
      primary: { ... }
    }
  }
}
```

### Contenido
Edita `src/pages/index.astro` para modificar el contenido de las secciones.

## 📊 Checklist SEO

- ✅ Meta tags completos (title, description, keywords)
- ✅ Open Graph tags
- ✅ Twitter Cards
- ✅ JSON-LD Schema (Organization, WebSite, Service)
- ✅ Canonical URLs
- ✅ Hreflang tags
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Favicon y Apple Touch Icon
- ✅ Semantic HTML (header, main, footer, article, section)
- ✅ ARIA labels
- ✅ Alt text en imágenes
- ✅ Heading hierarchy (H1 único)
- ✅ Mobile responsive
- ✅ Core Web Vitals optimizado

## 🌐 Deployment

### Netlify
```bash
npm run build
# Deploy la carpeta dist/
```

### Vercel
```bash
npm run build
# Deploy automático desde Git
```

### Otros
El proyecto genera archivos estáticos en `dist/` que pueden ser servidos desde cualquier hosting.

## 📈 Próximos Pasos

1. **Imágenes**: Añadir `/public/images/og-image.jpg` (1200x630px)
2. **Imágenes**: Añadir `/public/images/logo.png`
3. **Analytics**: Integrar Google Analytics o alternativa
4. **Formulario**: Conectar formulario de contacto a servicio de email
5. **Blog**: Añadir sección de blog para contenido SEO
6. **Idiomas**: Expandir a otros idiomas si es necesario

## 📄 Licencia

Proyecto privado - Comercyo.com 2025

## 🤝 Soporte

Para soporte, contacta a: hola@comercyo.com