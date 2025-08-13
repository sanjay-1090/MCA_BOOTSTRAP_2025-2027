// Prompt the user to enter a color code character
const input = prompt("Enter Color code character:");

// Extract the first character and convert it to lowercase for easier comparison
const colour = input ? input.charAt(0).toLowerCase() : '';

// Variable to store the color name
let colorName;

switch (colour) {
  case 'r':
    colorName = "RED";
    break;
  case 'g':
    colorName = "GREEN";
    break;
  case 'b':
    colorName = "BLUE";
    break;
  default:
    colorName = "BLACK";
    break;
}

// Print the result
console.log(`Color Code ${input} is ${colorName}`);
