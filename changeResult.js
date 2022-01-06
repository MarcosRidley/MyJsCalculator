const result = document.getElementById("result");
const current = document.getElementById("current");
const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", () => clearAll());
const deleteButton = document.getElementById("delete");
deleteButton.addEventListener("click", clearLastNumber);

function changeResult(conteudo) {
  result.textContent = conteudo;
}

function concatNumbers(scrambledNumber) {
  if (result.textContent == 0) {
    result.textContent = "";
  }
  let concatenatedString = result.textContent;
  concatenatedString = concatenatedString.concat(
    convertnumber(scrambledNumber)
  );
  return concatenatedString;
}

function clearAll() {
  changeResult(0);
  current.textContent = "Start";
  numberA = "";
  numberB = "";
}

function clearLastNumber() {
  let unslicedResult = result.textContent;
  slicedResult = unslicedResult.slice(0, -1);
  if (slicedResult.length > 0) {
    result.textContent = slicedResult;
  } else {
    result.textContent = 0;
  }
}
