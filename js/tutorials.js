// single Commet
/* 
multiple Commet
*/

/*
console.log('loglama');
console.warn('warn'); // dikkat işareti çıkarır
console.error('error'); // error hatası yazdırır
console.info('info'); // bilgi yazdırır

// #####################################################

alert('pop-up bilgilendirme-1'); // sayfada açılır pop-up açar
window.alert('pop-up bilgilendirme-2'); // window nesnesi her şeyin tepesinde olan bir nesnedir.

// #####################################################

document.writeln('Sayın Kullanıcı:'); // document kök öğesine ulaşıp .writeln propertysi ile ekrana yazı yazdırdık.
window.document.writeln("Eğitimimize Hoşgeldiniz!")

*/

// Variable

var result = 14.53;
var result2 = "JS Öğreniyorum";
console.log(result2);

var result3 = 4423;
console.log(result3);

var result4 = true;
console.log(typeof result4+ "->" + result); // typeof ile değişkenin tipini arattık.

// Naming Convensition
var $deneme44 ='JS Data';
console.log($deneme44);

var denemeVerisi ='JS Data';
console.log(denemeVerisi); // camel Case >> düzenli bir isim vermektir.

// whoistingf Data >> Diğer dillerde ilk önce veri tipi ve değişken adını yazarız.
// JS'de aşağıdaki gibide yapabiliriz.
result22 = 56;
var result22;

// Operators
// + - * ** / %
// !   >> DEĞİL (zıtlık anlamı)
// && = ve
// || = veya
// x++ >> 1 arttır
// x-- 
// ++x >> önce 1 arttır sonra işleme devam et.
// --x

//  =  >> atama
// ==  >> eşit (türüne bakma)
// === >> eşit (türüne bak)

var number1 = 40;
var number2 = 5;
console.log(number1+number2);
console.log(number1-number2);
console.log(number1*number2);
console.log(number1/number2);
console.log(number1%number2);

// cast
// Number
// String()

// var userData = Number(prompt('Lütfen Sayı Giriniz:')); // String tipi numbera çevirdik (Number)
// console.log(userData + 45 ); // string olduğu için toplama yapmaz.  

// undefined
var result44;
console.log(result44); // bir değer vermediğimizde
// NaN
var result551 = "result"/4;
console.log(result551);  // farklı bir tip girildiğinde.
// isNa
var result661 = 4;
console.log(isNaN(result661)); // false ise : sayıdır // isNaN'ı sayımı değilmi diye kullanırız.
// Infinity
console.log(4/0); // bir sayiyi sıfıra bölersek bu sonsuzluktur. Infinity yazar.

// Math
console.log(Math.PI); // Pi sayısını verir.
console.log(Math.E);
console.log(Math.min(4,1,99,55)); // en küçüğü bulmak için kullanılır.
console.log(Math.max(44,21,55,88,999));
console.log(Math.sqrt(16)); // Kare Kök bulur
console.log(Math.abs(-25)); // Tam sayı için kullanılır.
console.log(Math.pow(2,5)); // üst alır
console.log(Math.floor(3.9)); // sayıyı aşağı yuvarlar
console.log(Math.ceil(3.1)); // sayıyı yukarı yuvarlar
console.log(Math.round(6.4)); // aşağı yukarı yuvarlar
console.log(Math.round(6.5));
console.log(Math.sin(45)); // tanjan kotanjan
console.log(Math.random()*9+1); // random sayılar üretir.
console.log(Math.round(Math.random()*9+1));

