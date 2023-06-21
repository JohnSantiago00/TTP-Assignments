const { reverseString, isPalindrome } = require("./stringFunctions");

describe("String Functions", () => {
  describe("reverseString", () => {
    test("reverses a string correctly", () => {
      expect(reverseString("hello")).toEqual("olleh");
    });

    test("returns an empty string when given an empty string", () => {
      expect(reverseString("")).toEqual("");
    });
  });

  describe("isPalindrome", () => {
    test("returns true for a palindrome string", () => {
      expect(isPalindrome("level")).toEqual(true);
    });

    test("returns false for a non-palindrome string", () => {
      expect(isPalindrome("hello")).toEqual(false);
    });

    test("returns true for an empty string", () => {
      expect(isPalindrome("")).toEqual(true);
    });

    test("ignores capitalization and returns true for a case-insensitive palindrome string", () => {
      expect(isPalindrome("Racecar")).toEqual(true);
    });

    test("returns true for a palindrome string with special characters", () => {
      expect(isPalindrome("A man, a plan, a canal. Panama!")).toEqual(true);
    });
  });
});
