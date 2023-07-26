let userJqueryKey = () => {
  // Jquery hazirlanmasi
  $(document).ready(function () {
    $(document).keydown(function (userButton) {  // userButton bir değişkendir. Bu değişken func içine ayarlandığı için bir parametredir. İstediğimizi verebiliriz.
      // bir tuşa bastığımızda işlem yap.
      // toptal.com/developers/keycode
      console.log(userButton);
      console.log(userButton.keyCode);
      // keyCode(13) => ENTER
      // Browser sen bir şey yapma, yaparsam ben yaparım.

      // Entera basıldığında
      // if(userButton.ctrlKey) {} // Ctrl basılarak mı tıklanmış
      userButton.preventDefault();
      if (userButton.keyCode == 13) {
        alert("ENTER Bastınız");
      }
    }); // end keydown
  }); // end document ready
}; // end userJqueryKey
userJqueryKey();




