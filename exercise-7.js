// Cara Pertama

function hitungJumlahKata(kalimat) {


    var pisahKata = kalimat.split(' ')

    var hitungJumlahKata = pisahKata.length


    return hitungJumlahKata

}

  // TEST CASES
console.log(hitungJumlahKata('I Love Code')); //3
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5

console.log('-----------------------------------------')
  
// Cara Kedua
function hitungJumlahKata(kalimat) {
    var tampungSpasi = []
    var jumlahKata = 0

    for(var i=0; i < kalimat.length; i++){
  
        if(kalimat[i] == ' '){
            tampungSpasi.push(i)
            
        }
    }

    jumlahKata = tampungSpasi.length +1
    

    return jumlahKata
}

  

  // TEST CASES
  console.log(hitungJumlahKata('I Love Code')); //3
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5