import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./ui-slice";

// Create a Redux store using the `configureStore` function.
const store = configureStore({
  // Configure the store with a reducer object. In this case, the "ui" slice reducer is added under the "ui" key.
  reducer: { ui: uiSlice.reducer },
});

export default store;
