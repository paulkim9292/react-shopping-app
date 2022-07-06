// import redux states
import { useSelector } from "react-redux";
// import css module
import styles from "./Item.module.css";

function Item({ id }) {
  const visibleItems = useSelector((state) => {
    return state.visibleItems;
  });
  return (
    <div className={styles.itemBox}>
      <div className={styles.imageContainer}>
        <img src={visibleItems[id - 1].image} />
      </div>
      <h4>{visibleItems[id - 1].title}</h4>
      <h4>{`${visibleItems[id - 1].rating.rate} / ${
        visibleItems[id - 1].rating.count
      }`}</h4>
      <h4>{visibleItems[id - 1].price}</h4>
    </div>
  );
}

export default Item;
