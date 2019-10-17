# Leaflet Color Arrow

**Um pequeno plugin para Leaflet para criar marcações que podem ser coloridas!**

# Tabela de Conteúdo
- [Instalação](#instala%C3%A7%C3%A3o)
- [Uso](#uso)
- [Exemplo](#exemplo)

## Instalação

Para instalar a última versão estável do pacote via NPM execute o seguinte comando:

```
npm i leaflet.color-arrow
```

## Uso

Este pacote vem com um arquivo style.scss que define o CSS que é preciso para exibir a seta. O arquivo Sass também inclui uma variável que define o tamanho da seta. Certifique-se de incluir o arquivo no seu build CSS.

No JavaScript você pode simplesmente importar o pacote após importar Leaflet. O pacote irá extender o `L.Marker` padrão e ficar disponível como `L.Marker.ColorArrow` e prover o seguinte método adicional sobre o marcador original:

- `setRGBA()` Define a cor da seta em RGBA. Se omitido, Alpha adotará 255 por padrão.
- `setHSVA()` Define a cor da seta em HSVA. Se omitido, Alpha adotará 1 por padrão.
- `setColor()` Define a cor da seta como uma cor em CSS.

## Exemplo

O exemplo à seguir mostra como usar o pacote:

```js
/* Cria um novo marcador com a cor 'red' */
const m = new L.Marker.ColorArrow({
  color: 'red'
});

m.setRGBA(0, 255, 0); // Define a cor para verde em RGBA
```
