//cetak angka ganjil sebesar angka inputan

let angkaGanjil = prompt("Masukkan angka ganjil:");
let ulang;


if (angkaGanjil % 2 === 1){
  for (ulang = 1; ulang <= angkaGanjil; ulang++){
    console.log(ulang);
    ulang = ulang + 1;
  }
} else {
  console.log("Ini bukan bilangan ganjil atau bukan angka!");
}

