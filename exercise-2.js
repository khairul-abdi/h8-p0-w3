function balikString(kalimat){
    var result = ''

    for(var i=0; i<kalimat.length; i++){
        result = kalimat[i] + result
    }

    return result
}

console.log(balikString('Hello World!'))
console.log(balikString('Hello Javascript!'))


console.log('---------------------------')


function balikString1(string){
    var result = ''

    for(var i = string.length-1; i>=0; i--){
        result += string[i] 
    }

    return result

}

console.log(balikString1('Hello Dunia!'))

console.log('---------------------------')


function balikString2(kata){
    var i=0;
    var result=''
    while(i<kata.length){
        result = kata[i] + result

        i++
    }
    return result
}

console.log(balikString2('Hello World'))