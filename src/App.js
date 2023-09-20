import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { sendCartData } from "./store/cart-slice";

// Define a flag to track the initial render.
let isInitial = true;

// Define the main App component.
function App() {
  // Access the Redux dispatch function.
  const dispatch = useDispatch();

  // Access various pieces of state from the Redux store.
  const showCart = useSelector((state) => state.ui.cartIsVisible); // Get the cart visibility state.
  const cart = useSelector((state) => state.cart); // Get the cart data.
  const notification = useSelector((state) => state.ui.notification); // Get notification data.

  // Use useEffect to handle cart data updates.
  useEffect(() => {
    // Skip the initial render where isInitial is true.
    if (isInitial) {
      isInitial = false;
      return;
    }

    // Dispatch an action to send cart data to the server when the cart state changes.
    dispatch(sendCartData(cart));
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
        {/* Render the Cart component if "showCart" is true. */}
        {showCart && <Cart />} {/* Conditionally render the Cart component. */}
        <Products />
      </Layout>
    </>
  );
}

export default App;
