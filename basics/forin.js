//for in loop iterats through the object
//after iteating through the object it return the key 
//The key is then used to get the value of the object

// let person = { key1 : "value1", key2 : "value2"};
// let text = "";
// for ( x in person){
//     console.log("keys in person:",x);
//     text += person[x];
// }
// console.log("values of the keys:",text);

let x = [1,2,3,4];
let arrayvalues = "";
for ( y in x){
    console.log("get the index value of x:",y)
    arrayvalues += x[y];
}
console.log("values in x:",arrayvalues);