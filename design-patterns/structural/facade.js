class Conveyor1 {
  setBody() {
    console.log("Body");
  }
  setEngine() {
    console.log("Engine");
  }
  setInterior() {
    console.log("Interior");
  }
  addElectronics() {
    console.log("Electronics");
  }
}

class Conveyor2 {
  setWheels() {
    console.log("Wheels");
  }
  setExterior() {
    console.log("Exterior");
  }
  paint() {
    console.log("Paint");
  }
}

class ConveyorFacade {
  constructor(conveyor1, conveyor2) {
    this.conveyor1 = conveyor1;
    this.conveyor2 = conveyor2;
  }

  assemble() {
    console.group("First Conveyor:");
    this.conveyor1.setBody();
    this.conveyor1.setEngine();
    this.conveyor1.setInterior();
    this.conveyor1.addElectronics();
    console.groupEnd();
    console.group("Second Conveyor:");
    this.conveyor2.setWheels();
    this.conveyor2.setExterior();
    this.conveyor2.paint();
    console.groupEnd();
  }
}

const conveyorFacade = new ConveyorFacade(new Conveyor1(), new Conveyor2());
conveyorFacade.assemble();
