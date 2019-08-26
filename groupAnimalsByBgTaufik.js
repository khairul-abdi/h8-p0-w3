function groupAnimals(animals) {
  // you can only write your code here!
  animals = animals.sort();
  const results = [];
  let temp = [];

  for(let i = 0; i < animals.length; i++) {

    if(i == animals.length-1) {
      temp.push(animals[i]);
      results.push(temp);
    } else {
      if(animals[i][0] == animals[i+1][0]) {
        temp.push(animals[i]);
        console.log('temp if ', temp)
      } else {
        temp.push(animals[i]);
        console.log('temp else ', temp)
        results.push(temp);
        console.log('result ', results)
        temp = [];
      };
    };
  };

  return results;
};

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'anjing']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]

console.log('\n--------\n')

// console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]