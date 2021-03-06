import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  return (
    <button className={classes.button} onClick={props.onCartModalOpen}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>
        {cartCtx.items.reduce(
          (currentNum, item) => currentNum + item.amount,
          0
        )}
      </span>
    </button>
  );
};

export default HeaderCartButton;
