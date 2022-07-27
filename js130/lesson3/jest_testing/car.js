class Car {
  constructor() {
    this.wheels = 4;
    this.mileageInfo = null;
  }
}

let variable = "test";

function test() {
  console.log("test");
}

module.exports = Car;
module.exports.variable = variable;
module.exports.test = test;
//console.log(module);