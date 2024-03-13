class Auto {
  constructor(model) {
    this.model = model;
  }
}

class AutoFactory {
  constructor() {
    this.models = {};
  }

  create(name) {
    const model = this.models[name];
    if (model) return model;
    console.count("model");
    this.models[name] = new Auto(name);
    return this.models[name];
  }

  getModels() {
    console.table(this.models);
  }
}

const autoFactory = new AutoFactory();
const bmv = autoFactory.create("BMV");
const audi = autoFactory.create("Audi");
const tesla = autoFactory.create("Tesla");

const redAudi = autoFactory.create("Audi");
const blackTesla = autoFactory.create("Tesla");

autoFactory.getModels();
