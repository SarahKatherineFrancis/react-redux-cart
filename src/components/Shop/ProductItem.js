import { useDispatch } from "react-redux";

import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartActions } from "../../store/cart-slice";

// ProductItem component represents an individual product item.
const ProductItem = (props) => {
  // Destructure props to access relevant product details.
  const { title, price, description, id } = props;

  // Initialize the dispatch function using the useDispatch hook.
  const dispatch = useDispatch();

  // addToCartHandler function dispatches an action to add the product to the cart.
  const addToCartHandler = () => {
    // Dispatch the "addItemToCart" action from the "cartActions" object with product details.
    dispatch(cartActions.addItemToCart({ id, title, price }));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
