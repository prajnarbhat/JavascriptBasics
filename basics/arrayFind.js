function elementGreaterThanTen(element){
    return element > 10
}

const array1 = [5,6,7,10,20,30,40]
const findElementGreaterThanTen = array1.find(elementGreaterThanTen)

console.log(findElementGreaterThanTen)