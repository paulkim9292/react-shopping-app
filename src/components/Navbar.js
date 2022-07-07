// import css module
import styles from "./Navbar.module.css";
// import router
import { Link } from "react-router-dom";
// import redux states
import { useDispatch } from "react-redux";
import { changeCart, changeMouseCat } from "../store/store";

function Navbar() {
  const dispatch = useDispatch();
  return (
    <nav>
      <div className={styles.navLeft}>
        <button>
          <Link className={styles.title} to="/">
            SINSA
          </Link>
        </button>
        <button>
          <Link className={styles.tab} to="/">
            All
          </Link>
        </button>
        <button onClick={() => dispatch(changeMouseCat())}>
          <div className={styles.tab}>Category</div>
        </button>
        <button>
          <Link className={styles.tab} to="/about">
            About
          </Link>
        </button>
      </div>
      <button
        onClick={() => {
          dispatch(changeCart());
        }}
        className={styles.tab}
      >
        CART
      </button>
    </nav>
  );
}

export default Navbar;
