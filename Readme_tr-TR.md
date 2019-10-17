# Leaflet Color Arrow

**Renklendirilebilir işaretleyiciler oluşturmak için küçük bir Leaflet eklentisi!**

# İçindekiler
- [Yükleme](#installation)
- [Kullanım](#usage)
- [Örnek](#example)

## Yükleme

Paketin en son sürümünü NPM üzerinden kurmak için aşağıdaki komutu çalıştırın:

```
npm i leaflet.color-arrow
```

## Kullanım

Bu paket, işaretleyici görüntülemek için gerekli olan CSS'i kullanan bir style.scss dosyası ile birlikte gelir. Sass dosyası ise, bu işaretleyicinin boyutunu tanımlayan bir değişken içerir. Bu dosyayı CSS yapınıza eklediğinizden emin olun.

JavaScript tarafında, Leaflet'i projenize dahil ettikten sonra paketi basitçe içe aktarabilirsiniz. Paket, varsayılan `L.Marker`ı genişletecek ve `L.Marker.ColorArrow` olarak sunarak, orijinal Marker modülüne ek aşağıdaki yöntemleri sağlayacaktır:

- `setRGBA()` RGBA'da işaretleyicinin rengini ayarlar. 255 varsayılan değerdir.
- `setHSVA()` HSVA'da işaretleyicinin rengini ayarlar. 1 varsayılan değerdir.
- `setColor()` İşaretleyici rengini CSS rengi olarak ayarlar.

## Örnek

Aşağıdaki örnek size paketi nasıl kullanacağınızı gösterecektir:


```js
/* Kırmızı renkte yeni bir işaretleyici oluşturun */
const m = new L.Marker.ColorArrow({
  color: 'red'
});

m.setRGBA(0, 255, 0); // İşaretleyici rengini yeşil yap
```
