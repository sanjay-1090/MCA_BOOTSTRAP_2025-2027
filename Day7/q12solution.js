// Prompt the user to enter 5 numbers separated by spaces
let input = prompt("Enter 5 Numbers in a same line (1–30):");

// Split input string into array and convert to numbers
let numbers = input.split(" ").map(Number);

// Check if exactly 5 numbers were entered
if (numbers.length !== 5) {
    console.log("Error: Please enter exactly 5 numbers.");
} else {
    // Loop through each number
    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];

        // Validate range
        if (num < 1 || num > 30) {
            console.log(`${num} (Invalid: must be between 1 and 30)`);
            continue;
        }

        // Create a string of asterisks
        let stars = "*".repeat(num);

        // Print the number followed by the asterisks
        console.log(`${num} ${stars}`);
    }
}
