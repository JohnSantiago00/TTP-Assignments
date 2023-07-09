const twoSum = require("./twoSum");

// Test cases
describe("twoSum", () => {
  it("should return the indices of the two numbers that add up to the target - Test Case 1", () => {
    const numbers1 = [2, 7, 11, 15];
    const target1 = 9;
    const expectedResult1 = [1, 2];
    const result1 = twoSum(numbers1, target1);
    expect(result1).toEqual(expectedResult1);
  });

  it("should return the indices of the two numbers that add up to the target - Test Case 2", () => {
    const numbers2 = [-2, 0, 3, 7, 11, 15];
    const target2 = 9;
    const expectedResult2 = [1, 5];
    const result2 = twoSum(numbers2, target2);
    expect(result2).toEqual(expectedResult2);
  });
});
