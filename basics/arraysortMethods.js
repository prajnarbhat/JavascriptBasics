const fruits = ["Banana","Orange","Papaya"]

// sort the array elements
const sortedArrayElements = fruits.sort();
console.log("sorted array elements:",sortedArrayElements);

// toSorted Method in js
const sortArrayElementsByToSorted = fruits.toSorted();
console.log("Sort elements of array by toSorted method:",sortArrayElementsByToSorted)

// The difference between toSorted() and sort() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.

// Sorting of numbers cannot be performed by sort methos for that there is need of compare method
const points = [40,100,80,30,60];
points.sort( function(a,b){
    console.log("value of a and b",a,b);
    console.log("substract a and b",a-b)
    return a - b;
})


console.log("Sorted Numbers:",points)