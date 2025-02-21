const car = {
    type:"car1",
    price:700,
    color:"white"
}
console.log(car);

car.color = "red";
console.log(car);

car.brand = "brand1";
console.log(car)

delete car.color;
console.log(car)

const jsObjectToString = JSON.stringify(car)
console.log(jsObjectToString)
