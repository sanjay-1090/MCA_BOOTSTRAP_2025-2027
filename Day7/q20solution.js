// Prompt user to enter the number of Fibonacci terms
const n = parseInt(prompt("How many Fibonacci terms?"));

if (isNaN(n) || n <= 0) {
  console.log("Please enter a valid positive integer.");
} else {
  let f1 = 1, f2 = 1;
  let result = [];

  if (n === 1) {
    result.push(f1);
  } else if (n >= 2) {
    result.push(f1, f2);

    for (let i = 3; i <= n; i++) {
      const f = f1 + f2;
      result.push(f);

      // Shift values for next round
      f1 = f2;
      f2 = f;
    }
  }

  console.log(result.join(" "));
}
