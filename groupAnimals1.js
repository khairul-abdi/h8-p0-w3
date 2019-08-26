function groupAnimals(animals) {
    // you can only write your code here!
    // animals = animals.sort();
    var results = [];
    let temporary = [];
    var tempHuruf = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I' ,'J', 'K', 'L', 'M']

    for(var i = 0; i < animals.length; i++){
        for(var j = 0; j < animals.length; j++){
            if(animals[i] < animals[j]){
                var temp = animals[i]
                animals[i] = animals[j]
                animals[j] = temp
            }
        }
    }

    console.log(animals)
    for(var i = 0; i < animals.length; i++){
        for(var j = 0; j < animals[i].length; j++){

            var status = true
            var k = 0
            while(status){
                if(animals[i][0] === tempHuruf[k]){
                    results[k] = results[k] || []
                    results[k].push(animals[i])
                    status = false
                } else {
                    results[k] = results[k] || []
                }
            k++
            }
        }
    }

    
    return results;
};
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  
  console.log('\n--------\n')
  
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]