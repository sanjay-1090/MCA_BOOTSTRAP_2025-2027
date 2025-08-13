// Prompt the user to enter the temperature
const input = prompt("Enter the water temperature:");

// Convert the input to a number
const temp = parseFloat(input);

// Variable to store the water state
let state;

if (isNaN(temp)) {
  console.log("Please enter a valid number for temperature.");
} else {
  if (temp < 0) {
    state = "ICE";
  } else if (temp <= 100) {
    state = "WATER";
  } else {
    state = "STEAM";
  }

  // Display the result with 2 decimal places
  console.log(`Water status is ${state} for the Temperature ${temp.toFixed(2)}`);
}
