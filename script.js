function firstNonRepeatedChar(str) {
  const freq = {};

  // Count frequency of each character
  for (const char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  // Find the first character with frequency 1
  for (const char of str) {
    if (freq[char] === 1) {
      return char;
    }
  }

  return null;
}

// Take user input
const input = prompt("Enter a string:");

// Show the result
const result = firstNonRepeatedChar(input);
alert(result !== null ? result : "null");
