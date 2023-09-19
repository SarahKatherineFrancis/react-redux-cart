import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";

// Create a Redux store using the `configureStore` function.
const store = configureStore({
  // Configure the store with a reducer object.
  // Each slice reducer is added under its corresponding key.
  // The "ui" slice reducer is added under the "ui" key, and the "cart" slice reducer is added under the "cart" key.
  reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
});

export default store;
