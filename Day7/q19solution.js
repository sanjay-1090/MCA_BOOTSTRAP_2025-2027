// Prompt user to enter how many numbers they want to multiply
const n = parseInt(prompt("Enter the count of numbers:"));

if (isNaN(n) || n <= 0) {
  console.log("Please enter a valid positive integer for the count.");
} else {
  let product = 1;

  // Loop to input numbers and multiply
  for (let i = 0; i < n; i++) {
    const numInput = prompt(`Enter number ${i + 1}:`);
    const num = parseFloat(numInput);

    if (isNaN(num)) {
      console.log(`Invalid number entered at position ${i + 1}, treating as 1.`);
      // You can decide to break or continue, here we'll continue assuming 1
      continue;
    }

    product *= num;
  }

  console.log(`Cumulative Total = ${product}`);
}
