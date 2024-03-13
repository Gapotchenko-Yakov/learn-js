// abstraction
class Car {
  constructor(color, name) {
    this.name = name;
    this.color = color;
  }

  getColor() {
    return this.color.getColor();
  }
}

// realisation
class Color {
  constructor(name) {
    this.name = name;
  }

  getColor() {
    throw new Error("Abstract method getColor must be overridden");
  }
}

// concrete abstraction
class Tesla extends Car {
  constructor(color) {
    super(color, "Tesla");
  }

  paint() {
    console.log(`Auto: ${this.name}, Color: ${this.getColor()}`);
  }
}

// concrete abstraction
class Audi extends Car {
  constructor(color) {
    super(color, "Audi");
  }

  paint() {
    console.log(`Auto: ${this.name}, Color: ${this.getColor()}`);
  }
}

// concrete realisation
class RedColor extends Color {
  getColor() {
    return "Red";
  }
}

// concrete realisation
class BlackColor extends Color {
  getColor() {
    return "Black";
  }
}

const blackTesla = new Tesla(new BlackColor());
const redAudi = new Audi(new RedColor());
blackTesla.paint();
redAudi.paint();
