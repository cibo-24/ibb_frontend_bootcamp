const birinci = () => {
    let user = Number(prompt("Lütfen Sayi Giriniz"));
    return user;
  };
  
  const ikinci = () => {
    let data = birinci;
    console.log(Math.sqrt(data));
  };
  ikinci(); // Yukarıdakini aşağıda ki func içerisine yazdık.
  
  // setTimeOut () , setInterval()
  // belirli zaman sonra tek bir kere çalışır ve durur.
  setTimeout(function () {
    console.log("setTimeOut çalıştır");
  }, 2000);
  
  // belli bir zaman sonra çalışır ve sonsuza kadar kapanıp tekrar çalışır.
  setInterval(function () {
    console.log("setInterval çalıştır");
  }, 3000); // 3 saniyede bir çalışır.
  
  // callbackfunction : fonksiyonu geri çağırmak
  const ücüncü = (data1) => {
    return Math.pow(2, data1);
  };
  
  const dördüncü = (callbackFunction) => {
    let user1 = Number(prompt("Lütfen Sayi Giriniz"));
    let data = callbackFunction(user1);
    console.log(data1);
  };
  // ücüncü(dördüncü);
  
  // Burası Çalışılacak.
  // promise  >> callbackFunction'ın düzeltilmiş hali
  
  const promTutorials = () => {
    // catch 1 tane olmak zorunda.
    let data2 = new Promise((resolve, reject) => {
      let status = 200;
      if (status === 200)
        // if-else'de 2 durum vardır. then ve catch ile bu durumu çoğaltıyoruz. Hata bulup ona göre işlem alıyor.
        resolve("çalıştı");
      else reject("çalışmadı");
    })
      .then(() => {
        console.log("olumlu");
      })
      .catch(
        // hatalıları yakalar.
        (err) => {
          console.log(err);
        }
      );
  };

promTutorials();