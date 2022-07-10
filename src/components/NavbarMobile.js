// import css module
import styles from "./NavbarMobile.module.css";
// import router
import { Link } from "react-router-dom";
// import redux states
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { toThisCategory } from "../store/store.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function NavbarMobile() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav>
      <button>
        <Link className={styles.title} to="/">
          SINSA
        </Link>
      </button>
      <FontAwesomeIcon
        className={styles.menuBar}
        icon={faBars}
        onClick={() => {
          setDropdown((cur) => !cur);
        }}
      />
      {dropdown && <Dropdown setDropdown={setDropdown} />}
    </nav>
  );
}

function Dropdown({ setDropdown }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state;
  });
  const [catDropdown, setCatDropdown] = useState(false);

  const [fade, setFade] = useState("");
  useEffect(() => {
    setFade("end");
    return () => {
      setFade("");
    };
  }, []);

  return (
    <div className={styles.dropDown + ` start ${fade}`}>
      <button
        className={styles.tabContainer}
        onClick={() => setDropdown(false)}
      >
        <Link className={styles.tab} to="/all">
          ALL
        </Link>
      </button>
      <button
        className={styles.tabContainer}
        onClick={() => setCatDropdown((cur) => !cur)}
      >
        <div className={styles.tab}>CATEGORY</div>
      </button>

      {/* CATEGORY DROPDOWN */}
      {catDropdown && (
        <div className={styles.catDropdown}>
          <button
            onClick={() => {
              setDropdown(false);
              dispatch(toThisCategory("men's clothing"));
            }}
          >
            <Link className={styles.link} to="category/men">
              Men's Clothing
            </Link>
          </button>
          <button
            onClick={() => {
              setDropdown(false);
              dispatch(toThisCategory("women's clothing"));
            }}
          >
            <Link className={styles.link} to="category/women">
              Women's Clothing
            </Link>
          </button>
          <button
            onClick={() => {
              setDropdown(false);
              dispatch(toThisCategory("jewelery"));
            }}
          >
            <Link className={styles.link} to="category/jewelery">
              Jewelery
            </Link>
          </button>
          <button
            onClick={() => {
              setDropdown(false);
              dispatch(toThisCategory("electronics"));
            }}
          >
            <Link className={styles.link} to="category/electronics">
              Electronics
            </Link>
          </button>
        </div>
      )}
      {/* CATEGORY DROPDOWN */}

      <button
        className={styles.tabContainer}
        onClick={() => setDropdown(false)}
      >
        <Link className={styles.tab} to="/about">
          ABOUT
        </Link>
      </button>
    </div>
  );
}

export default NavbarMobile;
