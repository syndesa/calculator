const results = document.querySelector('.results');
const numbers = [...document.querySelectorAll('.btn-dig')];
const ac = document.querySelector('#ac');
const eq = document.querySelector('.btn-eql');
const ops = [...document.querySelectorAll('.btn-op')];
const pct = document.querySelector('#pct');

let previousValue = null;
let exprOperand = null; 

numbers.forEach(number => {number.addEventListener('click', updateDisplay) });
results.addEventListener('DOMSubtreeModified', () => results.textContent.length > 7 ? results.style.fontSize = '70px' : results.style.fontSize = '100px');
ac.addEventListener('click', () => results.textContent = '0');
ops.forEach(op => {op.addEventListener('click', toggleOpStyle) });
eq.addEventListener('click', expressionEquals);
eq.addEventListener('transitionend', () => eq.classList.remove('toggleBtn'));
pct.addEventListener('click', toPercentage);

function toPercentage(){
    results.textContent = results.textContent.includes('.') ? (results.textContent =  (parseFLoat(results.textContent)/100).toString()) : (results.textContent = (parseInt(results.textContent)/100).toString());
}

function expressionEquals() {
    this.classList.toggle('toggleBtn');
    operate(exprOperand, previousValue, results.textContent);
}

function toggleOpStyle(){
    ops.forEach(op => {op.classList.remove("toggleBtn")});
    this.classList.toggle("toggleBtn");
    exprOperand = this.textContent;
    if (this.textContent !== '=') previousValue = results.textContent;
}

function add(num1, num2){
    const added = (num1.includes('.') || num2.includes(".")) ? (parseFloat(num1) + parseFloat(num2)).toFixed(2) : (parseInt(num1) + parseInt(num2));
    results.textContent = added.toString();
    resetVars();
}

function substract(num1, num2){
    const subbed = (num1.includes('.') || num2.includes(".")) ? (parseFloat(num1) - parseFloat(num2)).toFixed(2) : (parseInt(num1) - parseInt(num2));
    results.textContent = subbed.toString();
    resetVars();
}

function multiply(num1, num2){
    const multiplied = (num1.includes('.') || num2.includes(".")) ? (parseFloat(num1) * parseFloat(num2)).toFixed(2) : (parseInt(num1) * parseInt(num2));
    console.log(multiplied)
    results.textContent = multiplied.toString();
    resetVars();
}

function divide(num1, num2){
    const divided = (num1.includes('.') || num2.includes(".")) ? (parseFloat(num1) / parseFloat(num2)).toFixed(2) : (parseInt(num1) / parseInt(num2))
    results.textContent = divided.toString();
    resetVars();
}


function operate(op, num1, num2){
    console.log(`OP = ${op}, num1 = ${num1}, num2 = ${num2}`);
    switch(op){
        case '+':
            return add(num1, num2);
        case '-':
            return substract(num1, num2);
        case 'x':
            return multiply(num1, num2);
        case '÷':
            return divide(num1, num2);
        }

    }


function updateDisplay(){
    if (results.textContent.length !== 0 && previousValue !== null && ops.some(op => op.classList.contains('toggleBtn'))) {
        results.textContent = '';
        ops.forEach(op => {op.classList.remove("toggleBtn")});
    } 

    if (results.textContent.length > 9) return;
    if (results.textContent === '0'){
        if (this.textContent === '0') {
            return;
        } else if (this.textContent === '.'){
            return results.textContent += this.textContent;
            
        } else {
            return results.textContent = this.textContent;
        }
    }  else {
        return results.textContent += this.textContent;
    }
    
}

function resetVars() {
    previousValue = null;
    exprOperand = null;
}