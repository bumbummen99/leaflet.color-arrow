# Leaflet Color Arrow

**A small Leaflet plug-in to create arrow Marker's that can be colorized!**

# Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Example](#example)

## Installation

In order to install the latest compatible version of package via NPM run the following command:

```
npm i leaflet.color-arrow
```

## Usage

This package comes with a style.scss file that defines the CSS that is required to display the arrow. The Sass file also includes a variable to define the size of the arrow. Make sure to include this file in your CSS build.

On the JavaScript side you can simply import the package after importing Leaflet. The package will extend the default `L.Marker` and be available as `L.Marker.ColorArrow` and provide the following additional methods over the original Marker:

- `setRGBA()` Sets the color of the arrow in RGBA. Alpha will default to 255 if ommited.
- `setHSVA()` Sets the color of the arrow in HSVA. Alpha will default to 1 if ommited.
- `setColor()` Sets the color of the arrow as a CSS color string.

## Example

The following example will show you how to use the package:


```js
/* Create a new marker with the CSS color 'red' */
const m = new L.Marker.ColorArrow({
  color: 'red'
});

m.setRGBA(0, 255, 0); // Set the color to green
```
