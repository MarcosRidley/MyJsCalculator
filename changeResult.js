const result = document.getElementById("result");
const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", changeResult);

function changeResult() {
  result.textContent = 330;
}
