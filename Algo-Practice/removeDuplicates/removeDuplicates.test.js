const removeDuplicates = require("./removeDuplicates");

// Test cases
describe("removeDuplicates", () => {
  it("should remove duplicates and return the new length - Test Case 1", () => {
    const nums1 = [1, 1, 2, 3, 3, 4, 5, 5, 5];
    const expectedLength1 = 5;
    const result1 = removeDuplicates(nums1);
    expect(result1).toBe(expectedLength1);
  });

  it("should remove duplicates and return the new length - Test Case 2", () => {
    const nums2 = [-1, 0, 0, 0, 3, 3, 7, 7, 9, 9, 9, 9];
    const expectedLength2 = 5;
    const result2 = removeDuplicates(nums2);
    expect(result2).toBe(expectedLength2);
  });
});
