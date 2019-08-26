function urut(number){
    
    var temp = []
    var result = []

    for(var i = 0; i < number.length; i++){
        for(var j = 0; j < number.length; j++){
            if(number[i] < number[j]){
                var temp = number[j]
                number[j] = number[i]
                number[i] = temp
            }
        }
    }


    return number
}

console.log(urut([3,1,445,65,23,65]))