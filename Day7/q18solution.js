// Prompt the user to enter a string
const text = prompt("Enter the string below:");

// Initialize an empty string for the reversed text
let reverseText = "";

// Use two indices: i for text (from end to start), j for reverseText (not really needed here but to follow instruction)
for (let i = text.length - 1, j = 0; i >= 0; i--, j++) {
  reverseText += text.charAt(i);
}

// Print the reversed string
console.log("Reversed Text: " + reverseText);
