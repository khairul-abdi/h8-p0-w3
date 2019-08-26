function num(arr){
    var result = 0
    
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr[i].length; j++){
            // console.log(arr[i][j])
            result += arr[i][j]
        }
    }


    return result
}

console.log(num([
    [2,3,4],
    [3,4,5]
]))