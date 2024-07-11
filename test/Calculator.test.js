const Calculator = require('../src/Calculator');

describe('Calculator', () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator();
  });

  test('Calculate total price without discounts', () => {
    const orders = { "Red set": 1, "Green set": 1 };
    const total = calc.calculatePrice(orders, false);
    expect(total).toBe(90);
  });

  test('Apply member card discount', () => {
    const orders = { "Red set": 1, "Green set": 1 };
    const total = calc.calculatePrice(orders, true);
    expect(total).toBe(81);
  });

  test('Apply bundle discount for Orange set', () => {
    const orders = { "Orange set": 5 };
    const total = calc.calculatePrice(orders, false);
    expect(total).toBe(576);
  });


  test('Apply bundle discount for Green set with member card discount', () => {
    const orders = { "Green set": 4 };
    const total = calc.calculatePrice(orders, true);
    expect(total).toBe(136.80);
  });
});
