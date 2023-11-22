let display = document.getElementById('display');
let currentInput = '';

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function appendOperator(operator) {
  currentInput += operator;
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  updateDisplay();
}

function calculateResult() {
  try {
    currentInput = eval(currentInput);
    updateDisplay();
  } catch (error) {
    display.value = 'Error';
  }
}

function updateDisplay() {
  display.value = currentInput;
}
