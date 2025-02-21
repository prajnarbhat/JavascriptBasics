if (true) {
    let age = 10;
    console.log(age);
}
console.log(age);  //output:age is not defined
//let cannot be declared outside the block

if (true) {
    var age1 = 10;
    console.log(age1);
}
console.log(age1); 
//var can be declared outside the block
//Block Scope: The variable age is declared with let inside the if block, so it is only accessible within that block and cannot be accessed outside of it.
const age2 = 10;
if (true) {
    console.log(age2);
}
console.log(age2);

//const is like a global variable it can be declared outside the block
//when const declared within blok it shows an error