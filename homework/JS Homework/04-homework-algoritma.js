//Kullanıcı tarafından alınan x ve k değerlerini hesaplayan algoritma yazınız ?

let x = parseInt(prompt("x değerini girin:"));
let k = parseInt(prompt("k değerini girin:"));

let sonuc = Math.pow(x, k);

alert("Sonuç: " + sonuc);

// Kullanıcı tarafından alınan dereceyi  Fahrenhayta çeviren algoritma yapalım.
var derece = prompt("Dereceyi girin: ");
var fahrenheit = (derece * 9/5) + 32;
console.log(derece + " derece " + fahrenheit + " Fahrenheit'a eşittir.");