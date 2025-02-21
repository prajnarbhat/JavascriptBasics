// array.some checks if some array values passes the test
// it return a boolean value

let numbers = [10,20,30,40,50];

const arraySome = numbers.some(myFunction);

function myFunction(item){
    return item > 30;
}

console.log("array values that passes the test:",arraySome);