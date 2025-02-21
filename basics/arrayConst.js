// when the array is declared with const it cannot be redeclared

const array1 = ["car","jeep","scooty"];
//array1 = ["cycle","plane"]

//console.log("array which is redeclared using const:",array1);

// But the arra elements can be changed
array1[0] = "jeep";
console.log("Changing array elments:",array1);

// const and without initialising give a syntax error
const cars;
cars = ['a','b','c'];
