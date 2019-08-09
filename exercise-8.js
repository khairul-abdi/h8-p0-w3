function pasanganTerbesar(num) {
   
    var str = String(num);
    var gabungan = []

    var strReverse = str.split('')

    for (var i = 0; i < strReverse.length; i++){
        for (var j = i+1; j < strReverse.length; j++){
            gabungan.push(strReverse[i]+strReverse[j])
            break
        }
    }

    var max = 0 ;
    for(var i=0; i<gabungan.length; i++){
        if(max <= gabungan[i]){
            max = gabungan[i]
            
        }
    }


return max;

  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99

