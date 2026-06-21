const prompt = require("prompt-sync")();

let choice;

do {
    console.log("\n---##### CALCULATOR #####---");
    console.log("+ : Addition");
    console.log("- : Subtraction");
    console.log("* : Multiplication");
    console.log("/ : Division");
    console.log("E : Exit");

    choice = prompt("Enter operation ");

    if (choice === "E" || choice === "e") {
        console.log("Exiting Calculator");
        break;
    }

    if (
        choice !== "+" &&
        choice !== "-" &&
        choice !== "*" &&
        choice !== "/"
    ) {
        console.log("Invalid operation!");
        continue;
    }

    let num1 = Number(prompt("Enter first number: "));
    let num2 = Number(prompt("Enter second number: "));


    if (isNaN(num1) || isNaN(num2)) {
        console.log("Invalid input! Please enter numbers only.");
        continue;
    }

    let result;

    if (choice === "+") {
        result = num1 + num2;
    }
    else if (choice === "-") {
        result = num1 - num2;
    }
    else if (choice === "*") {
        result = num1 * num2;
    }
    else if (choice === "/") {
        if (num2 === 0) {
            console.log("Cannot divide by zero!");
            continue;
        }
        result = num1 / num2;
    }

    console.log("Result = " + result);

} while (true);