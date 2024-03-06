// first method - use global variable

// let instance;

// class ShoppingCart {
//   constructor() {
//     if (!instance) instance = this;
//     instance.products = [];
//     return instance;
//   }
//   addProduct(product) {
//     this.products.push(product);
//   }
// }

// second method - use ES6 static method

class ShoppingCart {
  constructor() {
    if (!ShoppingCart.instance) {
      ShoppingCart.instance = this;
      ShoppingCart.instance.products = [];
    }
    return ShoppingCart.instance;
  }
  addProduct(product) {
    this.products.push(product);
  }
}

const cart1 = new ShoppingCart();
cart1.addProduct({ name: "apple", price: 70 });
cart1.addProduct({ name: "orange", price: 120 });
const cart2 = new ShoppingCart();

cart1.addProduct({ name: "carrot", price: 40 });
cart2.addProduct({ name: "monitor", price: 10000 });
cart2.addProduct({ name: "phone", price: 15000 });

console.log("cart1:    ", cart1);
console.log("cart2:    ", cart2);
