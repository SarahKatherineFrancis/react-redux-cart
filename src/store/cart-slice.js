import { createSlice } from "@reduxjs/toolkit";

// Create a Redux slice for managing the "cart" state.
createSlice({
  // Specify the name of the slice, which will be used to generate action type strings.
  name: "cart",

  // Define the initial state for this slice, including an empty "items" array and a "totalQuanity" set to 0.
  initialState: { items: [], totalQuanity: 0 },

  // Define a set of reducer functions to handle state changes.
  reducers: {
    // Define the "addItemToCart" reducer function that takes the current state and an action as arguments.
    addItemToCart(state, action) {
      // Extract the new item from the action payload.
      const newItem = action.payload;

      // Check if the item already exists in the cart by looking for an item with the same "id."
      const existingItem = state.items.find(
        (item) => item.itemId === newItem.id
      );

      // If the item doesn't exist in the cart, add it as a new item.
      if (!existingItem) {
        state.items.push({
          itemId: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
        });
      } else {
        // If the item already exists in the cart, increment its quantity and update the total price.
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    // Define the "removeItemFromCart" reducer function (currently empty) for potential future use.
    removeItemFromCart(state) {},
  },
});