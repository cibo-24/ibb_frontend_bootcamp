// V.K.I (localStroage)
// Vucüt Kitle Index (VKI)
// Kullanıcıdan alınan Kilo ve Boy verileri formda inputtan aldıktan sonra
// Formül: Kilo / ((Boy)/100)^2
// eğer bu formülde;
// 18 > x  : Düşük Kilolu
// 18 <= x<24 çıkarsa : Normal Kilolı
// 24 <= x<29 çıkarsa : Fazla Kilolu
// 29 <= x<32 çıkarsa : Obez Kilolu
// x >= 32 çıkarsa : Aşır Obez Kilolu (Doktora Gidiniz)

// VKI Butonu olsun. Bu butona bastığımızda (modal ) Form açılsın.
// input: kilo
// input: boy
//submit : button
// Not: Kilo (weight), Boy(height) ve formül  Sonucu (formalaResult) localStroage olarak saklansın.

// jquery - ajax GET/POST (Backend: Java API)
// Dockerfile
// React
// K.D.V hesapmalası: JS ve React yapılacak.
// Login Validation

// kilo : height_id
// boy : weight_id
// vki : vki_submit_id

$(document).ready(function () {
  let vkiFormule = () => {
    // Event
    $("#vki_submit_id").click(function () {
      // Kilo
      let weight, height;
      weight = jQuery.trim($("#weight_id").val()); // jquery ile input bölümünden bilgi almak. >> jQuery.trim() başında ve sonunda olan boşluk sorununu halleder.
      alert(weight);

      // Bboy
      height = jQuery.trim($("#height_id").val());
      alert(height);
      
    }); // click
  }; // end vkiFormule
  vkiFormule();
}); // end document ready >> her zaman yazılması gerekir.
