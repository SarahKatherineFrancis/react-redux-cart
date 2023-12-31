import { createSlice } from "@reduxjs/toolkit";

// Create a Redux slice named "uiSlice" using the createSlice function.
const uiSlice = createSlice({
  // Specify the name of the slice, which will be used to generate action type strings.
  name: "ui",

  // Define the initial state for this slice, including a boolean flag "cartIsVisible."
  initialState: { cartIsVisible: false, notification: null },

  // Define a set of reducer functions to handle state changes.
  reducers: {
    // Define a "toggle" reducer function that takes the current state as an argument.
    toggle(state) {
      // In this reducer, toggle the "cartIsVisible" value by negating it (switching between true and false).
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

// Export the action creators generated by the "uiSlice" slice to be used in the application.
export const uiActions = uiSlice.actions;

// Export the "uiSlice" itself, which includes the reducer and action creators.
export default uiSlice;
