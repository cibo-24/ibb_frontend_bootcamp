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