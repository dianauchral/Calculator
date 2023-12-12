document.addEventListener("DOMContentLoaded", function () {
    const input = document.querySelector(".input1");
    const numbers = document.querySelectorAll(".numbers button");
    const functions = document.querySelectorAll(".functions button");

    let currentInput = "";
    let currentOperator = "";
    let firstOperand = "";

    numbers.forEach(function (number) {
        number.addEventListener("click", function () {
            currentInput += number.innerText;
            input.value = currentInput;
        });
    });

    functions.forEach(function (func) {
        func.addEventListener("click", function () {
            if (currentInput !== "") {
                if (firstOperand === "") {
                    firstOperand = currentInput;
                    currentInput = "";
                    currentOperator = func.innerText;
                } else {
                    const result = operate(firstOperand, currentInput, currentOperator);
                    input.value = result;
                    firstOperand = result;
                    currentInput = "";
                    currentOperator = func.innerText;
                }
            }
        });
    });

    document.querySelector(".=").addEventListener("click", function () {
        if (currentInput !== "" && firstOperand !== "") {
            const result = operate(firstOperand, currentInput, currentOperator);
            input.value = result;
            firstOperand = "";
            currentInput = result;
            currentOperator = "";
        }
    });

    document.querySelector(".C").addEventListener("click", function () {
        currentInput = "";
        firstOperand = "";
        currentOperator = "";
        input.value = "";
    });

    function operate(a, b, operator) {
        a = parseFloat(a);
        b = parseFloat(b);

        switch (operator) {
            case "+":
                return a + b;
            case "-":
                return a - b;
            case "*":
                return a * b;
            case "/":
                return a / b;
            default:
                return b;
        }
    }
});
