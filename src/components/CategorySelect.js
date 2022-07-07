import styles from "./CategorySelect.module.css";
import { Link } from "react-router-dom";
// import redux states
import { useDispatch } from "react-redux";
import { toThisCategory } from "../store/store.js";
import { useEffect, useState } from "react";

function CategorySelect() {
  const dispatch = useDispatch();
  const [fade, setFade] = useState("");
  useEffect(() => {
    setFade("end");
    return () => {
      setFade("");
    };
  }, []);
  return (
    <div className={styles.categorySelect + ` start ${fade}`}>
      <button
        onClick={() => {
          dispatch(toThisCategory("men's clothing"));
        }}
      >
        <Link className={styles.link} to="category/men">
          Men's Clothing
        </Link>
      </button>
      <button
        onClick={() => {
          dispatch(toThisCategory("women's clothing"));
        }}
      >
        <Link className={styles.link} to="category/women">
          Women's Clothing
        </Link>
      </button>
      <button
        onClick={() => {
          dispatch(toThisCategory("jewelery"));
        }}
      >
        <Link className={styles.link} to="category/jewelery">
          Jewelery
        </Link>
      </button>
      <button
        onClick={() => {
          dispatch(toThisCategory("electronics"));
        }}
      >
        <Link className={styles.link} to="category/electronics">
          Electronics
        </Link>
      </button>
    </div>
  );
}

export default CategorySelect;
