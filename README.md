# Calculator Project

## Description

This project is a simple calculator application for a food store. It allows customers to order from a menu of seven items and calculates the total price, applying discounts for members and bundle purchases.
testtt

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/superjaru/Calculator-food-store.git
   cd calculator-project
   ```
2. **Install dependencies:**

    ```sh
    npm install
    ```


## Example and Testing
- You can also see how to integrate the Calculator class into any application by running the 'index.js' script.


1. **Run the tests using Jest:**

    ```sh
    npm test
    ```
2. **Example Unit Test Output::**

    ```sh
    PASS  test/Calculator.test.js
    Calculator
    √ Calculate total price without discounts (14 ms)
    √ Apply member card discount (3 ms)
    √ Apply bundle discount for Orange set (2 ms)
    √ Apply bundle discount for Green set with member card discount (1 ms)

    Test Suites: 1 passed, 1 total
    Tests:       4 passed, 4 total
    Snapshots:   0 total
    Time:        0.218 s, estimated 1 s
    ```