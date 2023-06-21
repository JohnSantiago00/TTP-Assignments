const twoSum = require("./twoSum");

describe("Two Sum", () => {
  test("should return indices of two numbers that add up to the target", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
    expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4]);
  });

  test("should return an empty array if no two numbers add up to the target", () => {
    expect(twoSum([1, 2, 3, 4, 5], 10)).toEqual([]);
    expect(twoSum([2, 4, 6, 8], 1)).toEqual([]);
    expect(twoSum([-1, -2, -3, -4, -5], 0)).toEqual([]);
  });
});
