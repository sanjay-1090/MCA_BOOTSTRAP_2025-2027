// Read n from the user
let n = parseInt(prompt("Enter the N value:"));

// Initialize factorial variable
let fact = 1;

// Print table header
console.log("N   |   Factorial");
console.log("--------------------");

// Loop from 1 to n
for (let i = 1; i <= n; i++) {
    fact *= i;
    
    // Format output with padding for cleaner alignment
    let nStr = i.toString().padEnd(3);
    let factStr = fact.toString().padStart(10);
    
    console.log(`${nStr}|${factStr}`);
}
