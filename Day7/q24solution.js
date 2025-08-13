class AverageCalculator {
  constructor(n) {
    this.n = n;
    this.numbers = [];
  }

  readNumbers() {
    for (let i = 0; i < this.n; i++) {
      let input = prompt(`Enter number ${i + 1}:`);
      let num = parseFloat(input);
      if (isNaN(num)) {
        alert("Invalid number, please enter again.");
        i--; // repeat this iteration
      } else {
        this.numbers.push(num);
      }
    }
  }

  calculateAverage() {
    let sum = 0;
    for (let num of this.numbers) {
      sum += num;
    }
    return sum / this.n;
  }

  displayAverage() {
    const avg = this.calculateAverage();
    console.log(`Average of the numbers: ${avg.toFixed(2)}`);
  }
}

// Main program flow
const nInput = prompt("Enter how many numbers:");
const n = parseInt(nInput);

if (isNaN(n) || n <= 0) {
  console.log("Please enter a valid positive integer.");
} else {
  const avgCalc = new AverageCalculator(n);
  avgCalc.readNumbers();
  avgCalc.displayAverage();
}

    