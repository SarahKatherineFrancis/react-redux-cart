import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

// Define an asynchronous action to fetch cart data from the server.
export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-9b836-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();

      return data;
    };

    try {
      // Fetch cart data and dispatch an action to replace the current cart state.
      const cartData = await fetchData();
      console.log(cartData);
      dispatch(cartActions.replaceCart(cartData));
    } catch (error) {
      // Show an error notification if fetching cart data fails.
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};

// Export an asynchronous action to send cart data to the server.
export const sendCartData = (cart) => {
  return async (dispatch) => {
    // Show a pending notification while sending cart data.
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      // Send a PUT request to update cart data on the server.
      const response = await fetch(
        "https://react-http-9b836-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      // Check if the request was successful.
      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      // Send cart data to the server and show a success notification.
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      // Show an error notification if sending cart data fails.
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
