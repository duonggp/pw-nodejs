const readline = require("readline-sync");

let height = Number(readline.question("Input your height in meters: "));
let weight = Number(readline.question("Input your weight in kilograms: "));

const bmi = weight / (height * height);

let weightStatus;
if (bmi < 18.5) {
    weightStatus = "underweight";
} else if (bmi <= 24.9) {
    weightStatus = "normal weight";
} else if (bmi <= 29.9) {
    weightStatus = "overweight";
} else {
    weightStatus = "obesity";
}

console.log(`Your BMI is: ${bmi.toFixed(2)}. You are ${weightStatus}.`);
