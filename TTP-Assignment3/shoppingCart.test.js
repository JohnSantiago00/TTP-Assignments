const {
  addToCart,
  removeFromCart,
  calculateTotal,
  cart,
} = require("./shoppingCart");

describe("Shopping Cart Functions", () => {
  beforeEach(() => {
    cart.length = 0; // Assign an empty array to the cart variable
  });

  describe("addToCart", () => {
    test("adds an item to the cart with the specified quantity and price", () => {
      addToCart("apple", 2, 0.5);
      expect(cart).toEqual([{ name: "apple", quantity: 2, price: 0.5 }]);
    });

    test("increments the quantity of an item if it already exists in the cart", () => {
      addToCart("banana", 1, 0.25);
      addToCart("banana", 3, 0.25);
      expect(cart).toEqual([{ name: "banana", quantity: 4, price: 0.25 }]);
    });
  });
});
