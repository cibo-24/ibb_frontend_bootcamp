// JS addEventListener

// Ödev
// Kullanıcı bir paragrafa kaç kere tıkladı ?





let userListener = () => {
    let listenerParag = document.getElementById("parag_list");
    listenerParag.addEventListener("click",function(e){
       //alert(e.preventDefault + "" + e.target)
        document.getElementById("log_admin").innerHTML = "Okundu";
       // jquery yapısı : $("#log_admin").html("okundu");

    });
}
userListener();