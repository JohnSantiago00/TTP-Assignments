const missingNumber = require("./findMissingNumber");

describe("missingNumber", () => {
  it("should return the missing number in the array", () => {
    const nums1 = [3, 0, 1];
    const result1 = missingNumber(nums1);
    expect(result1).toBe(2);

    const nums2 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
    const result2 = missingNumber(nums2);
    expect(result2).toBe(8);
  });
});
