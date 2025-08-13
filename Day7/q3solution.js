// Get user input
let principal = parseFloat(prompt("Enter Principal Value:"));
let rate = parseFloat(prompt("Enter Rate of Interest:"));
let years = parseFloat(prompt("Enter No. of Years:"));

// Calculate interest rate (i = R / 100)
let i = rate / 100;

// Calculate final amount using compound interest formula: F = P * (1 + i)^n
let finalAmount = principal * Math.pow((1 + i), years);

// Display final compound amount, formatted to 2 decimal places
console.log(`Compound Interest ${finalAmount.toFixed(2)}`);
