// Initialize an empty array to serve as the shopping cart
let cart = [];

// Function to add an item to the cart with the specified quantity and price
function addToCart(item, quantity, price) {
  // Check if the item already exists in the cart
  const existingItem = cart.find((cartItem) => cartItem.name === item);

  if (existingItem) {
    // If the item exists, increment the quantity
    existingItem.quantity += quantity;
  } else {
    // If the item does not exist, create a new object and push it to the cart array
    cart.push({ name: item, quantity, price });
  }
}

// Function to remove a specified quantity of an item from the cart
function removeFromCart(item, quantity) {
  // Check if the item exists in the cart
  const existingItem = cart.find((cartItem) => cartItem.name === item);

  if (!existingItem) {
    // If the item does not exist, return early
    return;
  }

  // Subtract the quantity from the existing item's quantity
  existingItem.quantity -= quantity;

  if (existingItem.quantity <= 0) {
    // If the quantity becomes zero or negative, remove the item from the cart
    cart = cart.filter((cartItem) => cartItem.name !== item);
  }
}

// Function to calculate the total cost of all items in the cart
function calculateTotal() {
  let total = 0;

  // Iterate over each item in the cart
  for (const item of cart) {
    // Calculate the total cost of the item and add it to the total variable
    total += getItemTotal(item);
  }

  return total;
}

// Function to calculate the total cost of an item
function getItemTotal(item) {
  // Multiply the quantity of the item by its corresponding price
  return item.quantity * item.price;
}

module.exports = {
  addToCart,
  removeFromCart,
  calculateTotal,
  cart,
};
