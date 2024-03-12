class Car {
  constructor(name, price, maxSpeed) {
    this.name = name;
    this.price = price;
    this.maxSpeed = maxSpeed;
  }
}

function withParktronic(car) {
  return { ...car, price: car.price + 2000 };
}

function withAutopilot(car) {
  return { ...car, price: car.price + 3300 };
}

let car = new Car("Audi", 15000, 220);
console.log("price:   ", car.price);
car = withParktronic(car);
console.log("price with parktronic:   ", car.price);
car = withAutopilot(car);
console.log("price with parktronic and autopilot:   ", car.price);
