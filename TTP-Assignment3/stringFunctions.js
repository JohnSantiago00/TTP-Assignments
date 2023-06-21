function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
function isPalindrome(str) {
  const alphanumericStr = str.replace(/[^a-zA-Z0-9]/g, "");
  const reversedStr = reverseString(alphanumericStr);
  return alphanumericStr.toLowerCase() === reversedStr.toLowerCase();
}

module.exports = {
  reverseString,
  isPalindrome,
};
