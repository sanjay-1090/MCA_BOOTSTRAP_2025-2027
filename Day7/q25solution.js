class SecondLargestFinder {
  constructor(n) {
    this.n = n;
    this.numbers = [];
  }

  readNumbers() {
    for (let i = 0; i < this.n; i++) {
      let input = prompt(`Enter number ${i + 1}:`);
      let num = parseInt(input);
      if (isNaN(num)) {
        alert("Invalid number, please enter again.");
        i--; // retry this iteration
      } else {
        this.numbers.push(num);
      }
    }
  }

  findSecondLargest() {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (const num of this.numbers) {
      if (num > largest) {
        secondLargest = largest;
        largest = num;
      } else if (num > secondLargest && num < largest) {
        secondLargest = num;
      }
    }

    if (secondLargest === -Infinity) {
      return null; // no second largest found (all equal)
    }
    return secondLargest;
  }

  displayResult() {
    const secondLargest = this.findSecondLargest();
    if (secondLargest === null) {
      console.log("No second largest number found (all numbers might be equal).");
    } else {
      console.log(`Second largest number is: ${secondLargest}`);
    }
  }
}

// Main program flow
const nInput = prompt("Enter how many numbers:");
const n = parseInt(nInput);

if (isNaN(n) || n < 2) {
  console.log("Please enter a valid number greater than or equal to 2.");
} else {
  const finder = new SecondLargestFinder(n);
  finder.readNumbers();
  finder.displayResult();
}
