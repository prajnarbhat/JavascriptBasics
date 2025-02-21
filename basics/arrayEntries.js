// array.entries() return the key value pair of array elements

let array = ["item1","item2","item3"];

const arrayEntries = array.entries();

for ( x of arrayEntries){
    console.log("Array entries",x)
}