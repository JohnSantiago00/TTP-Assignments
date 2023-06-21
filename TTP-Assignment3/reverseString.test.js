const reverseString = require("./reverseString");

describe("Reverse String", () => {
  test("should return the reverse of the string", () => {
    expect(reverseString("hello")).toBe("olleh");
    expect(reverseString("racecar")).toBe("racecar");
  });

  test("should return an empty string when given an empty string", () => {
    expect(reverseString("")).toBe("");
  });
});
