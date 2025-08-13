// Initialize product and expression string
let product = 1;
let expression = "";

// Loop from 1 to 15, stepping by 2 to get odd numbers
for (let i = 1; i <= 15; i += 2) {
    product *= i;
    expression += (expression ? " × " : "") + i;
}

// Display the result
console.log(`Product of odd numbers from 1 to 15 = ${product}`);
console.log(`(Odd numbers: ${expression} = ${product})`);
