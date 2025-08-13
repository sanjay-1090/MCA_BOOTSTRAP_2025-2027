// Initialize sum and expression string
let sum = 0;
let expression = "";

// Loop from 2 to 30
for (let i = 2; i <= 30; i++) {
    if (i % 2 === 0) {
        sum += i;
        expression += (expression ? " + " : "") + i;
    }
}

// Display the result
console.log(`Sum of even numbers from 2 to 30 = ${sum}`);
console.log(`(Even numbers: ${expression} = ${sum})`);
``
