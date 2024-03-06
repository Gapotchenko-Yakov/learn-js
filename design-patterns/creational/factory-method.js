class BMW {
  constructor(model, price, maxSpeed) {
    this.model = model;
    this.price = price;
    this.maxSpeed = maxSpeed;
  }
}

class BMWFactory {
  create(model) {
    if (model === "X5") return new BMW("X5", 120000, 300);
    else if (model === "X6") return new BMW("X6", 140000, 320);
    else throw new Error("Car not found");
  }
}

const factory = new BMWFactory();

const car1 = factory.create("X5");
const car2 = factory.create("X6");

console.log("car1:   ", car1);
console.log("car2:   ", car2);
