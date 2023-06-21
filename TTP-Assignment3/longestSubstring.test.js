const lengthOfLongestSubstring = require("./longestSubstring");

describe("Longest Substring Without Repeating Characters", () => {
  test("should return the length of the longest substring without repeating characters", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
    expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
    expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
    expect(lengthOfLongestSubstring("abcdefg")).toBe(7);
    expect(lengthOfLongestSubstring("aabbbccdd")).toBe(2);
    expect(lengthOfLongestSubstring("xyzxyzxyz")).toBe(3);
  });
});
