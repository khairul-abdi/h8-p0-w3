function targetTerdekat(arr) {
    var arrayX = []
    var arrayO = []

    for(var i=0; i < arr.length; i++){
        if(arr[i] === 'x'){
            arrayX.push(i)
        }else if(arr[i] === 'o'){
            arrayO.push(i)
        }

    }

    if(arr.indexOf('x') == -1){
        return 0
    }else{
        var arrFind = []
        for(var i = 0; i<arrayO.length; i++){
            for(var j = 0; j<arrayX.length; j++){
                var jarak = Math.abs(arrayX[j] - arrayO[i])
                arrFind.push(jarak)
            }
        }
        return arrFind.sort(function(a,b){return a-b})[0]
    }

  }



  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2