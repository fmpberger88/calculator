import { operate } from './utils/operate.js';

let firstInput = '';
let secondInput = '';
let result = 0;
let operator = null;

const screen = document.querySelector('#screen');

function handleDigitInput(value) {
  if (operator === null) {
    firstInput += value;
    screen.textContent = firstInput;
  } else {
    secondInput += value;
    screen.textContent = secondInput;
  }
}

function handleOperatorInput(value) {
  if (firstInput && secondInput) {
    result = operate(Number(firstInput), Number(secondInput), operator);
    screen.textContent = result.toFixed(5);
    firstInput = result.toString();
    secondInput = '';
  }
  operator = value;
}

function handleEqualInput() {
  if (secondInput && operator) {
    result = operate(Number(firstInput), Number(secondInput), operator);
    screen.textContent = result.toFixed(5);
    firstInput = result.toString();
    secondInput = '';
    operator = null;
  }
}

function handleClearInput() {
  firstInput = '';
  secondInput = '';
  operator = null;
  screen.textContent = 0;
}

function handleDeleteInput() {
  if (secondInput) {
    secondInput = secondInput.slice(0, -1);
    screen.textContent = secondInput || 0;
  } else if (operator) {
    operator = null;
  } else {
    firstInput = firstInput.slice(0, -1);
    screen.textContent = firstInput || 0;
  }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((btn) => btn.addEventListener('click', function () {
  const inputValue = this.value;

  if (!isNaN(inputValue) || inputValue === '.') {
    handleDigitInput(inputValue);
  } else if (['+', '-', '*', '/'].includes(inputValue)) {
    handleOperatorInput(inputValue);
  } else if (inputValue === '=') {
    handleEqualInput();
  } else if (inputValue === 'clear') {
    handleClearInput();
  } else if (inputValue === 'delete') {
    handleDeleteInput();
  }
}));
