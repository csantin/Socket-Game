var array = [1, 2, 3, 4]
let calculateSum = array.reduce(function(sumSoFar, el){
    return sumSoFar + el
}, 0);
let calculateProduct = array.reduce(function(sumSoFar, el){
    return sumSoFar * el
});
console.log(calculateSum);
console.log(calculateProduct);