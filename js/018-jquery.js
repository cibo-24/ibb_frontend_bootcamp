// Framework : Hızlı Kod - Az Kod, çok iş. Kalıplara girmiştir ve belli sınırlar çerçevesinde işlemler yapmamıza olanak sağlar
// Library : Yavaş Kod - Çok fazla kod yazabiliriz.

// Jquery ve React JS bir Library'dir.
// Angular ve Vue Frameworktür.


// With the element initially shown, we can hide it slowly:
// Click Here'a tıklayınca Çalışır
$( "#clickme" ).on( "click", function() {
    $( "#book" ).hide( "slow", function() {
      alert( "Animasyon Çalıştı" );
    });
  });



//  $( "p" ).hide();
$( "a" ).on( "click", function( event ) {
  event.preventDefault(); // hiçbir şey yapma
  // Hangi tag'e tıklıyorsan onu gizle
  $( this ).hide();

  // class parag2 olanı gizle
  $(".parag2").hide();

  // 
  $("#parag1")
  .html("<b> parag1 </b>")
  .css("color","orange")
  .css ("backgroundColor","red");
});




