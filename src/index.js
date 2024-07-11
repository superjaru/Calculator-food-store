const Calculator = require('./Calculator');

const calc = new Calculator();

// Order without member card
const orders1 = {
  "Red set": 1,
  "Green set": 1,
};
console.log(calc.calculatePrice(orders1, false));

// Order with member card
const orders2 = {
  "Red set": 1,
  "Green set": 1,
};
console.log(calc.calculatePrice(orders2, true));

// Order with bundle discount
const orders3 = {
  "Orange set": 5,
};
console.log(calc.calculatePrice(orders3, false));

// Order with bundle discount and member card
const orders4 = {
  "Green set": 4,
};
console.log(calc.calculatePrice(orders4, true));