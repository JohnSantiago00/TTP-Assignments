const findDuplicates = require("./findDuplicates");

// Test cases
describe("findDuplicates", () => {
  it("should return an array containing the duplicate elements", () => {
    // Test case 1
    const nums1 = [4, 3, 2, 7, 8, 2, 3, 1];
    const result1 = findDuplicates(nums1);
    expect(result1).toEqual(expect.arrayContaining([2, 3]));

    // Test case 2
    const nums2 = [1, 1, 2];
    const result2 = findDuplicates(nums2);
    expect(result2).toEqual(expect.arrayContaining([1]));
  });
});
