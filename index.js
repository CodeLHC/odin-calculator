const calcDisplay = document.getElementById("calcDisplay");
const calcButtons = document.querySelectorAll(".calcButtons");
let displayValue = "";

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

// Create the functions that populate the display when you
// click the number buttons. You should be storing the
// ‘display value’ in a variable somewhere for use in
// the next step.

calcButtons.forEach((currentBtn) => {
  currentBtn.addEventListener("click", (e) => {
    displayValue = displayValue + e.target.innerHTML;

    calcDisplay.innerText = displayValue;
  });
});
