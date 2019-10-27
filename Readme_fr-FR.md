# Flèche de couleur Leaflet

** Un petit plug-in Leaflet pour créer des marqueurs flèche pouvant être colorisés! **

# Table des matières
- [Installation] (# installation)
- [Usage] (# usage)
- [Exemple] (# exemple)

## Installation

Pour installer la dernière version compatible du paquet via NPM, exécutez la commande suivante:

`` `
npm i leaflet.color-arrow
`` `

## Utilisation

Ce paquet est fourni avec un fichier style.scss qui définit le CSS requis pour afficher la flèche. Le fichier Sass comprend également une variable permettant de définir la taille de la flèche. Assurez-vous d'inclure ce fichier dans votre CSS build.

Du côté de JavaScript, vous pouvez simplement importer le package après avoir importé Leaflet. Le paquet étendra la valeur par défaut `L.Marker` et sera disponible en tant que` L.Marker.ColorArrow` et fournira les méthodes supplémentaires suivantes par rapport au marqueur d'origine:

- `setRGBA ()` Définit la couleur de la flèche dans RGBA. Alpha passera à 255 si omis.
- `setHSVA ()` Définit la couleur de la flèche dans HSVA. Alpha passera à 1 si omis.
- `setColor ()` Définit la couleur de la flèche en tant que chaîne de couleur CSS.

## Exemple

L'exemple suivant va vous montrer comment utiliser le paquet:


`` `js
/ * Crée un nouveau marqueur avec la couleur CSS 'red' * /
const m = new L.Marker.ColorArrow ({
  color: 'red'
});

m.setRGBA (0, 255, 0); // Met la couleur en vert
`` `
