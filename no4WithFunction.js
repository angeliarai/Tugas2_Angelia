//cetak angka ganjil sebesar angka inputan dengan function

function cekAngka(Angka){
    if (Angka % 2 === 1){
        for (let ulang = 1; ulang <= Angka; ulang++){
          console.log(ulang);
          ulang = ulang + 1;
        }
      } else {
        console.log ("Ini bukan bilangan ganjil atau bukan angka!");
      }
}
let angka = prompt("Masukkan angka ganjil: ");
cekAngka(angka);
