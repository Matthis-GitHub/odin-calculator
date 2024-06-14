// Global variables
let num1 = 0;
let num2 = 0;
let operator;

// Functions
function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
  }
}

// Helper functions
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

// Initial function calls

console.log("----------------------------------");
console.log("Test helper functions");
console.log(`Add 2 + 2 = ${add(2, 2)}`);
console.log(`Subtract 5 - 1 = ${subtract(5, 1)}`);
console.log(`Multiply 2 * 2 = ${multiply(2, 2)}`);
console.log(`Divide 8 / 2 = ${divide(8, 2)}`);
console.log("----------------------------------");

console.log("Test functions");
console.log(`Operate(+, 2, 2) ${operate("+", 2, 2)}`);
console.log(`Operate(-, 5, 1) ${operate("-", 5, 1)}`);
console.log(`Operate(*, 2, 2) ${operate("*", 2, 2)}`);
console.log(`Operate(/, 8, 2) ${operate("/", 8, 2)}`);
