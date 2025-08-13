// Prompt user to input a line of text
let text = prompt("Enter the text below:");

// Initialize counters
let letters = 0;
let digits = 0;
let spaces = 0;
let others = 0;

// Loop through each character
for (let i = 0; i < text.length; i++) {
    let ch = text.charAt(i);

    if (/[a-zA-Z]/.test(ch)) {
        letters++;
    } else if (/[0-9]/.test(ch)) {
        digits++;
    } else if (ch === ' ') {
        spaces++;
    } else {
        others++;
    }
}

// Display counts
console.log(`Letters : ${letters}`);
console.log(`Digits : ${digits}`);
console.log(`Space Chars : ${spaces}`);
console.log(`Others : ${others}`);
