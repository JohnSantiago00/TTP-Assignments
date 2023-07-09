const firstMissingPositive = require("./firstMissingPositive");

// Test cases
describe("firstMissingPositive", () => {
  it("should return the smallest missing positive integer", () => {
    // Test case 1
    const nums1 = [1, 2, 0];
    const result1 = firstMissingPositive(nums1);
    expect(result1).toBe(3);

    // Test case 2
    const nums2 = [3, 4, -1, 1];
    const result2 = firstMissingPositive(nums2);
    expect(result2).toBe(2);
  });
});
