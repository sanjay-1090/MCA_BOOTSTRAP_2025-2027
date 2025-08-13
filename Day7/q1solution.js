// Prompt the user for radius
let radius = parseFloat(prompt("Enter Radius of Circle:"));

// Calculate the area using the formula: π * r² (using 22/7 as π)
let area = (22.0 / 7) * radius * radius;

// Format output to 4 decimal places
console.log(`Area of Circle with Radius ${radius.toFixed(4)} is ${area.toFixed(4)}`);
