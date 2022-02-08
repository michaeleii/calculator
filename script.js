function add (num1, num2) {
    return num1 + num2;
}

function subtract (num1, num2) {
    return num1 - num2;
}

function mutiply (num1, num2) {
    return num1 * num2;
}

function divide (num1, num2) {
    return num1 / num2;
}

function operate (operator, num1, num2) {
    return operator(num1, num2);
}


const displayText = document.querySelector("div.display-text");
const numberButton = document.querySelectorAll("button.numbers");

for (let i = 0; i < numberButton.length; i++) {
    numberButton[i].addEventListener("click", function () {
        if (displayText.innerHTML.length <= 20) {
            displayText.innerHTML += this.innerHTML;
        };
    })
    
}