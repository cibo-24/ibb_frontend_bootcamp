// break: döngünün çalışmasına izin verme
// return: metotun çalışmasına izin verme
// continue: sadece bir seferlik o şartta çalışma

// SORU 1<=userData<=50
// 1 ile Kullanıcı tarafından alınan bitiş sayısına kadar toplama yapan Algoritma örneği
// Örnek: 1<=user 1+2+3+...userdatası
// Eğer Bu sayılardan 7 sayıyı varsa bunu toplayama dahil etmesin (continue)
// Bu sayının en fazla 50'e kadar toplama yapabilir (break)
// bu sayılardan çift olanların kaç tane, sayıların kendisi ve toplamları nedir ?
// bu sayılardan tek olanların kaç tane, sayıların kendisi ve toplamları nedir ?
// secret-Key kullanıcı eğer 44 girerse hiç bir işlem yapmadan sistemden çıkış sağlansın onunda haricinde sürekli işlem yapsın
// Dikkat: Bu algoritmayı Arrow Function ile yapalım.
// (Clean code kuralları çercevesinde ) algoritma yapan JS program?


let sumExamplesData = () => {
    let commonSum = 0;
    let oddSum = 0,
      oddCounter = 0,
      oddNumber = "";
    let evenSum = 0,
      evenCounter = 0,
      evenNumber = "";
    // user data
    let user = Number(prompt("Lütfen Bitiş sayısını yazınız"));
  
    for (let i = 1; i <= user; i++) {
      if (user === 44) {
        console.log("secret key number failed  " + user);
        break;
      }
  
      if (i === 50) {
        console.log("en fazla 50 sayısına kadar hesaplanır " + user);
        break;
      }
  
      if (i === 7) {
        console.log("7 sayısını toplama !!! " + user);
        continue;
      }
      if (i % 2 == 0) {
        //evenSum = evenSum+i;
        evenSum += i;
        evenCounter++;
        evenNumber = evenNumber + " " + i;
      } else {
        oddSum += i;
        oddCounter++;
        oddNumber = oddNumber + " " + i;
      }
      commonSum += i;
    } // end for
    console.log("Toplam: " + commonSum);
  
    console.log("Tek sayılar: " + oddNumber);
    console.log("Tek sayı adedi: " + oddCounter);
    console.log("Tek sayı toplam: " + oddSum);
  
    console.log("Çift sayılar: " + evenNumber);
    console.log("Çift sayı adedi: " + evenCounter);
    console.log("Çift sayı toplam: " + evenSum);
  }; // end sumExamplesData
  sumExamplesData()