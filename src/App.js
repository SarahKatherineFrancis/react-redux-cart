import { useEffect } from "react";
import { useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

// Define the main App component.
function App() {
  // Use the useSelector hook to access the "cartIsVisible" state from the Redux store.
  const showCart = useSelector((state) => state.ui.cartIsVisible); // Get the "cartIsVisible" state from Redux.
  const cart = useSelector((state) => state.cart); // Get the "cart" state from Redux.

  // Use useEffect to send a PUT request to update the cart data on a remote server when the "cart" state changes.
  useEffect(() => {
    fetch("https://react-http-9b836-default-rtdb.firebaseio.com/cart.json", {
      method: "PUT",
      body: JSON.stringify(cart), // Convert the cart data to JSON and send it in the request body.
    });
  }, [cart]); // Run this effect whenever the "cart" state changes.

  // Render the App component within a Layout, conditionally rendering the Cart component based on the "showCart" value.
  return (
    <Layout>
      {showCart && <Cart />}{" "}
      {/* Render the Cart component if "showCart" is true. */}
      <Products />
    </Layout>
  );
}

export default App;
