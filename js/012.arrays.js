// dizi, Iterative for,for in, for of, forEach, map, filter, fill
// diziler : elimizde ki verileri düzenli bir şekilde kullanmaya yarar.

// ### Güzel bir Örnek ###
let arr = () => {
  // bu fonksiyonun görevi aşağıda ki diziyi döndürmektir.
  const numbers = [2, 5, 6, "str", true];
  console.log(numbers);
  return numbers;
};
arr();

let arrResult = () => {
  let dataa = arr(); // dataa artık arr dizisine eşit oldu. dataa artık bir dizidir.
  console.log(dataa);
  console.log(dataa[0]);
  console.log(dataa[5]);
  console.log(dataa[dataa.length - 1]);
  // Iterative For Lopp
  for (let i = 0; i < dataa.length; i++) {
    document.write(dataa[i] + " "); // document.write >> yazdır demek. Neyi ? = data'nın i'sini arasında boşluk bırakarak.
  }
  // for in >> for'un indexi
  for (let temp in dataa) {
    // index numarasını verir. dataa'nın in let temp
    document.write(temp + " =>" + data[temp] + "<br/>");
  }

  // for of
  for (let temp of dataa) {
    // of : elemanın kendisine erişir.
    document.write(temp + " =>" + data[temp] + "<br/>");
  }

  // ForEach
  dataa.forEach(function (value, index, array) {
    // value'si, index'i ve array bilgisini döndürür.
    // document.write(value + " " + index + "<br/>");
    document.write(`${index} => ${value} <br/> ${array}`);
  });
};
arrResult();

// filter >> filtreme yapısı ve yukarıdaki foreach'i yeniden kullandık.

let result24 = dataa
  .filter(function (value, index, array) {
    return value % 2 === 0;
  })
  .forEach(function (value, index, array) {
    // value'si, index'i ve array bilgisini döndürür.
    // document.write(value + " " + index + "<br/>");
    document.write(`${index} => ${value} <br/> ${array}`);
  });
document.write(result24);

//  map Kullanımı
// her bir yapıya teker teker erişim sağlar.

data.map(function (value, index, array) {
  return (value += 10); // her bir değişkeni 10 ile toplayalım
});

// dizilere devam

document.writeln("Eleman Sayisi" + dataa.length);
dataa.push(99); // dataa'ya 99 ekler. Sonuna ekler
dataa.unshift(24); // dizinin başına bir şey eklersek

dataa.pop(); // sondan bir eleman çıkarır.
dataa.shift(); // baştan 1 eleman çıkarır.
console.log(dataa);

dataa.sort(); // büyükten kücüge dogru sıralar
console.log(dataa);

dataa.reverse(); // tepe takla yapar ve diziyi karıştırır.
console.log(dataa);

console.log(dataa.toString().substring(0, 2)); // dizinin içerisindekileri String veri tipine çevirir.

// ######################################################### //

// callback promise örneği
let callbackFunctionComputer = () => {
    // dizi objesi içerisinde 5 tane random obje oluşturalım.
    const computerArray = [
      { computerName: "callbakc computer1 ", price: 100 },
      { compuerName: "callback computer 2", price: 200 },
      { compuerName: "callback computer 3", price: 300 },
    ];
  };
  // callbackFunctionComputer();
  
  // Dizi içerisine rastgele random obje oluşturduk.
  let callbackFunctionRamdom = () => {
    const randomObj = {
      name: "LasVegas",
      cityNumber: Math.random() * 100,
    };
    return randomObj;
  };
  
  const myArrayy = [];
  
  for (let i = 0; i < 5; i++) {
    const randomObject = getRandomObject();
    myArrayy.push(randomObject);
  }
  console.log(myArrayy);


  // Random object 2
  const computerArray = [];
  for (let index = 0; index < 5; index++) {
    let computerObject = {
      computeName: `computer ${index + 1}`,
      price: `${index + 1}` * `${Number(100)}`,
    };
    computerArray.push(computerObject);
  }
  console.log(computerArray);
  // bu dizi içerisinde ki computer name bileşenleri map ile  gösterilecek.
  const arrayInComputerName = () => {
    computerArray.map((temp) => {
      console.log(`${temp.compuerName}`);
    });
  };
  arrayInComputerName();

   // call back function price
   const arrayInComputerPrice = () => {
    const arrayInComputerObject = (obj, callBackFnc) => {
      computerObject.push(obj);
      callBackFnc();
    };
    arrayInComputerObject(
      { computerName: "computer 6", price: 600 },
      arrayInComputerName
    );
  };
  callbackFunctionComputer();

  // promise function price
  const arrayInComputerObject = (obj) => {
    const promiseReturn = new Promise(() => {
      computerArray.push(obj);
    });
    return promiseReturn;
  };
  arrayInComputerObject({ computerName: "computer 6", price: 600 })
    .then(() => {})
    .catch((err) => {
      console.error(err);
    });
  
  callbackFunctionComputer();