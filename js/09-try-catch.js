// try catch (Error Handling)
let tryCatchTuto = () => {
    try {
      alertx("pop-pup");
    } catch (error) {
      console.log("hata mesajı: Kenan " + error.message);
      console.log("hata mesajı: Cibo " + error.name);
      console.error(error);
    } finally {
      console.log("db.close");
      console.log("port.close");
    }
    console.log("son satır");
  };
  tryCatchTuto()