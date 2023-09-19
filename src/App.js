import { UseSelector, useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

// Define the main App component.
function App() {
  // Use the useSelector hook to access the "cartIsVisible" state from the Redux store.
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  // Render the App component within a Layout, conditionally rendering the Cart component based on the "showCart" value.
  return (
    <Layout>
      {showCart && <Cart />}{" "}
      {/* Render the Cart component if "showCart" is true. */}
      <Products /> {/* Always render the Products component. */}
    </Layout>
  );
}

export default App;
