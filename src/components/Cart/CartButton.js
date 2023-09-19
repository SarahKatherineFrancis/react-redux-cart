import { useDispatch, useSelector } from "react-redux";

import classes from "./CartButton.module.css";
import { uiActions } from "../../store/ui-slice";

// Define the CartButton component.
const CartButton = (props) => {
  // Initialize the dispatch function using the useDispatch hook.
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  // Define a function to handle the click event and toggle the cart visibility using Redux.
  const toggleCartHandler = () => {
    // Dispatch the "toggle" action from the "uiActions" object to toggle the cart visibility in the Redux store.
    dispatch(uiActions.toggle());
  };

  // Render a button element with a click event handler to toggle the cart visibility.
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span> {/* Display "My Cart" text */}
      <span className={classes.badge}>{cartQuantity}</span>{" "}
      {/* Display a badge (e.g., cart item count) */}
    </button>
  );
};

export default CartButton;
