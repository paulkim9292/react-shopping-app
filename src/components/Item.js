// import redux states
import { useSelector } from "react-redux";
// import css module
import styles from "./Item.module.css";

function Item({ id, index }) {
  const visibleItems = useSelector((state) => {
    return state.visibleItems;
  });
  return (
    <div className={styles.itemBox}>
      <div className={styles.imageContainer}>
        <img src={visibleItems[index].image} />
      </div>
      <h3>{visibleItems[index].title}</h3>
      <div className={styles.priceAndRating}>
        <h4>{`Price: $${visibleItems[index].price}`}</h4>
        <h5>{`Rating: ${visibleItems[index].rating.rate}`}</h5>
      </div>
    </div>
  );
}

export default Item;
