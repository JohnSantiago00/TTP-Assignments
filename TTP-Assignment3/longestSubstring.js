function lengthOfLongestSubstring(str) {
  let maxLength = 0; // Variable to store the length of the longest substring without repeating characters
  let start = 0; // Variable to track the start index of the current substring
  const charMap = new Map(); // Map to store the characters and their indices

  for (let end = 0; end < str.length; end++) {
    const char = str.charAt(end); // Get the current character

    if (charMap.has(char)) {
      // If the character is already present in the charMap, update the start index
      start = Math.max(start, charMap.get(char) + 1);
    }

    charMap.set(char, end); // Store the current character and its index in the charMap
    maxLength = Math.max(maxLength, end - start + 1); // Update the maxLength if necessary
  }

  return maxLength; // Return the length of the longest substring without repeating characters
}

module.exports = lengthOfLongestSubstring;
