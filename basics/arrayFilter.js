// array.flter creates a new array with array elements which pass the test
// it returns a new array

let numbers = [1,2,3,4,5];

const arrayFilter = numbers.filter(myFunction);

function myFunction(item) {
    return item > 2;
}

console.log("Filtered array:",arrayFilter)