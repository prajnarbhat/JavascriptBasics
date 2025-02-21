let text = "Hello World";
let char = text.charAt(0);
console.log(char);

let part= text.slice(2);
console.log(part);

//substr() is similar to slice().
//The difference is that the second parameter specifies the length of the extracted part.
let part1 = text.substr(2,1);
console.log(part1);

//convert a number to string and padStart with 0
let num = 1;
let numToString = num.toString();
console.log(numToString)
numToString.padStart(5,0)
console.log(numToString)

//repeating of text
let str = "Hi"
let result = str.repeat(2);
console.log("repeated text",result);

let newText = str.replace("Hi","Hello")
console.log(newText)