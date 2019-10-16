# 传单颜色箭头

**一个小的 Leaflet 插件，可以创建可着色的箭头标记**

# 目录

- [安装](#安装)
- [用法](#用法)
- [例子](#例子)

## 安装

为了通过 NPM 安装软件包的最新兼容版本，请运行以下命令:

```
npm i leaflet.color-arrow
```

## 用法

该软件包带有一个 style.scss 文件，该文件定义了显示箭头所需的 CSS。 Sass 文件还包括一个变量，用于定义箭头的大小。确保将此文件包含在 CSS 版本中。

在 JavaScript 方面，您可以在导入 Leaflet 之后简单地导入包。该软件包将扩展默认的`L.Marker`并以`L.Marker.ColorArrow`的形式提供，并在原始 Marker 上提供以下其他方法：

- `setRGBA（）`设置 RGBA 中箭头的颜色。如果省略，则 Alpha 将默认为 255。
- `setHSVA（）`设置 HSVA 中箭头的颜色。如果省略，则 Alpha 将默认为 1。
- `setColor（）`将箭头的颜色设置为 CSS 颜色字符串。

## 例子

以下例子将向您展示如何使用该软件包:

```js
/* Create a new marker with the CSS color 'red' */
const m = new L.Marker.ColorArrow({
  color: "red"
});

m.setRGBA(0, 255, 0); // Set the color to green
```
