function groupAnimals(animals) {
    
    animals.sort(function (a, b){
        if (a < b) {
            return -1;
        }
        if (b < a) {
            return 1;
        }
    })
        
    var result = []
    var tampung = []
    for(var i = 0; i < animals.length; i++){

        if(tampung.length == 0){
            tampung.push(animals[i])
        } else if(animals[i-1][0] == animals[i][0]){
            tampung.push(animals[i])
        } else if(animals[i-1][0] != animals[i][0]){
            result.push(tampung)
            tampung = []
            tampung.push(animals[i])
        } 
    }
    result.push(tampung)

    return result
}
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing']cle, ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak', 'zebra' ]));
//   [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]