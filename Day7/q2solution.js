// Prompt the user for input
let principal = parseFloat(prompt("Enter Principal Amount:"));
let rate = parseFloat(prompt("Enter Rate of Interest:"));
let years = parseFloat(prompt("Enter No. of Years:"));

// Calculate Simple Interest using the formula: SI = (P × N × R) / 100
let simpleInterest = (principal * rate * years) / 100;

// Display the result, formatted to 2 decimal places
console.log(`Simple Interest = ${simpleInterest.toFixed(2)}`);
