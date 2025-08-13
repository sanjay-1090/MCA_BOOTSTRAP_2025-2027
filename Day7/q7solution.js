// Get a five-letter word from the user
let word = prompt("Enter a Five letter word:");

// Check if the input is exactly 5 letters
if (word.length !== 5) {
    console.log("Error: Please enter exactly five letters.");
} else {
    let encodedWord = "";

    // Loop through each character, subtract 1 from its ASCII, and build the new string
    for (let i = 0; i < word.length; i++) {
        let asciiValue = word.charCodeAt(i);       // Get ASCII value
        let newChar = String.fromCharCode(asciiValue - 1); // Subtract 1 and convert back to char
        encodedWord += newChar;
    }

    // Display the encoded word
    console.log("Encoded Word:", encodedWord);
}
