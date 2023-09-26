const calcDisplay = document.getElementById("calcDisplay");
const calcButtons = document.querySelectorAll(".calcButtons");
const calcEqual = document.getElementById("calcEqual");
const calcClear = document.getElementById("calcClear");
const calcGoBack = document.getElementById("calcGoBack");
const calcOperators = document.querySelectorAll(".calcOperator");
const calcDecimal = document.getElementById("calcDecimal");
const calcNumbers = document.querySelectorAll(".calcNumber");

let displayValue = "";

const functions = {
  "+": add,
  "-": subtract,
  x: multiply,
  "÷": divide,
};

const regexOperatorFinder = /[÷x+-]/g;

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

calcButtons.forEach((currentBtn) => {
  currentBtn.addEventListener("click", (e) => {
    displayValue = displayValue + e.target.innerHTML;

    calcDisplay.innerText = displayValue;
  });
});

function getSum(str) {
  const findOperator = str.match(regexOperatorFinder);
  findOperator.unshift("+");
  const arrayOfStrNumbers = str.split(regexOperatorFinder);

  const sumOfNumbers = arrayOfStrNumbers.reduce((prev, curr, i) => {
    const answer = functions[findOperator[i]](prev, +curr);
    return answer;
  }, 0);
  const finalAnswer = Math.round(sumOfNumbers * 100) / 100;
  if (finalAnswer === Infinity) {
    return "nice try";
  }
  return finalAnswer;
}

calcEqual.addEventListener("click", () => {
  displayValue = getSum(displayValue);

  calcDisplay.innerText = displayValue;
});

calcClear.addEventListener("click", () => {
  displayValue = "";
  calcDisplay.innerText = displayValue;
});

calcGoBack.addEventListener("click", () => {
  displayValue = displayValue.slice(0, displayValue.length - 1);
  calcDisplay.innerText = displayValue;
});

calcDecimal.addEventListener("click", () => {
  calcDecimal.disabled = true;
});

function replaceLastOperator(str, operatorChar) {
  const lastTwoChar = str.slice(str.length - 2);
  const startsWithDigit = /^\d/.test(lastTwoChar);

  if (!startsWithDigit) {
    const test = str.slice(0, str.length - 2) + operatorChar;

    displayValue = test;

    calcDisplay.innerText = displayValue;
  }
}

calcOperators.forEach((currentOperator) => {
  currentOperator.addEventListener("click", (e) => {
    replaceLastOperator(displayValue, e.target.innerHTML);
    if (calcDecimal.disabled === true) {
      calcDecimal.disabled = false;
    }
  });
});

calcGoBack.addEventListener("click", () => {
  displayValue = displayValue.slice(0, displayValue.length - 1);
  calcDisplay.innerText = displayValue;
});
