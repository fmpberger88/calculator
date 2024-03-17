import {operate} from "./utils/operate.js";

let firstInput = "";
let secondInput = "";
let operator = null;

const buttons = document.querySelectorAll("button");

buttons.forEach(btn => btn.addEventListener("click", function () {
    const inputValue = this.value;
    console.log(inputValue);
    const screen = document.querySelector("#screen");

    // Add input to #screen
    if (!isNaN(inputValue) || inputValue === ".") {
        if (operator === null) {
            firstInput += inputValue;
            screen.textContent = firstInput;
        } else {
            secondInput += inputValue;
            screen.textContent = secondInput;
        }
    } else if (["+", "-", "*", "-"].includes(inputValue)) {
        operator = inputValue; // Save operator
        screen.textContent = inputValue // clear for second input
    } else if (inputValue === "=" && operator) {
        screen.textContent = operate(firstInput, secondInput, operator);
        // Reset for next calculation
        firstInput = result.toString();
        secondInput = "";
        operator = null;
    } else if (inputValue === "clear") {
        firstInput = "";
        secondInput = "";
        operator = null;
        screen.textContent = ""
    } else if (inputValue === "delete") {
        if (secondInput) {
            secondInput = secondInput.slice(0, -1);
            screen.textContent = secondInput;
        } else if (!secondInput && operator) {
            operator = null;
        } else {
            firstInput = firstInput.slice(0, -1);
            screen.textContent = firstInput;
        }
    }
}));