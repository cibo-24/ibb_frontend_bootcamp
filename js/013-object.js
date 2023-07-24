// obje
let objectTutorials = () => {
  const personObj = {
    name: "Kenan",
    surname: "Cibooglu",
    number: 24,
    isLogin: true,
    software1: ["HTML5", "CSS3", "JS"],
    fullName: function () {
      // obje içerisine func yazarak geri dönüşü (return) name ve surname yaptık
      return this.name + this.surname;
    },
  };

  // variable
  console.log(personObj);
  console.log(personObj.name);
  console.log(personObj.surname);

  //variable nested
  console.log(personObj["name"]);
  console.log([personObj["surname"]]);
  // Array
  console.log(personObj.software[0]);

  // stringe çevirme işlemi
  const objectToString = JSON.stringify(personObj);
  console.log(objectToString);

  // string objecte çevirme parse ile
  const stringToObject = JSON.parse(objectToString);
  console.log(stringToObject.name);

  // Object Variable  Objecte veri ekleme
  personObj.language = "english";
  console.log(personObj.language);

  // function callback
  console.log(personObj.fullName());
  objectTutorials();
};

// Object Constructor
let objectConstructor = () => {
  let personConstructor = function (name, surname) {
    this.name = name; // = den sonra ki name function içerisinde ki parametredir.
    this.surname = surname;
    console.log(this);
  };
  let personResult = new personConstructor("Kenan", "Cibooglu");
  console.log(personResult.name);
};
objectConstructor();

// parametresiz
let noParameterCallApplyBind = () => {
  // function
  let functionOtherObject = () => {
    document.writeln(`Parametresiz Function: ${this.adi}<br/>`);
  };

  // Object
  let objectData = {
    adi: "Spora Gidiyorum",
  };

  functionOtherObject.call(objectData);
  functionOtherObject.apply(objectData);
  let deneme = functionOtherObject.bind(objectData);
  deneme();
};
noParameterCallApplyBind();

// Parametreli
let parameterCallApplyBind=()=>{
  
    // function
    let functionOtherObject = (surname)=>{
        document.writeln(`Parametreli Function: ${this.adi}=> ${surname}<br/>`) // this.adi >> objectData'daki 'adi''dan geliyor.

    }

    // Object
    let objectData= {
        'adi':'Spora Gidiyorum'
    };

     functionOtherObject.call(objectData,'Cibooglu'); // call apply arasında ki fark: apply içerisine yazılan dizi içerisinde yazılacaktır.
     functionOtherObject.apply(objectData, ['Cibooglu']); 
     let deneme = functionOtherObject.bind(objectData,'Ozan Cibooglu');
     deneme();


}
 parameterCallApplyBind();
