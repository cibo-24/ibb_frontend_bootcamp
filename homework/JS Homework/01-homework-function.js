// ÖDEV:
// Kullanıcı tarafından girilen bir sayının negatif mi, pozitif mi ? bunu yazan JS code yazınız.
// (Dikkat: normal  function ile yazınız)



function checkNumber(number) {
  if (number < 0) {
    return "Bu sayı negatif.";
  } else if (number > 0) {
    return "Bu sayı pozitif.";
  } else {
    return "Bu sayı sıfır.";
  }
}

 console.log(checkNumber(-5)); // Bu sayı negatif. 
 console.log(checkNumber(0)); // Bu sayı sıfır. 
 console.log(checkNumber(7)); // Bu sayı pozitif.

 // Kullanıcı tarafından girilen bir sayının tek mi, çift mi olduğunu yazan JS code yazınız.
// (Dikkat:anonymous function ve ternary ile yazınız)

const sayiKontrolü = num => {
    return num % 2 === 0 ? "Çift sayı" : "Tek sayı";
};

const userInput = prompt("Bir sayı girin:");
console.log(sayiKontrolü(userInput));

// Kullanıcıdan alınan sayıya göre Haftanın günlerini switch-case ile JS code yazınız?
// Örneğin: kullanıcı 1 girdi: 1=pazartesi yazacak

let gun = prompt("Lütfen bir sayı girin (1-7 arası):");

switch (gun) {
  case "1":
    console.log("Pazartesi");
    break;
  case "2":
    console.log("Salı");
    break;
  case "3":
    console.log("Çarşamba");
    break;
  case "4":
    console.log("Perşembe");
    break;
  case "5":
    console.log("Cuma");
    break;
  case "6":
    console.log("Cumartesi");
    break;
  case "7":
    console.log("Pazar");
    break;
  default:
    console.log("Geçersiz giriş!");
    break;
}