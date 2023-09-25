const calcDisplay = document.getElementById("calcDisplay");
const calcButtons = document.querySelectorAll(".calcButtons");
const calcEquals = document.getElementById("calcEqual");

let displayValue = "";

let firstNumber = 2;
let secondNumber = 2;

const functions = {
  "+": add,
  "-": subtract,
  x: multiply,
  "÷": divide,
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

calcButtons.forEach((currentBtn) => {
  currentBtn.addEventListener("click", (e) => {
    displayValue = displayValue + e.target.innerHTML;

    calcDisplay.innerText = displayValue;
  });
});

const regexOperatorFinder = /[÷x+-]/g;

function getSum(str) {
  const findOperator = str.match(regexOperatorFinder);
  const arrayOfStrNumbers = str.split(regexOperatorFinder);

  if ("÷x".includes(findOperator[0])) {
    let sumOfNumbers = arrayOfStrNumbers.reduce((prev, curr) => {
      const answer = functions[findOperator[0]](prev, +curr);
      return answer;
    });
    return sumOfNumbers;
  } else {
    let sumOfNumbers = arrayOfStrNumbers.reduce((prev, curr) => {
      const answer = functions[findOperator[0]](prev, +curr);
      return answer;
    }, 0);
    return sumOfNumbers;
  }
}

console.log(getSum("8÷2"));
