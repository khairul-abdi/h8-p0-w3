function groupAnimals(animals) {

    var animals = animals.sort()
    // console.log(animals)

    // for(var i = 0; i < animals.length; i++){
    //     for(var j = i+1; j < animals.length; j++){
    //         if(animals[i] > animals[j]){
    //             var temp = animals[i]
    //             animals[i] = animals[j]
    //             animals[j] = temp
    //         }
    //         // console.log('Ini animals ke I = ', animals[i])
    //         // console.log('Ini animals ke J = ', animals[j])

    //     }
    // }

    // console.log(animals)

    var result = []
    var temp = []

    for(var i = 0; i < animals.length; i++){
        
        if(i == animals.length - 1){
            temp.push(animals[i])
            result.push(temp)
        } else {
            temp.push(animals[i])
            result.push(temp)
            temp = []
        }
    }

    return result
}
  
  // TEST CASES
//   console.log(groupAnimals(['cacing', 'ayam', 'kelinci', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]