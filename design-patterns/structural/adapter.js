class Car {
  constructor(engine) {
    this.engine = engine;
  }

  start() {
    this.engine.startOldMethod();
  }
}

class OldEngine {
  startOldMethod() {
    console.log("Use the old way");
  }
}

class NewEngine {
  startNewMethod() {
    console.log("Use the new way");
  }
}

class NewEngineAdapter {
  constructor(newEngine) {
    this.engine = newEngine;
  }

  startOldMethod() {
    this.engine.startNewMethod();
  }
}

const oldEngine = new OldEngine();
const newEngine = new NewEngine();
const newEngineAdapter = new NewEngineAdapter(new NewEngine());

const carWithOldEngine = new Car(oldEngine);
const carWithNewEngine = new Car(newEngine);
const carWithAdapter = new Car(newEngineAdapter);

carWithOldEngine.start(oldEngine);
carWithAdapter.start(newEngineAdapter);
// carWithNewEngine.start(newEngine); --- will be an Error !!!
