results = document.querySelector('.results');
numbers = document.querySelectorAll('.btn-dig');


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


