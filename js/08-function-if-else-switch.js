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
(function(){
    console.log("deneme4");
})();

///////////////////////////////////////////////////
// condition
const condi = () => {
    let number = 4;
    if (number >= 2) {
        console.log("Büyüktür");
    } else {
        console.log("Küçüktür");
    }
}

const condi2 = () => {
    let numbers = 4;
    if (numbers <= 10 && numbers >=20){
        console.log('Sayi 10 ile 20 arasındadır.')
    }else {
        console.log('Sayi 10 ile 20 arasında değildir.')
    }
}

const condi3 = () => {
    let numbers2 = 5;
    let result = (numbers2 <= 5) ? 'Küçüktür' : 'Büyüktür';
    return result;
}


let condi4 = ()=>{
    let numberOne = 10;
    let result = (numberOne > 25) ? 'Büyüktür' : 'Küçüktür';
    return result;
}

const condi5 = () => {
    let number = 4;
    if (number == "1") {
      console.log("1");
    } else if (number == 2) {
      console.log("2");
    } else if (number == 3) {
      console.log("3");
    } else if (number === 4) {
      console.log("4");
    } else {
      console.log("1<=X<=5 dışındadır");
    }
  };
  //condi5();

  const condi6 = () => {
    let number = 4;
    // break   : döngü kırmak
    // return  : metot kırmak
    // continue: 1 kereye mahsus es geç sonra döngüye devam et.
    switch (number) {
      case 1:
        console.log("1");
        break; // döngü kırmak
      case 2:
        console.log("2");
        break;
      case 3:
        console.log("3");
        break;
      case 4:
        console.log("4");
        break;
      default:
        console.log("1<=X<=5 dışındadır");
        break;
    }
  };
  condi6();

  //////////////////////////////////////////

  let isOddEven = () => {
    const result = 4;
    if (result % 2 == 0) console.log("çifttir");
    else console.log("tektir");
  };
  isOddEven()