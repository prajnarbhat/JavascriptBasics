// The continue statment breaks one iteration if speific condition is met

let text = "";

for (let i=0; i<6; i++){
    if ( i==3 ){
        continue;
    }
    text += i;
}
console.log("value of text:",text);