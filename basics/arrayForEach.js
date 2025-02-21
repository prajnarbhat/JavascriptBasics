// array.forEach calls for function for each and every element of array

let array = [10,12,13,45,23];
let text = "";

array.forEach(myfunction);

function myfunction(item,index,array) {
    text += item + "<br>";
}

console.log("Text value",text);