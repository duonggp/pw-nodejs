let intArr = [1, 2, 3, 4, 5];

let minValue = intArr[0];
let maxValue = intArr[0];

for (let i = 1; i < intArr.length; i++) {
    if (intArr[i] < minValue) {
        minValue = intArr[i];
    }
    if (intArr[i] > maxValue) {
        maxValue = intArr[i];
    }
}

console.log(`Minimum: ${minValue}`);
console.log(`Maximum: ${maxValue}`);
