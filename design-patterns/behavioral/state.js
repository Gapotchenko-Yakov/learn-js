class OrderStatus {
  constructor(name, nextStatus) {
    this.name = name;
    this.nextStatus = nextStatus;
  }

  next() {
    return new this.nextStatus();
  }
}

class WaitingForPayment extends OrderStatus {
  constructor() {
    super("WaitingForPayment", DeliveryInProgress);
  }
}

class DeliveryInProgress extends OrderStatus {
  constructor() {
    super("DeliveryInProgress", Delivered);
  }
}

class Delivered extends OrderStatus {
  constructor() {
    super("Delivered", null);
  }
}

class Order {
  constructor() {
    this.state = new WaitingForPayment();
  }

  next() {
    this.state = this.state.next();
  }

  cancelOrder() {
    if (this.state instanceof WaitingForPayment) {
      console.log("Order is cancelled.");
    } else {
      console.log("Order can't be cancelled. Because payment was finished.");
    }
  }
}

const order = new Order();

console.group("WaitingForPayment");
console.log("order.state.name", order.state.name);
order.cancelOrder();
console.groupEnd();

console.group("DeliveryInProgress");
order.next();
console.log("order.state.name", order.state.name);
order.cancelOrder();
console.groupEnd();

console.group("Delivered");
order.next();
console.log("order.state.name", order.state.name);
order.cancelOrder();
console.groupEnd();
