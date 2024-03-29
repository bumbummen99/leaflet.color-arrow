# कैट कलर तीर
**एक छोटे से Leaflet प्लग-इन एरो मार्कर बनाने के लिए जिसे रंगीन किया जा सकता है!**

 # विषय - सूची
- [स्थापना](#स्थापना)
- [प्रयोग](#प्रयोग)
- [उदाहरण](#उदाहरण)
 ## स्थापना
एनपीएम के माध्यम से पैकेज के नवीनतम संगत संस्करण को स्थापित करने के लिए निम्नलिखित कमांड चलाएं:
```
npm i leaflet.color-arrow
```
 ## प्रयोग
यह पैकेज एक style.scss फ़ाइल के साथ आता है जो तीर को प्रदर्शित करने के लिए आवश्यक CSS को परिभाषित करता है। सैस फ़ाइल में तीर के आकार को परिभाषित करने के लिए एक चर भी शामिल है। इस फ़ाइल को अपने CSS बिल्ड में शामिल करना सुनिश्चित करें।

जावास्क्रिप्ट की ओर से आप केवल कैटलॉग आयात करने के बाद पैकेज आयात कर सकते हैं। पैकेज डिफ़ॉल्ट `L.Marker` विस्तार करेगा और `L.Marker` रूप में उपलब्ध `L.Marker.ColorArrow` और मूल मार्कर पर निम्नलिखित अतिरिक्त तरीके प्रदान करेगा:

- `setRGBA()` RGBA में तीर का रंग सेट करता है। Ommited होने पर अल्फा 255 पर डिफ़ॉल्ट हो जाएगा।
- `setHSVA()` में तीर का रंग सेट करता है। अल्फा 1 के लिए डिफ़ॉल्ट होगा यदि ommited है।
- `setColor()` सीएसएस रंग स्ट्रिंग के रूप में तीर का रंग सेट करता है।
## उदाहरण
निम्न उदाहरण आपको दिखाएगा कि पैकेज का उपयोग कैसे करें:
```js
  /* CSS color 'red' के साथ एक नया मार्कर बनाएं */
 const m = new L.Marker.ColorArrow ({
    color : 'red'
 });

 m.setRGBA( 0 , 255 , 0 );  // हरे रंग को सेट करें 
```
