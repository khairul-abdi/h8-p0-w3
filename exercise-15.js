function groupAnimals(animals) {
    
    var hasilAkhir = []

    var tampungA = []
    var tampungC = []
    var tampungK = []
    var tampungU = []
     

    for(var i = 0; i < animals.length; i++){
        if(animals[i][0] == 'a'){
            tampungA.push(animals[i])
        }else if(animals[i][0] == 'c'){
            tampungC.push(animals[i])
        }else if(animals[i][0] == 'k'){
            tampungK.push(animals[i])
        }else if(animals[i][0] == 'u'){
            tampungU.push(animals[i])
        }
    }
    
    hasilAkhir.push(tampungA)
    hasilAkhir.push(tampungC)
    hasilAkhir.push(tampungK)
    hasilAkhir.push(tampungU)
    // console.log(hasilAkhir)
    return hasilAkhir

  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]


// Cara kedua tapi banyak kosong hurufnya karna a-z 


function groupAnimals(animals) {
    
    var tampung = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
    for(var i = 0; i < animals.length; i++){
        if(animals[i][0] == 'a'){
            tampung[0].push(animals[i])
        }else if(animals[i][0] == 'b'){
            tampung[1].push(animals[i])
        }else if(animals[i][0] == 'c'){
            tampung[2].push(animals[i])
        }else if(animals[i][0] == 'd'){
            tampung[3].push(animals[i])
        }else if(animals[i][0] == 'e'){
            tampung[4].push(animals[i])
        }else if(animals[i][0] == 'f'){
            tampung[5].push(animals[i])
        }else if(animals[i][0] == 'g'){
            tampung[6].push(animals[i])
        }else if(animals[i][0] == 'h'){
            tampung[7].push(animals[i])
        }else if(animals[i][0] == 'i'){
            tampung[8].push(animals[i])
        }else if(animals[i][0] == 'j'){
            tampung[9].push(animals[i])
        }else if(animals[i][0] == 'k'){
            tampung[10].push(animals[i])
        }else if(animals[i][0] == 'l'){
            tampung[11].push(animals[i])
        }else if(animals[i][0] == 'm'){
            tampung[12].push(animals[i])
        }else if(animals[i][0] == 'n'){
            tampung[13].push(animals[i])
        }else if(animals[i][0] == 'o'){
            tampung[14].push(animals[i])
        }else if(animals[i][0] == 'p'){
            tampung[15].push(animals[i])
        }else if(animals[i][0] == 'q'){
            tampung[16].push(animals[i])
        }else if(animals[i][0] == 'r'){
            tampung[17].push(animals[i])
        }else if(animals[i][0] == 's'){
            tampung[18].push(animals[i])
        }else if(animals[i][0] == 't'){
            tampung[19].push(animals[i])
        }else if(animals[i][0] == 'u'){
            tampung[20].push(animals[i])
        }else if(animals[i][0] == 'v'){
            tampung[21].push(animals[i])
        }else if(animals[i][0] == 'w'){
            tampung[22].push(animals[i])
        }else if(animals[i][0] == 'x'){
            tampung[23].push(animals[i])
        }else if(animals[i][0] == 'y'){
            tampung[24].push(animals[i])
        }else if(animals[i][0] == 'z'){
            tampung[25].push(animals[i])
        }
    }
    


    return tampung
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
    //[ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
    //[ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
