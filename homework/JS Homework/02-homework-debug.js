// 1 ile 10 dahil olmak üzere toplama işlemi yapan JS algoritmasını yazınız

const toplama = () => {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
      sum = sum + i;
    }
    console.log("Toplam: " + sum);
  };
  toplama()