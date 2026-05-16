// classes.js
class DonutType {
  constructor(flavor, salePrice, cost) {
    this.flavor = flavor;
    this.salePrice = salePrice;
    this.cost = cost;
  }
}

class Order {
  constructor(orderID, donutType, numberDonuts, customerID, dateTime) {
    if (numberDonuts < 1 || numberDonuts > 30) { //constraint, cannot have more than 30 donuts per order
      throw new Error("Orders must be between 1 and 30 donuts");
    }

    this.orderID = orderID;
    this.donutType = donutType;
    this.numberDonuts = numberDonuts;
    this.customerID = customerID;
    this.dateTime = dateTime;
  }

  getTotalSalePrice() {
    return this.numberDonuts * this.donutType.salePrice;
  }

  getTotalOrderCost() {
    return this.numberDonuts * this.donutType.cost;
  }
}

class Day {
  constructor(date) {
    this.date = date;
    this.ordersPlaced = new Map();
  }

  addOrder(order) {
    this.ordersPlaced.set(order.orderID, order);
  }

  summarizeByFlavor() {
    const summary = new Map();

    for (const order of this.ordersPlaced.values()) {
      const flavor = order.donutType.flavor;

      if (!summary.has(flavor)) {
        summary.set(flavor, {
          quantity: 0,
          revenue: 0,
          cost: 0
        });
      }

      const entry = summary.get(flavor);
      entry.quantity += order.numberDonuts;
      entry.revenue += order.getTotalSalePrice();
      entry.cost += order.getTotalOrderCost();
    }

    return summary;
  }
}

module.exports = { DonutType, Order, Day };