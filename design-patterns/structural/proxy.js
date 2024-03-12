class CarAccess {
  open() {
    console.log("The door is opened");
  }
  close() {
    console.log("The door is closed");
  }
}

class SecuritySystem {
  constructor(carAccess, password) {
    this.carAccess = carAccess;
    this.password = password;
  }

  open(password) {
    if (this.authentificate(password)) {
      this.carAccess.open();
    } else {
      console.log("Wrong password!");
    }
  }

  close() {
    this.carAccess.close();
  }

  authentificate(password) {
    return this.password === password;
  }
}

const carAccess = new CarAccess();
const securitySystem = new SecuritySystem(carAccess, "qwerty");

securitySystem.close();
securitySystem.open("123");
securitySystem.open("qwerty");
securitySystem.close();
