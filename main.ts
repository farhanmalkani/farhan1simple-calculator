#! /usr/bin/env node

import inquirer from "inquirer";

// Asking question from user to inquirer

let answer = await inquirer.prompt([
    {message: "Enter first Number", type: "number", name: "firstNumber"},
    {message: "Enter Second Number",type: "number", name: "secondNumber"},
    {
        message: "Select one of the operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);

// conditional statement
if (answer.operator === "Addition"){
    console.log(answer.firstNumber + answer.secondNumber);
}else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}else if (answer.operator === "Multiplication"){
    console.log(answer.firstNumber * answer.secondNumber);
}else if (answer.operator === "Division"){
    console.log(answer.firstNumber / answer.secondNumber);
}else{
    console.log("please select valid operator")
}