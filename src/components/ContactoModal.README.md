# ContactoModal Component

## Descripción
Componente modal de contacto que se puede abrir y cerrar. Reemplaza la sección de contacto estática con una experiencia de usuario más moderna y menos intrusiva.

## Ubicación
`/src/components/ContactoModal.astro`

## Uso

### 1. Importar el componente
```astro
import ContactoModal from '~/components/ContactoModal.astro';
```

### 2. Incluir en tu layout o página
```astro
<ContactoModal />
```

### 3. Abrir el modal desde cualquier lugar
Puedes abrir el modal usando JavaScript desde cualquier botón o enlace:

```html
<!-- Usando onclick -->
<button onclick="window.openContactModal()">
  Contacto
</button>

<!-- O usando un event listener -->
<button id="mi-boton">Contacto</button>

<script>
  document.getElementById('mi-boton')?.addEventListener('click', () => {
    window.openContactModal();
  });
</script>
```

## Funcionalidades

### Abrir el modal
```javascript
window.openContactModal()
```

### Cerrar el modal
```javascript
window.closeContactModal()
```

El modal también se cierra automáticamente cuando:
- Se hace clic en el botón de cerrar (X)
- Se hace clic fuera del modal (en el backdrop)
- Se presiona la tecla Escape

## Características
- ✅ Overlay oscuro con backdrop
- ✅ Botón de cerrar visible
- ✅ Cierre con tecla Escape
- ✅ Cierre al hacer clic fuera del modal
- ✅ Previene scroll del body cuando está abierto
- ✅ Animaciones suaves
- ✅ Responsive design
- ✅ Formulario completo de contacto

## Migración desde ContactoSection
El componente `ContactoModal` reemplaza a `ContactoSection.astro`. Todos los botones de "Contacto" en el sitio ahora abren este modal en lugar de navegar a una sección.

### Archivos actualizados:
- `src/pages/index.astro` - Usa ContactoModal en lugar de ContactoSection
- `src/components/Header.astro` - Botones de contacto abren el modal
- `src/components/Footer.astro` - Enlace de contacto abre el modal
- `src/sesions/HeroSection.astro` - Botón CTA abre el modal
- `src/sesions/PersonalizacionSection.astro` - Botones CTA abren el modal
- `src/sesions/PorQueSection.astro` - Botón CTA abre el modal
