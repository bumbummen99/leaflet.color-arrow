# Panah Warna Leaflet

**Sebuah plug-in (kode Software) Leaflet Kecil untuk membuat penanda panah yang bisa di warnai!**

# Daftar Isi
- [Instalasi/ Pemasangan](#instalasi)
- [Pemakaian](#pemakaian)
- [Contoh](#contoh)

## Instalasi/ Pemasangan

Untuk memasang versi paket terbaru yang sesuai melalui NPM, jalankan perintah berikut:

```
npm i leaflet.color-arrow
```

## Pemakaian

Paket ini dilengkapi dengan sebuah file style.scss yang mendifinisikan CSS yang di butuhkan untuk menampilkan panah. File Sass juga termasuk sebuah variabel untuk menentukan ukuran panah. Pastikan untuk memasukan file ini ke dalam CSS anda.

Pada sisi javascript anda cukup meng-impor paket-nya setelah meng-impor Leaflet. Paket ini akan memperluas `L.Marker` standar dan tersedia sebagai `L.Marker.ColorArrow` dan menyediakan metode tambahan berikut pada Marker asli:

- `setRGBA()` Mengatur warna panah dalam RGBA. Alpha akan menjadi default ke 255 jika dihilangkan.
- `setHSVA()` Mengatur warna panah dalam HSVA. Alpha akan menjadi default ke 1 jika dihilangkan.
- `setColor()` Mengatur warna panah sebagai string warna CSS.

## Contoh

Contoh berikut ini akan menunjukkan kepada anda bagaimana caranya menggunakan paket:


```js
/* Buat penanda baru dengan warna CSS 'merah' */
const m = new L.Marker.ColorArrow({
  color: 'red'
});

m.setRGBA(0, 255, 0); // Atur warna-nya menjadi hijau
```
