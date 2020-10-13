//cetak hari esok setelah diinputkan hari ini

function cekHari(inputHari){
    let hari = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];
    inputHari = hari;
    let index = 0;
    while(index < hari.length){
        if (hariIni === hari[index]){
          if(index === 6){
            console.log("Hari esok adalah hari " + hari[0]);
              
        } else {
            console.log("Hari esok adalah hari " + hari[index + 1]);
       
        }
      }
        index++;
    }

}

let hariIni = prompt("Hari ini adalah hari?");
cekHari(hariIni);