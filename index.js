let firstNumber = 2;
let secondNumber = 2;
// let operator = "+";

const functions = {
  "+": add,
  "-": subtract,
  "*": multiply,
  "/": divide,
};

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(firstNumber, secondNumber, operator) {
  return functions[operator](firstNumber, secondNumber);
}

console.log(operate(2, 2, "-"));
