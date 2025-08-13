// Ask user how many numbers they want to input
let N = parseInt(prompt("Enter how many numbers you want to input:"));

if (isNaN(N) || N <= 0) {
    console.log("Please enter a valid positive number.");
} else {
    // Read the first number and set it as the smallest
    let smallest = parseFloat(prompt("Enter number 1:"));

    // Loop through the remaining N-1 numbers
    for (let i = 2; i <= N; i++) {
        let current = parseFloat(prompt(`Enter number ${i}:`));
        if (current < smallest) {
            smallest = current;
        }
    }

    // Print the smallest number
    console.log(`The smallest number is: ${smallest}`);
}
