// Class Syntax:
/*
class ClassName {
  constructor() { ... }
}
*/

// Class example:

class Car {
    constructor(name, year) {
      this.nameCar = name;
      this.yearCar = year;
    }
}

let myCar1 = new Car("Ford", 2014);
let myCar2 = new Car("Audi", 2019);

console.log(myCar1);
console.log(myCar2);

// Function Syntax:
/*
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
*/

//Function example:
function myFunction(p1, p2) {
  return p1 * p2;   // The function returns the product of p1 and p2
}
