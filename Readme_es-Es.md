# Leaflet Color Arrow

**Un pequeño plug-in para crear flechas Marker personalizables**

# Contenido
- [Instalación](#instalacion)
- [Uso](#uso)
- [Ejemplos](#ejemplo)

## Instalación

Para instalar la ultima versión compatible del paquete vía NPM, utiliza el siguiente comando:

```
npm i leaflet.color-arrow
```

## Uso

Este paquete contiene un archivo style.scss que define el CSS necesario para mostrar la flecha. El archivo de Sass también incluye una variable para definir el tamaño de la flecha. Asegúrate de incluir este archivo en tu estructura CSS.

En Javascript, puedes simplemente importar el paquete después de haber importado Leaflet. El paquete extenderá el `L.Marker` predeterminado y estará disponible como` L.Marker.ColorArrow` y proporcionará los siguientes métodos adicionales sobre el Marker original:

- `setRGBA()` Establece el color de la fecha en RGBA. El valor predeterminado de Alpha será 255 en caso de ser omitido.
- `setHSVA()` Establece el color de la fecha en HSVA. El valor predeterminado de Alpha será 1 en caso de ser omitido.
- `setColor()` Establece el color de la flecha como un string de CSS.

## Ejemplo

El siguiente ejemplo muestra como utilizar el paquete:

```js
/* Crear un nuevo marcador con el color 'red' de CSS */
const m = new L.Marker.ColorArrow({
  color: 'red'
});

m.setRGBA(0, 255, 0); // Establece el color en verde
```
