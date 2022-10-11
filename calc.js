const results = document.querySelector('.results');
const numbers = [...document.querySelectorAll('.btn-dig')];
const ac = document.querySelector('#ac')

numbers.forEach(number => {number.addEventListener('click', updateDisplay) });
results.addEventListener('DOMSubtreeModified', () => results.textContent.length > 7 ? results.style.fontSize = '70px' : results.style.fontSize = '100px');
// results.addEventListener('DOMSubtreeModified', displayResize);
ac.addEventListener('click', () => results.textContent = '')


// function displayResize(){
//     const maxChars = 10;
//     if(results.textContent.length > 3) results.textContent.replace(/.{2}/g, '$&,');
// }

function add(num1, num2){
    return num1 + num2
}

function substract(num1, num2){
    return num1 - num2
}

function multiply(num1, num2){
    return num1 * num2
}

function divide(num1, num2){
    return num1 / num2
}


function operate(op, num1, num2){
    switch(op){
        case '+':
            return add(num1, num2);
        case '-':
            return substract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        }

    }


function updateDisplay(){
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
        return results.textContent = results.textContent + this.textContent;
    }
    console.log(this.textContent);
    
}
