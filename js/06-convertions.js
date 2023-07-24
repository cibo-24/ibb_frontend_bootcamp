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