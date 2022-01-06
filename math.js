const numbers = document.querySelectorAll(".numerals");
console.log(numbers);
let pressedNumber;
let numberA = "";
let numberB = "";
let whichOperator = "";
let lastOperator = "";
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", () => changeResult(concatNumbers(i)));
}

const operators = document.querySelectorAll(".operations");
let pressedOperator;
for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", () => writeOperation(i));
}

function writeOperation(originOperator) {
  lastOperator = whichOperator;
  whichOperator = convertOperator(originOperator);
  if (numberA == "") {
    numberA = result.textContent;
    currentResult = numberA.concat(whichOperator);
    current.textContent = currentResult;
    result.textContent = 0;
  } else {
    numberB = Number(result.textContent);
    numberA = Number(numberA);
    checkWhichOperator(whichOperator);
    current.textContent = current.textContent + "" + numberB + whichOperator;
    numberA = "";
    numberB = "";
  }
}

function convertOperator(originOperator) {
  switch (originOperator) {
    case 0:
      return "÷";
    case 1:
      return "x";
    case 2:
      return "-";
    case 3:
      return "=";
    case 4:
      return "+";
  }
}

function convertnumber(originNumber) {
  switch (originNumber) {
    case 10:
      return 0;
    case 6:
      return 1;
    case 7:
      return 2;
    case 8:
      return 3;
    case 3:
      return 4;
    case 4:
      return 5;
    case 5:
      return 6;
    case 0:
      return 7;
    case 1:
      return 8;
    case 2:
      return 9;
    case 9:
      return ".";
  }
}

function doMath(a, b, operation) {
  switch (operation) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "/":
      return a / b;
    case "*":
      return a * b;
  }
}

function checkWhichOperator(whichOperator) {
  if (whichOperator == "÷") {
    result.textContent = doMath(numberA, numberB, "/");
  }
  if (whichOperator == "x") {
    result.textContent = doMath(numberA, numberB, "*");
  }
  if (whichOperator == "-") {
    result.textContent = doMath(numberA, numberB, "-");
  }
  if (whichOperator == "+") {
    result.textContent = doMath(numberA, numberB, "+");
  }
  if (whichOperator == "=") {
    checkWhichOperator(lastOperator);
  }
}
