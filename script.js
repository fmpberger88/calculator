const buttons = document.querySelectorAll("button");

buttons.forEach(btn => btn.addEventListener("click", function () {
    const inputValue = this.value;
    console.log(inputValue);
}));