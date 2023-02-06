"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = require("readline-sync");
function main() {
    let firstStr = (0, readline_sync_1.question)("Enter the first num: \n");
    const operator = (0, readline_sync_1.question)("Enter the operator: \n");
    let secondStr = (0, readline_sync_1.question)("Enter the second number: \n");
    const validInput = isNumber(firstStr) && isNumber(secondStr) && isOperator(operator);
    if (validInput) {
        console.log(calculate(firstStr, operator, secondStr));
    }
    else {
        console.log("Invalid Input");
        main();
    }
}
function calculate(firstStr, operator, secondStr) {
    switch (operator) {
        case "+":
            {
                return +firstStr + +secondStr;
            }
            ;
        case "-":
            {
                return +firstStr - +secondStr;
            }
            ;
        case "*":
            {
                return +firstStr * +secondStr;
            }
            ;
        case "/": {
            return +firstStr / +secondStr;
        }
    }
}
function isOperator(operator) {
    return operator === "+" || operator === "-" || operator === "*" || operator === "/";
}
function isNumber(str) {
    const maybeNum = parseInt(str);
    const isNumb = Boolean(isNaN(maybeNum));
    return !isNumb;
}
main();
