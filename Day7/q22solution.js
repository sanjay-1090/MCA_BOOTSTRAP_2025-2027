// Prompt user for number of lines
const n = parseInt(prompt("How many Lines?"));

if (isNaN(n) || n <= 0) {
  console.log("Please enter a valid positive integer.");
} else {
  for (let i = 1; i <= n; i++) {
    // Print n - i spaces
    let line = " ".repeat(n - i);

    // Print i stars
    line += "*".repeat(i);

    console.log(line);
  }
}
