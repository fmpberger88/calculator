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
    } else if (["+", "-", "*", "/"].includes(inputValue)) {
        operator = inputValue; // Save operator
        screen.textContent = inputValue
    } else if (inputValue === "=" && operator) {
        const result = operate(firstInput, secondInput, operator);
        screen.textContent = result;
        // Reset for next calculation
        firstInput = result.toString();
        secondInput = "";
        //operator = null;
    } else if (inputValue === "clear") {
        firstInput = "";
        secondInput = "";
        operator = null;
        screen.textContent = 0;
    } else if (inputValue === "delete") {
        if (secondInput) {
            secondInput = secondInput.slice(0, -1);
            if (secondInput.length === 0) {
                screen.textContent = 0;
            } else {
                screen.textContent = secondInput;
            }
        } else if (!secondInput && operator) {
            operator = null;
        } else {
            firstInput = firstInput.slice(0, -1);
            if (firstInput.length === 0) {
                screen.textContent = 0;
            } else {
                screen.textContent = firstInput;
            }
        }
    }
}));