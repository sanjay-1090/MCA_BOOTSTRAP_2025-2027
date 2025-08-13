// Prompt user for radius
let radius = parseFloat(prompt("Enter Radius of Sphere:"));

// Use Math.PI for better precision
const pi = Math.PI;

// Calculate volume and area
let volume = (4 / 3) * pi * Math.pow(radius, 3);
let area = 4 * pi * Math.pow(radius, 2);

// Display results with 6 decimal places
console.log(`Volume of Sphere: ${volume.toFixed(6)}`);
console.log(`Area of Sphere  : ${area.toFixed(6)}`);

	
