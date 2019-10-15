# Leaflet Color Arrow

**Ein kleines Leaflet-Plugin um Pfeil-Marker zu erstellen welche sich einfärben lassen!**

# Inhalt
- [Installation](#installation)
- [Benutzung](#benutzung)
- [Beispiel](#beispiel)

## Installation

Um die letzte, kompatible Version des Paketes via NPM zu installieren muss folgender Befehl ausgeführt werden:

```
npm i leaflet.color-arrow
```

## Benutzung

Dieses Paket kommt mit einer `style.css` welche das CSS zur Darstellung des Pfeils beinhaltet. Diese bietet ebenfalls eine Variable 
mit welcher die Größe des Pfeils eingestellt werden kann.

Auf Seiten des JavaScripts muss das Paket lediglich nach Leaflet importiert werden. Das Paket wird den von Leaflet bereitgestellten `L.Marker` als `L.Marker.ColorArrow` erweitern und um folgende Methoden bereichern:

- `setRGBA()` Setzt die Farbe des Pfeils in RGBA. Alpha entspricht 255 falls nicht definiert.
- `setHSVA()` Setzt die Farbe des Pfeils in HSVA. Alpha entspricht 1 falls nicht definiert.
- `setColor()` Setzt die Farbe des Pfeils als CSS-Farbe.

## Beispiel

Das folgende Beispiel soll die Verwendung des Paketes genauer veranschaulichen:

```js
/* Create a new marker with the CSS color 'red' */
const m = new L.Marker.ColorArrow({
  color: 'red'
});

m.setRGBA(0, 255, 0); // Set the color to green
```
