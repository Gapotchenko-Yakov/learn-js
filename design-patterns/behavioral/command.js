class Command {
  constructor(engine) {
    this.engine = engine;
  }
}

class CommandTurnOn extends Command {
  execute() {
    this.engine.turnOn();
  }
}

class CommandTurnOff extends Command {
  execute() {
    this.engine.turnOff();
  }
}

class Engine {
  // Receiver
  constructor() {
    this.isWorking = false;
  }

  turnOn() {
    this.isWorking = true;
  }

  turnOff() {
    this.isWorking = false;
  }
}

class Driver {
  // Invoker
  constructor(command) {
    this.command = command;
  }

  setCommand(command) {
    this.command = command;
  }

  executeCommand() {
    this.command.execute();
  }
}

const engine = new Engine();
const commandTurnOn = new CommandTurnOn(engine);
const commandTurnOff = new CommandTurnOff(engine);
const driver = new Driver(commandTurnOn);

console.log("engine.isWorking", engine.isWorking);

driver.executeCommand();

console.log("engine.isWorking", engine.isWorking);

driver.setCommand(commandTurnOff);
driver.executeCommand();

console.log("engine.isWorking", engine.isWorking);
