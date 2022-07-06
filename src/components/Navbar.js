// import css module
import styles from "./Navbar.module.css";
// import router
import { Link } from "react-router-dom";
// import redux states
import { useDispatch } from "react-redux";
import { changeCart } from "../store/store";

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
            <b>All</b>
          </Link>
        </button>
        <button>
          <Link className={styles.tab} to="/category">
            <b>Category</b>
          </Link>
        </button>
        <button>
          <Link className={styles.tab} to="/about">
            <b>About</b>
          </Link>
        </button>
      </div>
      <button
        onClick={() => {
          dispatch(changeCart());
        }}
        className={styles.tab}
      >
        <b>CART</b>
      </button>
    </nav>
  );
}

export default Navbar;
