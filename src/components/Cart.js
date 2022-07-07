import { useEffect, useState } from "react";
// import css module
import styles from "./Cart.module.css";
// import redux states
import { useDispatch, useSelector } from "react-redux";

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
  return (
    <div className={styles.cart + ` start ${fade}`}>
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
