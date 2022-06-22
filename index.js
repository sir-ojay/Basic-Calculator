let num1 = +prompt("Enter first number:");
let operator = prompt("Enter operator (type +, -, / or *):");
let num2 = +prompt("Enter second number:");

let result;

if (isNaN(num1) || isNaN(num2)) {
  alert(
    "Error! Kindly refresh the page and input numbers in the required boxes!"
  );
} else if (operator === "+") {
  result = num1 + num2;
} else if (operator === "-") {
  result = num1 - num2;
} else if (operator === "/") {
  result = num1 / num2;
} else if (operator === "*") {
  result = num1 * num2;
} else {
  alert("Error! Kindly check the operator used");
}
let output = num1 + " " + operator + " " + num2 + " = " + result;

alert(output);