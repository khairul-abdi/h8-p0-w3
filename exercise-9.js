function cariMean(arr) {
    var hasilAkhir = 0
    var tampungHasilSementara = 0;
    for(var i=0; i<arr.length; i++){
        // console.log(arr[i])
        tampungHasilSementara += arr[i]
    }
    
    hasilAkhir = tampungHasilSementara / arr.length


    return Math.round(hasilAkhir)

  }
  
  // TEST CASES
  console.log(cariMean([1, 2, 3, 4, 5])); // 3
  console.log(cariMean([3, 5, 7, 5, 3])); // 5
  console.log(cariMean([6, 5, 4, 7, 3])); // 5
  console.log(cariMean([1, 3, 3])); // 2
  console.log(cariMean([7, 7, 7, 7, 7])); // 7