class OfficialDealer {
  constructor(customers = []) {
    this.customers = customers;
  }

  addToCustomersList(customerName) {
    this.customers.push(customerName);
  }

  getCustomersList() {
    return this.customers;
  }

  orderAuto(customer, model, price) {
    console.group("order:");
    console.log("model", model);
    console.log("price", price);
    console.groupEnd();
    this.addToCustomersList(customer.getName());
  }
}

class Customer {
  constructor(name, mediator) {
    this.name = name;
    this.mediator = mediator;
  }

  makeOrder(model, price) {
    this.mediator.orderAuto(this, model, price);
  }

  getName() {
    return this.name;
  }
}

const officialDealer = new OfficialDealer();
const customer1 = new Customer("Michael", officialDealer);
const customer2 = new Customer("John", officialDealer);

customer1.makeOrder("Audi", 15000);
customer2.makeOrder("BMV", 12000);
