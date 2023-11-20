/* 
Filename: ComplexCode.js
Description: This code demonstrates a sophisticated and elaborate implementation
             of a virtual shopping cart system with various functionalities.
*/

// Define a class for representing products
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

// Define a class for representing the shopping cart
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(product, quantity) {
    let existingItem = this.items.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({
        product: product,
        quantity: quantity
      });
    }
  }

  removeItem(productId) {
    let indexToRemove = this.items.findIndex(item => item.product.id === productId);
    if (indexToRemove !== -1) {
      this.items.splice(indexToRemove, 1);
    }
  }

  updateQuantity(productId, newQuantity) {
    let productItem = this.items.find(item => item.product.id === productId);
    if (productItem) {
      productItem.quantity = newQuantity;
    }
  }

  getTotalPrice() {
    let totalPrice = 0;
    for (let item of this.items) {
      totalPrice += item.product.price * item.quantity;
    }
    return totalPrice;
  }

  printInvoice() {
    console.log("Invoice:");
    console.log("-----------------------------");
    for (let item of this.items) {
      console.log(`${item.product.name} (Qty: ${item.quantity}) - $${item.product.price.toFixed(2)} each`);
    }
    console.log("-----------------------------");
    console.log(`Total: $${this.getTotalPrice().toFixed(2)}`);
  }
}

// Create some products
let product1 = new Product(1, "Smartphone", 599.99);
let product2 = new Product(2, "Laptop", 1299.99);
let product3 = new Product(3, "Bluetooth Speaker", 149.99);

// Create a shopping cart and perform operations
let cart = new ShoppingCart();
cart.addItem(product1, 2);
cart.addItem(product2, 1);
cart.addItem(product3, 3);

cart.updateQuantity(3, 5);

cart.removeItem(1);

cart.printInvoice();