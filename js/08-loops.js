// loop - Döngüler
let loop = () => {
    for (let i = 1; i <= 10; i++) {
      document.write(i + " ");
    }
  };
  loop();
  document.writeln("<br/>")

  let loop2 = () => {  // loop2 func >> i = 1'den başlasın. döngü içerisinde = 10'a eşit veya küçük olduğu sürece. i++ ile arttır diyoruz.
    let i = 1;
    while (i <= 10) {
      document.write(i + " ");
      i++;
    }
  };
  loop2();
  
  document.writeln("<br/>")

  let loop3 = () => {
    let i = 1;
    do {
      document.write(i + " ");
      i++;
    } while (i <= 10);
  };
  loop3();