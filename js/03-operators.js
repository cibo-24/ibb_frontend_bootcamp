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

 var userData = Number(prompt('Lütfen Sayı Giriniz:')); // String tipi numbera çevirdik (Number)
 console.log(userData + 45 ); // string olduğu için toplama yapmaz.  

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
