// data.js
const { DonutType, Order } = require("./classes");

const chocolate = new DonutType("Chocolate", 3.50, 1.0);
const sprinkles = new DonutType("Sprinkles", 3.75, 1.17);
const glazed = new DonutType("Glazed", 3.00, 0.9);
const maple = new DonutType("Maple", 3.50, 1.0);

function createOrders() {
  return [
    new Order(1, chocolate, 12, 100001, new Date()),
    new Order(2, sprinkles, 6, 100002, new Date()),
    new Order(3, chocolate, 20, 10003, new Date()),
    new Order(4, glazed, 10, 100004, new Date()),
    new Order(5, sprinkles, 8, 100005, new Date()),
    new Order(6, maple, 14, 100006, new Date()),
    new Order(7, maple, 12, 100007, new Date()),
  ];
}

module.exports = { createOrders };