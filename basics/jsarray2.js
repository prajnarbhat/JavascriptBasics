const fruits = ["Banana", "Orange", "Apple", "Mango"];

let text = '<ul>';
fruits.forEach(myFunction);
text += '</ul>';

function myFunction(value){
    text += "<li>" + value + "</li>"
}

console.log(text);

fruits.push("lemon");
console.log(text);

//array methods
/