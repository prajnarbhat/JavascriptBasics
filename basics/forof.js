// forof loops through tjrough the value of the object

let object = ["a","b","c"];

let text = ""
for ( let x of object){
    console.log(x);
    text += x;
}
console.log("vales of the object:",text);