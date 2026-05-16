//main.js
const { Day } = require("./classes");
const { createOrders } = require("./data");

const today = new Day(new Date());

for (const order of createOrders()) {
  today.addOrder(order);
}

const summary = today.summarizeByFlavor();

console.log("Daily Sales Summary:");

let dayTotalRevenue = 0;
let dayTotalCost = 0;


for (const [flavor, data] of summary.entries()) {

  // accumulate daily totals
  dayTotalRevenue += data.revenue;
  dayTotalCost += data.cost;

  console.log(`\nFlavor: ${flavor}`);
  console.log(`Total donuts sold: ${data.quantity}`);
  console.log(`Revenue: $${data.revenue.toFixed(2)}`);
  console.log(`Cost: $${data.cost.toFixed(2)}`);
  console.log(`Profit: $${(data.revenue - data.cost).toFixed(2)}`);
}

const dayTotalProfit = dayTotalRevenue - dayTotalCost;

console.log("\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("TOTAL FOR THE DAY");
console.log(`Total Revenue: $${dayTotalRevenue.toFixed(2)}`);
console.log(`Total Cost: $${dayTotalCost.toFixed(2)}`);
console.log(`Total Profit: $${dayTotalProfit.toFixed(2)}`);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
