// array.every checks if all array values passes the condition
// it return an boolean value

const numbers = [1,2,36,7,4];

const arrayEvery = numbers.every(myFunction);

function myFunction(item) {
    return item > 10;
}

console.log("Check boolean value that every element of array is greater than 10:",arrayEvery);