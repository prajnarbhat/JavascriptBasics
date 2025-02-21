//const is used to declare variables that should not be reassigned after their initial assignment.
const country = "india";
//console.log(country);

//declaring variables with var: The variable name is declared twice using var, which allows re-declaration in the same scope.
var name = "Prajna";
var name = "Pruthvi";
console.log(name);

// The variable name is declared with let, which allows reassignment but not re-declaration.
let name1 = "Prajna";
name1 = "ajay";
console.log(name1)

//declaring variables with const: The variable city is declared with const, which does not allow reassignment.

//let: Block-scoped and can be reassigned.
// var: Function-scoped and can be reassigned.
// const: Block-scoped and cannot be reassigned.
// let vs var: let is safer because it’s block-scoped, unlike var.
// const: Used for values that shouldn’t change, but objects/arrays inside can still change.
