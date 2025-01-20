const screenDisplay = document.querySelector('.screen');
const buttons = document.querySelectorAll('button');
let calculation = [];
let accCalculation;
function calculate(button) {
    let value = button.textContent;
    if (value === "CLEAR") {
        calculation = [];
        screenDisplay.textContent = '.';
    }
    else if (value === '=') {
        screenDisplay.textContent = eval(accCalculation);
    }
    else{
        calculation.push(value);
        accCalculation = calculation.join('');
        screenDisplay.textContent = accCalculation;    
    }
}
buttons.forEach((button) => button.addEventListener('click',() => calculate(button)));