import { useEffect, useState } from "react";
// import css module
import styles from "./Cart.module.css";
// import redux states
import { useDispatch, useSelector } from "react-redux";
import {
  deleteFromCart,
  deleteQuantity,
  addQuantity,
  subQuantity,
  removeCartQuantity,
  removeCart,
} from "../store/store.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function Cart() {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state;
  });
  const [fade, setFade] = useState("");

  useEffect(() => {
    setFade("end");
    return () => {
      setFade("");
    };
  }, []);

  useEffect(() => {
    state.cartQuantity.map((value, index) => {
      if (value === 0) {
        dispatch(deleteQuantity(index));
        dispatch(deleteFromCart(index));
      }
    });
  }, [state.cartQuantity]);

  return (
    <div className={styles.cart + ` start ${fade}`}>
      <h4 className={styles.cartTitle}>Shopping Cart</h4>
      {state.cart.map((value, index) => {
        return (
          <div className={styles.itemContainer}>
            <div className={styles.imgContainer}>
              <img src={value.image} />
            </div>
            <div className={styles.titleAndPrice}>
              <div>{value.title}</div>
              <div>{`$${value.price * state.cartQuantity[index]}`}</div>
            </div>
            <div className={styles.quantity}>
              <FontAwesomeIcon
                className={styles.plusMinus}
                icon={faMinus}
                onClick={() => {
                  dispatch(subQuantity(index));
                }}
              />
              <div className={styles.num}>{state.cartQuantity[index]}</div>
              <FontAwesomeIcon
                className={styles.plusMinus}
                icon={faPlus}
                onClick={() => {
                  dispatch(addQuantity(index));
                }}
              />
            </div>
          </div>
        );
      })}
      <div className={styles.removeAndTotal}>
        <button
          onClick={() => {
            dispatch(removeCart());
            dispatch(removeCartQuantity());
          }}
        >
          Remove all
        </button>

        <p>{`Total: $${
          Math.floor(
            state.cart.reduce(
              (total, item, index) =>
                total + item.price * state.cartQuantity[index],
              0
            ) * 100
          ) / 100
        }`}</p>
      </div>
      <button className={styles.checkout}>Checkout</button>
    </div>
  );
}

export default Cart;
