// Get input from user (in Fahrenheit)
let fahrenheit = parseFloat(prompt("Enter temperature in Fahrenheit:"));

// Convert to Celsius using the formula
let celsius = (5 / 9.0) * (fahrenheit - 32);

// Display result with 6 decimal places
console.log(`${fahrenheit.toFixed(6)} deg F is ${celsius.toFixed(6)} deg C`);
