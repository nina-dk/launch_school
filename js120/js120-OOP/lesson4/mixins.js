//1
const Speed = {
  goFast() {
    console.log(`I'm a ${this.constructor.name} and going super fast!`);
  }
};

class Car {
  goSlow() {
    console.log(`I'm safe and driving slow.`);
  }
}

class Truck {
  goVerySlow() {
    console.log(`I'm a heavy truck and like going very slow.`);
  }
}

Object.assign(Car.prototype, Speed);
Object.assign(Truck.prototype, Speed);
let car = new Car();
let truck = new Truck();
car.goFast();
truck.goFast();

//2
// Because the `goFast` method is invoked as a method on the `car` and `truck`
// objects, the `this` keyword in `console.log` references these objects in each
// case. Therefore, when we reference the `constructor` property on these
// objects, JS searches for that property in their prototype chain and finds it
// in the function prototype of their classes, `Car` and `Truck`, respectively.
//`car.constructor` returns `Car` and `truck.constructor` returns the `Truck`
// class. We then reference the `name` property of those classes, which returns
// the name of the class in the form of a string.

//3
class Vehicle {
  constructor(kmTravelledPerLiter, fuelCapInLiter) {
    this.fuelEfficiency = kmTravelledPerLiter;
    this.fuelCap = fuelCapInLiter;
  }

  range() {
    return this.fuelCap *  this.fuelEfficiency;
  }
}

const WheeledVehicle = {
  tirePressure(tireIdx) {
    return this.tires[tireIdx];
  },

  inflateTire(tireIdx, pressure) {
    this.tires[tireIdx] = pressure;
  }
};

class Auto extends Vehicle {
  constructor(tirePressure) {
    // the array represents tire pressure for four tires
    super(50, 25.0);
    this.tires = tirePressure;
  }
}

Object.assign(Auto.prototype, WheeledVehicle);

class Motorcycle extends Vehicle {
  constructor(tirePressure) {
    // array represents tire pressure for two tires
    super(80, 8.0);
    this.tires = tirePressure;
  }
}

Object.assign(Motorcycle.prototype, WheeledVehicle);

class Catamaran extends Vehicle {
  constructor(propellerCount, hullCount, kmTravelledPerLiter, fuelCapInLiter) {
    super(kmTravelledPerLiter, fuelCapInLiter);
    this.propellerCount = propellerCount;
    this.hullCount = hullCount;
  }
}

let sharan = new Auto([30,30,32,32]);
let catamaran = new Catamaran(4, 2, 10, 50.0);

console.log(catamaran.range());
console.log(sharan.tirePressure(2));
console.log(sharan.range());