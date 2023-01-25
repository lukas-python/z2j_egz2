function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if (number2 === 0) {
        return "Nie dziel przez zero";
    }
    else {
        return number1 / number2;
    }
}

function modulo(number1, number2) {
    return number1 % number2;
}

let isCounting = true;
let result = 0;
let num1 = Number(prompt("Podaj pierwszą liczbę: "));

while (isCounting === true) {
    let operator = prompt("Podaj operator arytemtyczny (+, -, *, /, %): ");
    if (operator) {
        let num2 = Number(prompt("Podaj kolejną liczbę: "));
        function operations() {
            if (operator === "+") {
                return add(num1, num2);
            }
            else if (operator === "-") {
                return subtract(num1, num2);
            }
            else if (operator === "*") {
                return multiply(num1, num2);
            }
            else if (operator === "/") {
                return divide(num1, num2);
            }
            else if (operator === "%") {
                return modulo(num1, num2);
            }
        }
        result = operations();
        alert(result);
        num1 = result;
        isCounting === true;
    }
    else {
        isCounting === false;
        break;
    }

}