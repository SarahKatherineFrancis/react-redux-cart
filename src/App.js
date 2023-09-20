import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { uiActions } from "./store/ui-slice";
import Notification from "./components/UI/Notification";

// Define a flag to track the initial render.
let isInitial = true;

// Define the main App component.
function App() {
  // Access the Redux dispatch function.
  const dispatch = useDispatch();

  // Access various pieces of state from the Redux store.
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  // Use useEffect to handle cart data updates.
  useEffect(() => {
    // Function to send cart data to a remote server.
    const sendCartData = async () => {
      // Show a pending notification.
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data!",
        })
      );

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

      // Show a success notification.
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    };

    // Skip the initial render.
    if (isInitial) {
      isInitial = false;
      return;
    }

    // Call the sendCartData function and handle errors with notifications.
    sendCartData().catch((error) => {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    });
  }, [cart, dispatch]); // Run this effect whenever the "cart" state changes.

  // Render the App component within a Layout, conditionally rendering the Cart component based on the "showCart" value.
  return (
    <>
      {/* Render notifications if there are any */}
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}{" "}
        {/* Render the Cart component if "showCart" is true. */}
        <Products />
      </Layout>
    </>
  );
}

export default App;
