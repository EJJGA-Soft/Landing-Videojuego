# Generación de Íconos PWA

Para que la PWA funcione correctamente, necesitas generar los íconos PWA a partir de tu logo.

## Opción 1: Usar un generador online

1. Ve a https://realfavicongenerator.net/ o https://www.pwabuilder.com/imageGenerator
2. Sube tu archivo `public/logo.png` o crea una versión cuadrada 512x512px
3. Genera los siguientes íconos:
   - `icon-192.png` (192x192)
   - `icon-512.png` (512x512)
   - `icon-maskable-192.png` (192x192 con safe zone)
   - `icon-maskable-512.png` (512x512 con safe zone)
4. Coloca todos los archivos en la carpeta `public/`

## Opción 2: Crear manualmente con herramientas de diseño

### Especificaciones:

**icon-192.png y icon-512.png:**
- Formato: PNG
- Fondo: Transparente o color sólido
- Contenido: Logo centrado con padding mínimo

**icon-maskable-192.png y icon-maskable-512.png:**
- Formato: PNG
- Fondo: Color sólido (#dc2626 o #000000 recomendado)
- Safe zone: El contenido importante debe estar en el círculo central (80% del tamaño)
- Padding: El logo debe tener al menos 10% de padding en todos los lados

## Opción 3: Usar Sharp (Node.js)

```bash
npm install -g sharp-cli
sharp -i public/logo.png -o public/icon-192.png resize 192 192
sharp -i public/logo.png -o public/icon-512.png resize 512 512
```

## Screenshots (Opcional)

Para mejorar la apariencia en las tiendas de apps:
- `screenshot-mobile.png` (540x720 o similar)
- `screenshot-desktop.png` (1920x1080 o similar)

Capturas de pantalla de tu landing page funcionando.

## Verificación

Una vez generados los íconos, puedes verificar la PWA:

1. Ejecuta `npm run build`
2. Ejecuta `npm run preview`
3. Abre DevTools > Application > Manifest
4. Verifica que todos los íconos carguen correctamente
5. Prueba la instalación usando el botón de "Instalar" del navegador
