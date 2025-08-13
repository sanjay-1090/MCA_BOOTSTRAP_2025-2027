// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;

  // Check divisibility up to the square root of num
  const limit = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= limit; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Prompt user for how many prime numbers to print
const n = parseInt(prompt("How many Prime numbers?"));

if (isNaN(n) || n <= 0) {
  console.log("Please enter a valid positive integer.");
} else {
  let count = 0;
  let number = 2;
  const primes = [];

  // Keep checking numbers until we find n primes
  while (count < n) {
    if (isPrime(number)) {
      primes.push(number);
      count++;
    }
    number++;
  }

  // Print all primes space-separated
  console.log(primes.join(" "));
}
