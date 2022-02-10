const calc = {
    add: function(num1, num2) { return num1 + num2;},

    subtract: function(num1, num2) { return num1 - num2;},

    mutiply: function(num1, num2) {return num1 * num2;},

    divide: function(num1, num2) {return num1 / num2;},
}


function operate (operation, num1, num2) {
    return calc[operation](num1, num2);
}

function clear() {
    displayText.innerHTML = '';
}

function clearMemory() {
    memoryText.innerHTML = '';
}



const operatorSigns = ['+', '-', 'x', '÷'];

const displayText = document.querySelector("div.display-text");
const memoryText = document.querySelector("div.memory-text");
const numberButton = document.querySelectorAll("button.numbers");
const operatorButton = document.querySelectorAll("button.operator");
const equalButton = document.querySelector("button.equal");

let firstNum = '';
let secondNum = '';
let operation = '';

equalButton.addEventListener("click", function (){
    secondNum = +displayText.innerHTML;
    clear();
    clearMemory();
    displayText.innerHTML = operate(operation, firstNum, secondNum);
    firstNum = +displayText.innerHTML;
    secondNum = '';
})

for (let i = 0; i < numberButton.length; i++) {
    numberButton[i].addEventListener("click", function () {

        if (displayText.innerHTML.length < 15) {
            displayText.innerHTML += this.innerHTML;
        }
    })
}

for (let i = 0; i < operatorButton.length; i++) {
    operatorButton[i].addEventListener("click", function () {
        if (firstNum == '') {
            firstNum = +displayText.innerHTML;
        } else if (secondNum == '') {
            secondNum = +displayText.innerHTML;
        }
        
        switch (this.innerHTML) {
            case '+':
                operation = 'add';
                break;
             case '-':
                operation = 'subtract';
                break;
            case 'x':
                operation = 'mutiply';
                break;
            case '÷':
                operation = 'divide';
                break;

            default:
                break;
        }
        if (firstNum != undefined && secondNum != undefined){
            displayText.innerHTML = operate(operation, firstNum, secondNum);
            firstNum = +displayText.innerHTML;
            secondNum = '';
        }
        memoryText.innerHTML = `${firstNum} ${this.innerHTML}`;

        clear();
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


