class Car {}

class CarBuilder {
  constructor() {
    this.car = new Car();
  }
  addAutoPilot(autoPilot) {
    this.car.autoPilot = autoPilot;
    return this;
  }
  addParktronic(parktronic) {
    this.car.parktronic = parktronic;
    return this;
  }
  addSignaling(signaling) {
    this.car.signaling = signaling;
    return this;
  }
  updateEngine(engine) {
    this.car.engine = engine;
    return this;
  }
  build() {
    return this.car;
  }
}

const car = new CarBuilder()
  .addParktronic(true)
  .addAutoPilot(true)
  .updateEngine("V8")
  .build();

console.log("car created by the builder:\t", car);
