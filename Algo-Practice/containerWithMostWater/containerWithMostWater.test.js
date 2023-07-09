const maxArea = require("./containerWithMostWater");

describe("maxArea", () => {
  it("should return the maximum area of the container - Test Case 1", () => {
    const height1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    const expectedResult1 = 49;
    const result1 = maxArea(height1);
    expect(result1).toEqual(expectedResult1);
  });

  it("should return the maximum area of the container - Test Case 2", () => {
    const height2 = [4, 3, 2, 1, 4];
    const expectedResult2 = 16;
    const result2 = maxArea(height2);
    expect(result2).toEqual(expectedResult2);
  });
});
