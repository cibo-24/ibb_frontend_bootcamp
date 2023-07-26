// JS DOM

let newDataDate=() => {
    // Override : Ezmek
    //alert("dom")
    let now = document.getElementById("text_data");
    now.innerHTML =`${new Date().getFullYear()}` 



}

// ÖDEV
// paragraf_id2 adında bir paragraf olsun bu paragrafa kullanıcı mouse ile 
// tıkladığında, aşağıda <span id="special_id"></span> içine tıklandı ve paragraf üstüne gelindi yazsın.

let domData2=()=>{
    //alert('calisti');
    // Text yazdırma
    // class seçme : let domUserData2 = document.getElementsByClassName(dom_id)[0].innerText = "ID";
    let domUserData = document.getElementById("dom_id").innerText = "JS,React Öğreniyoruz";
    
}



// CSS yapısında DOM kullanımı

let domDataCSS = () => {
   let text = document.getElementById("text_data2")
   text.innerHTML = "Author: Kenan Cibooğlu";
    
    // CSS
    text.style.color = 'orange';
    text.style.backgroundColor = "blue";
    text.style.padding = "0.1rem";
    text.style.margin = "0.5rem";


    // QUERY SELECTOR  >> id # class .
    let text2 = document.querySelector(".textInfo")
    text2.innerHTML = "JavaScript == React";
    text2.style.color = "purple";
    text2.style.backgroundColor = "yellow";
    
}


// Butona tıkladığımızda soru sorsun
// Farklı bir sayfaya gitmek ister misiniz ?
// evet ise redirect
// değilse alert versin

let outSite = () => {
   //  alert('deneme');
   let userInformation = 
   window.confirm("Farklı bir sayfaya gitmek ister misiniz ?")
   ? window.location = "http://www.ecodation.com"
   : window.alert("Bu sayfada kaldınız.")
}
