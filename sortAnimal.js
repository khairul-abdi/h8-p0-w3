// descending order
var animals = ["elephant", "dog", "cat", "bee", "ant"]

animals.sort(function (a, b) {
    if (a > b) {
        return -1;
    }
    if (b > a) {
        return 1;
    }

    console.log(animals)
});
console.log(animals);


