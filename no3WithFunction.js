//perulangan menampilkan angka genap sebesar angka inputan dengan function

function cekAngka(Angka){
    if (Angka % 2 === 0){
        for (let ulang = 0; ulang <= Angka; ulang++){
          console.log(ulang);
          ulang = ulang + 1;
        }
      } else {
        console.log("Ini bukan bilangan genap atau bukan angka!");
      }
}

let angka = prompt("Masukkan angka genap:");
cekAngka(angka);