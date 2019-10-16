# Folleto Color Flecha

**Un pequeño complemento de folleto para crear marcadores de flecha que se pueden colorear!**

# Tabla de contenido
- [Instalación](#Instalación)
- [Uso](#Uso)
- [Ejemplo](#Ejemplo)

## Instalación

Para instalar la última versión compatible del paquete a través de NPM, ejecute el siguiente comando:

```
npm i leaflet.color-arrow
```

## Uso

Este paquete viene con un archivo style.scss que define el CSS que se requiere para mostrar la flecha. El archivo Sass también incluye una variable para definir el tamaño de la flecha. Asegúrese de incluir este archivo en su compilación CSS.

En el lado de JavaScript, simplemente puede importar el paquete después de importar el folleto. El paquete extenderá el `L.Marker` predeterminado y estará disponible como `L.Marker.ColorArrow` y proporcionará los siguientes métodos adicionales sobre el Marcador original:

- `setRGBA()` Establece el color de la flecha en RGBA. Alpha tendrá un valor predeterminado de 255 si se omite.
- `setHSVA()` Establece el color de la flecha en HSVA. El valor predeterminado de Alpha será 1 si se omite.
- `setColor()` Establece el color de la flecha como una cadena de color CSS.

## Ejemplo

El siguiente ejemplo le mostrará cómo usar el paquete:

``` js
/ * Crear un nuevo marcador con el color CSS 'rojo' * /
const m = new L.Marker.ColorArrow ({
  color: 'red'
});

m.setRGBA (0, 255, 0); // Establece el color en verde
```
