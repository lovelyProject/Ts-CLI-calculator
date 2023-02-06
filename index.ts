import { question } from "readline-sync";

type Operator = "+" | "-" | "*" | "/";

function main(): void {
    let firstStr: string = question("Enter the first num: \n");
    const operator: string = question("Enter the operator: \n");
    let secondStr: string = question("Enter the second number: \n");

    const validInput: boolean = isNumber(firstStr) && isNumber(secondStr) && isOperator(operator);

    if (validInput) {
        console.log(calculate(firstStr, operator as Operator, secondStr));
    } else {
        console.log("Invalid Input");
        main();
    }
}

function calculate(firstStr: string, operator: Operator, secondStr: string): number {
    switch (operator) {
        case "+": {
            return +firstStr + +secondStr;
        };
        case "-": {
            return +firstStr - +secondStr;
        };
        case "*": {
            return +firstStr * +secondStr;
        };
        case "/": {
            return +firstStr / +secondStr;
        }
    }
}
function isOperator(operator: string): boolean {
    return operator === "+" || operator === "-" || operator === "*" || operator === "/";
}

function isNumber(str: string): boolean {
    const maybeNum: string | number = parseInt(str);
    const isNumb: boolean = Boolean(isNaN(maybeNum));

    return !isNumb;
}
main();
