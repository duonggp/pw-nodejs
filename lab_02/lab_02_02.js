const readline = require("readline-sync");

let number = Number(readline.question("Input a number: "));

if (Number.isInteger(number)) {
    let status = (number % 2 === 0) ? "even" : "odd";
    console.log(`The number ${number} is ${status}.`);
} else {
    console.log("Please enter a valid integer.");
}
