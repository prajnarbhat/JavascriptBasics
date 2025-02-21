// array.map created a new array by performing a function on each and every element of array

let numbers = [1,2,3,4,5];

const arrayMap = numbers.map(myFunction);

function myFunction(item) {
    return item * 2;
}

console.log("New array",arrayMap)