// JS localStorage
// veriler bizim için önemlidir.
// Verileri saklarız. Database, Browser

let localStorageData = () => {

    // setItem >> veri göndermek
   const adi = localStorage.setItem("name","Kenan");
   const soyadi = localStorage.setItem("surname","Cibooglu");
   console.log(localStorage);

   // getItem >> veri çekmek
   const getAdi = localStorage.getItem("name");
   // alert(getAdi);

   // removeItem
   localStorage.removeItem("name"); // veriyi silme işlemi

   // clear
   localStorage.clear();
}
localStorageData();