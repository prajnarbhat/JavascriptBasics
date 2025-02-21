// js break statment stops the loop if the specific condition is specified
let text="";
for ( let i=0; i<5; i++){
    if ( i==3 ){
        break;
    }
    text += i;    
}
console.log("value of text:",text);
