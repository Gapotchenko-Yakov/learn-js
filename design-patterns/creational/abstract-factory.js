class CarFactory {
  constructor(type) {
    return type === "Z4" ? SportCarFactory.create : FamilyCarFactory.create;
  }
}

class SportCarFactory {
  create() {
    return new BmwZ4();
  }
}

class FamilyCarFactory {
  create() {
    return new BmwI3();
  }
}

class BmwZ4 {
  info() {
    console.log("Z4 is a Sport Car!");
  }
}

class BmwI3 {
  info() {
    console.log("I3 is a Family Car!");
  }
}
