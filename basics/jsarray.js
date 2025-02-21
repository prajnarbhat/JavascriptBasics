const fruits =['a','b','c']
let flength = fruits.length;

console.log(flength)

let text = "<ul>"
for (let i=0; i<flength; i++){
    text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>"
console.log(text)
