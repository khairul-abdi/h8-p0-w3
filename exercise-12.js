function tentukanDeretGeometri(arr) {
    var selisihDeretGeometri = arr[1] / arr[0]
    isDeretGeometri = true

    for(var i = 0; i < arr.length-1; i++){
        var selisihSementara = arr[i+1] / arr[i]

        if(selisihDeretGeometri != selisihSementara){
            isDeretGeometri = false
        }
    }

    return isDeretGeometri
}
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false