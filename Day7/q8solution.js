// Prompt user to enter how many odd numbers to sum
let n = parseInt(prompt("Enter how many odd numbers to sum:"));

// Initialize variables
let sum = 0;
let expression = "";

// Loop through the first n odd numbers (1 to 2n-1, step 2)
for (let i = 0, odd = 1; i < n; i++, odd += 2) {
    sum += odd;
    expression += (i === 0 ? "" : " + ") + odd;
}

// Display the result
console.log(`Sum of first ${n} odd numbers is ${sum}`);
console.log(`(${expression} = ${sum})`);
