//Menentukan nilai direpresentasikan dengan huruf

let nilai = prompt("Masukkan nilai");

if (90 <= nilai && nilai <= 100){
  console.log("Nilai anda adalah A");
} else if (75 <= nilai && nilai <=89){
  console.log("Nilai anda adalah B");
} else if (60 <= nilai && nilai <= 74){
  console.log("Nilai anda adalah C");
} else if (50 <= nilai && nilai <=59){
  console.log("Nilai anda adalah D");
} else {
  console.log("Anda tidak lulus");
}