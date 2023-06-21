const { add, subtract, multiply, divide } = require("./mathFunctions");

describe("Math Functions", () => {
  describe("add", () => {
    test("adds two positive numbers correctly", () => {
      expect(add(2, 3)).toEqual(5);
    });

    test("adds a positive and a negative number correctly", () => {
      expect(add(5, -3)).toEqual(2);
    });

    test("adds two negative numbers correctly", () => {
      expect(add(-4, -2)).toEqual(-6);
    });
  });

  describe("subtract", () => {
    test("subtracts two positive numbers correctly", () => {
      expect(subtract(5, 3)).toEqual(2);
    });

    test("subtracts a positive and a negative number correctly", () => {
      expect(subtract(2, -3)).toEqual(5);
    });

    test("subtracts two negative numbers correctly", () => {
      expect(subtract(-4, -2)).toEqual(-2);
    });
  });

  describe("multiply", () => {
    test("multiplies two positive numbers correctly", () => {
      expect(multiply(2, 3)).toEqual(6);
    });

    test("multiplies a positive and a negative number correctly", () => {
      expect(multiply(5, -3)).toEqual(-15);
    });

    test("multiplies two negative numbers correctly", () => {
      expect(multiply(-4, -2)).toEqual(8);
    });
  });

  describe("divide", () => {
    test("divides two positive numbers correctly", () => {
      expect(divide(6, 3)).toEqual(2);
    });

    test("divides a positive number by a negative number correctly", () => {
      expect(divide(10, -2)).toEqual(-5);
    });

    test("throws an error when dividing by zero", () => {
      expect(() => {
        divide(8, 0);
      }).toThrow("Division by zero is not allowed.");
    });
  });
});
