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
const operatorButton = document.querySelectorAll("button.operator")

for (let i = 0; i < numberButton.length; i++) {
    numberButton[i].addEventListener("click", function () {
        if (displayText.innerHTML.length < 15) {
            displayText.innerHTML += this.innerHTML;
        };
    })
}

for (let i = 0; i < numberButton.length; i++) {
    numberButton[i].addEventListener("click", function () {
        if (displayText.innerHTML.length < 15) {
            displayText.innerHTML += this.innerHTML;
        };
    })
}

document.addEventListener("keydown", function (event) {
    if (displayText.innerHTML.length < 15) {
        switch (event.key) {

            case '1':
                displayText.innerHTML += "1";
                break;

            case '2':
                displayText.innerHTML += "2";
                break;
                
            case '3':
                displayText.innerHTML += "3";
                break; 

            case '4':
                displayText.innerHTML += "4";
                break;

            case '5':
                displayText.innerHTML += "5";
                break;

            case '6':
                displayText.innerHTML += "6";
                break;

            case '7':
                displayText.innerHTML += "7";
                break;

            case '8':
                displayText.innerHTML += "8";
                break;

            case '9':
                displayText.innerHTML += "9";
                break;

            case '0':
                displayText.innerHTML += "0";
                break;  

            default:
                break;
        }
    }
    if (event.key == 'Backspace') {
      displayText.innerHTML = displayText.innerHTML.slice(0, -1);
    }
})