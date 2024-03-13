class Account {
  constructor(name, balance, successor = null) {
    this.name = name;
    this.balance = balance;
    this.successor = successor;
  }

  pay(price) {
    if (price <= this.balance) {
      console.log(`Successful payment with ${this.name}!`);
    } else if (this.successor) {
      console.log(`Can't pay using ${this.name}`);
      this.successor.pay(price);
    } else {
      console.log("Not enough money.");
    }
  }

  setSuccessor(successor) {
    this.successor = successor;
  }
}

class MasterCard extends Account {
  constructor(balance) {
    super("MaterCard", balance);
  }
}

class Paypal extends Account {
  constructor(balance) {
    super("Paypal", balance);
  }
}

class Qiwi extends Account {
  constructor(balance) {
    super("Qiwi", balance);
  }
}

const masterCard = new MasterCard(100);
const paypal = new Paypal(210);
const qiwi = new Qiwi(350);

masterCard.setSuccessor(paypal);
paypal.setSuccessor(qiwi);
masterCard.pay(280);
