//perulangan menampilkan angka genap sebesar angka inputan

let angkaGenap = prompt("Masukkan angka genap:");
let ulang;

if (angkaGenap % 2 === 0){
  for (ulang = 0; ulang <= angkaGenap; ulang++){
    console.log(ulang);
    ulang = ulang + 1;
  }
} else {
  console.log("Ini bukan bilangan genap atau bukan angka!");
}


