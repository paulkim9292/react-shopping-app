import { useEffect } from "react";
// import css module
import styles from "./Cart.module.css";
// import redux states
import { useDispatch, useSelector } from "react-redux";
import { fadeEffect, resetFade } from "../store/store";

function Cart() {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state;
  });
  useEffect(() => {
    dispatch(fadeEffect());
  });
  useEffect(() => {
    dispatch(resetFade());
  }, []);
  return (
    <div className={styles.cart + ` start${state.fade}`}>
      <h4>
        <b>Shopping Cart</b>
      </h4>
      <button>Remove all</button>

      <p>Sub-Total: ${}</p>
      <button>Checkout</button>
    </div>
  );
}

export default Cart;
