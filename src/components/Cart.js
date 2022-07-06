import { useEffect, useState } from "react";
// import css module
import styles from "./Cart.module.css";

function Cart() {
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
