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


// Number
var sayi = 15000;
console.log(sayi);

var sayi2 = 1.5E+4; // Bilimsel gösterimi
console.log(sayi2);

// binary,octal,decimal,hexadecimal nedir ?

var binary = 0b00011;           // 0 ve 1 lerden oluşan sayılardır.
console.log(binary);

// octal :  0-1-2-3-4-5-6-7 
var octal = 0o7612; 
console.log(octal);

// decimal : 
var decimal = 123456;
console.log(decimal);

// hexadecimal : 0-1-2-3-4-5-6-7-8-9-A-B-C-D-F
var hexadecimal = 0xffa;
console.log(hexadecimal); // herhangi bir sayiyi onluk tabana çevirir.


// Cast : Bir sayiyi stringe, bir stringi sayiya 
// database, port, api işlemleri string olarak gelir.
// Number() ile parseInt() arasında ki fark nedir ?
// String() data.toString arasında ki fark nedir ?

console.log(Number('10')+10); // burada numbera çevirdik.
console.log(parseInt("10")+10);

console.log(String(30)+10); // stringe çevirdik.

var number = 10;
console.log(number.toString() + 10 ); // fonksiyon kullanırken parantez kullanmalıyız. toString()

// var, let, const
var data1 = 11;
console.log(data1);

var data1 = 22;
console.log(data1);


let data2= 33;
console.log(data2);

// let data2= 33; >> aynı değişken ismi veremeyiz. let ile var arasında ki fark budur.
// console.log(data2);

let data3 = 33;
data3 = 44; // sonradan datayı değiştirebiliriz
console.log(data3);

const data4= 55;
// data4= 66; >> const veri tipini sonradan değiştiremeyiz. let ile const arasındaki fark budur.
console.log(data4);

// string

let str = "js OGreniyorum js"; // boşluklarda bir karakterdir.
console.log(str);
console.log(str.length); // kaç harf olduğunu gösterir.
console.log(str.trim()); // başında ki ve sonundaki boşlukları alır.
console.log(str.trim().length);
console.log(str.toLowerCase()); // hepsini küçük karakter yapar
console.log(str.toUpperCase());
console.log(str.charAt(0)); // 
console.log(str.indexOf('js')); // baştan veriyi arar.
console.log(str.lastIndexOf('js')); // sondan arayarak bulmaya yarar.
console.log(str.concat('sona')); // en sona veri ekler.
console.log(str.replace(str,'degistir')); // veriyi değiştirir.
console.log(str.substring(1)); // 1. indexten sonra parçalama işlemi
console.log(str.substring(0,4)); // aralık olarak parçalama işlemi

//////////////////////////////////////////////////////////////////////
// Function


/*
tekrar yapmak istemiyorsak
kod fazlalağından kurtulmak istiyorsak
zamandan tasarruf sağlar
*/


// Function(Normal)

// parametresiz ve returnsuz function
function deneme1 (){
    console.log("deneme");
}
deneme1();  

// Parametreli function
function deneme2 (adi){ // Parametre
    console.log('deneme' + adi);
}
deneme2('Kenan'); // argüman : 'Kenan'

// Returnlu function
function deneme3 (){
    return 'deneme';
}
let result12121 = deneme3();
console.log(result12121);

// returnlu ve parametreli function
function deneme4(soyadi){
    return 'deneme66';
}

let result01 = deneme4("Cibooglu");
console.log(result01);


/////////////////////////////////////////////////
// Anonymous (Function)
// bunların nedeni kısaltmak içindir.

let anonymous = function(){ // >> anonymous function

}

// Arrow (Function) İş Dünyasında arrow kullanılır

let arrow = () => { // >> arrow function

}

// Immedia Function ()();
// condition
// loop
// Örnekler
