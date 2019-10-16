# Leaflet Color Arrow

** En liten Leaflet-plugin för att skapa pilmarkörer som kan färgsättas!**

# Innehållsförteckning
- [Installation](#installation)
- [Användning](#usage)
- [Exempel](#example)

## Installation

För att installera den senaste kompatibla versionen av paketet via NPM, kör följande kommando:

```
npm i leaflet.color-arrow
```

## Användning

Det här paketet kommer med en style.scss-fil som definierar den CSS som krävs för att visa pilen. Sass-filen inkluderar också en variable som definierar storleken på pilen. Se till att inkludera den filen i ditt CSS-bygge.

Vad gäller JavaScript så kan du helt enkelt importera paketet efter att du har importerat Leaflet. Paketet kommer att utöka standard `L.Marker` och vara tillgänglig som `L.Marker.ColorArrow` och tillhandahålla följande metoder utöver de som finns på den ursprungliga Marker:

- `setRGBA()` Sätter färgen på pilen i RGBA. Alfa kommer att sättas till 255 om utelämnad.
- `setHSVA()` Sätter färgen på pilen i HSVA. Alfa kommer att sättas till 1 om utelämnad.
- `setColor()` Sätter färgen på pilen som en CSS-färgsträng.

## Exempel

Följande exempel visar hur du använder paketet:

```js
/* Skapar en ny markör med CSS-färgen satt till 'red' */
const m = new L.Marker.ColorArrow({
  color: 'red'
});

m.setRGBA(0, 255, 0); // Sätter färgen till grönt
```
