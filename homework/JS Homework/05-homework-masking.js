// kullanıcıdan aldığımız isim alınsın
// kullanıcıdan aldığımız soyisim alınsın
// ilk karakter göstersin sonraki kelimeleri masking (maskeleme yapsın)
// eğer kullanıcı isim ve soyisimi ilk karakteri küçük girmişse büyük olsun mutlaka
// Hamit Mızrak
// H**** MIZ***
// ipucu: charAt, substring, indexOf, döngü, karar mekanizma


var isim = prompt("Please enter your name");
var soyisim = prompt("Please enter your surname");
name1 = isim.charAt(0).toUpperCase() + isim.substring(1);
surname = soyisim.charAt(0).toUpperCase() + soyisim.substring(1);

function masking(str) {
    var maskedStr = str.charAt(0);
    for (var i = 1; i < str.length; i++) {
      if (str.charAt(i - 1) === ' ') {
        maskedStr += str.charAt(i);
      } else {
        maskedStr += '*';
      }
    }
    return maskedStr;
  }

var maskedName = masking(isim);
var maskedSurname = masking(soyisim);

console.log(maskedName); 
console.log(maskedSurname); 