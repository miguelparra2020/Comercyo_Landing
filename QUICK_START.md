# 🚀 Guía Rápida - Comercyo Landing Page

## Instalación y Ejecución

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Abrir en el navegador
# http://localhost:4321
```

## Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo en puerto 4321 |
| `npm run build` | Genera build de producción en carpeta `dist/` |
| `npm run preview` | Preview del build de producción |
| `npm run astro` | Ejecuta comandos de Astro CLI |

## Estructura de Archivos Principales

```
src/
├── config/site.config.ts    ← Configuración del sitio (EDITAR AQUÍ)
├── pages/index.astro         ← Página principal (CONTENIDO)
├── components/
│   ├── SEOHead.astro         ← Meta tags y SEO
│   ├── Header.astro          ← Navegación
│   └── Footer.astro          ← Footer
└── styles/global.css         ← Estilos globales
```

## Personalización Rápida

### 1. Cambiar Información del Sitio
Edita `src/config/site.config.ts`:
```typescript
export const SITE = {
  name: 'Tu Empresa',
  domain: 'https://tudominio.com',
  defaultTitle: 'Tu título SEO',
  description: 'Tu descripción',
  // ...
};
```

### 2. Modificar Contenido
Edita `src/pages/index.astro` - Busca las secciones:
- **Hero**: Título principal y CTA
- **Servicios**: Tarjetas de servicios
- **Beneficios**: Para startups y empresas
- **Por qué**: Ventajas competitivas
- **Contacto**: Formulario

### 3. Cambiar Colores
Edita `tailwind.config.mjs`:
```javascript
colors: {
  primary: {
    500: '#0ea5e9',  // Color principal
    600: '#0284c7',  // Hover
    // ...
  }
}
```

## Checklist Pre-Launch

### Contenido
- [ ] Actualizar información en `site.config.ts`
- [ ] Revisar y personalizar textos en `index.astro`
- [ ] Añadir imágenes (ver `IMAGES_TODO.md`)
- [ ] Configurar email de contacto

### SEO
- [ ] Verificar meta tags en cada página
- [ ] Comprobar que sitemap.xml se genera
- [ ] Revisar robots.txt
- [ ] Validar JSON-LD en Google Rich Results Test

### Performance
- [ ] Optimizar imágenes (< 300KB)
- [ ] Verificar Core Web Vitals en PageSpeed Insights
- [ ] Comprobar que no hay JavaScript innecesario
- [ ] Validar que CSS está minificado

### Accesibilidad
- [ ] Verificar contraste de colores (WCAG AA)
- [ ] Probar navegación por teclado
- [ ] Validar ARIA labels
- [ ] Comprobar alt text en imágenes

### Testing
- [ ] Probar en Chrome, Firefox, Safari
- [ ] Verificar responsive en móvil y tablet
- [ ] Comprobar formulario de contacto
- [ ] Validar enlaces internos y externos

## Deployment

### Opción 1: Netlify
```bash
# 1. Build
npm run build

# 2. Conectar repositorio Git en Netlify
# 3. Configurar:
#    - Build command: npm run build
#    - Publish directory: dist
```

### Opción 2: Vercel
```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Deploy
vercel

# 3. Seguir instrucciones
```

### Opción 3: Manual (cualquier hosting)
```bash
# 1. Build
npm run build

# 2. Subir contenido de carpeta dist/ a tu servidor
# 3. Configurar dominio
```

## Optimizaciones Post-Launch

1. **Analytics**: Añadir Google Analytics o Plausible
2. **Search Console**: Registrar sitio en Google Search Console
3. **Formulario**: Integrar con servicio de email (SendGrid, Mailgun)
4. **CDN**: Configurar Cloudflare para mejor performance
5. **Monitoring**: Configurar uptime monitoring

## Recursos Útiles

- **Astro Docs**: https://docs.astro.build
- **TailwindCSS**: https://tailwindcss.com/docs
- **PageSpeed Insights**: https://pagespeed.web.dev
- **Google Search Console**: https://search.google.com/search-console
- **Schema Validator**: https://validator.schema.org

## Soporte

¿Necesitas ayuda? Contacta a: hola@comercyo.com

---

**Versión**: 1.0.0  
**Última actualización**: Octubre 2024
