const prompt = require('prompt-sync')({sigint: true}); // For user input in Node.js

// Prompt user for input
const flag = parseInt(prompt("Enter Heat code (1-3): "));

let heatStatus;

switch (flag) {
    case 1:
        heatStatus = "HOT";
        break;
    case 2:
        heatStatus = "LUKE WARM";
        break;
    case 3:
        heatStatus = "COLD";
        break;
    default:
        heatStatus = "OUT OF RANGE";
}

console.log(`Flag ${flag} is ${heatStatus}`);
