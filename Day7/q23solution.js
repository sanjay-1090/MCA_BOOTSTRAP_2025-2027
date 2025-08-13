// Prompt user for number of lines
const n = parseInt(prompt("Enter Number of Lines:"));

if (isNaN(n) || n <= 0) {
  console.log("Please enter a valid positive integer.");
} else {
  for (let i = 1; i <= n; i++) {
    let line = "";

    // Print leading spaces for alignment
    line += " ".repeat(n - i);

    // Print increasing numbers from i to i + i - 1
    for (let inc = i; inc < i + i; inc++) {
      line += inc;
    }

    // Print decreasing numbers from i + i - 2 down to i
    for (let dec = i + i - 2; dec >= i; dec--) {
      line += dec;
    }

    console.log(line);
  }
}
