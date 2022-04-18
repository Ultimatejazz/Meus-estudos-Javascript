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
