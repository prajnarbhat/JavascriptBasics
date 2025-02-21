// array.keys objects return with the keys of an array

let array = ["apple","banana","grapes"];

let arrayKeys = array.keys();
console.log("Keys of an array",arrayKeys);

for (let x of arrayKeys){
    console.log(x)
}