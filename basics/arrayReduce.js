// array.reduce runs a function on each and every element of array that return a single value
// it return a single array element
let numbers = [1,2,3,4,5];
let sum = 0;

const arrayReduce = numbers.reduce(myFunction);

function myFunction(sum , item) {
    return sum + item;
}

console.log("Array Reduce:",arrayReduce);

const reduceSum = numbers.reduce(function(sum , item) {
    return sum + item;
},0)

console.log("Array Reduce:",reduceSum);