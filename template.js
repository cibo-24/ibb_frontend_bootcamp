// Dark Mode

let darkModu = () => {
    alert('DARK MODU');
    window.document.classList.toggle("dark_mode")
}

// Footer
let newDate=()=>{
// JS DOM
document.getElementById("date_id").innerHTML=new Date().getFullYear();

// Jquery DOM
// const date =new Date().getFullYear();
 // $("#date_id").html(date);
}
newDate();

// input search
// Jquery
$(document).read(function(){
    const searchApi=["Adana","Istanbul","Balikesir","Corum","Edirne","Erzincan","Tunceli"];
    $('#tags').autocomplete({
        source:searchApi
    })
}); // end
