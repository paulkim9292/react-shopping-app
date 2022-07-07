import { Link } from "react-router-dom";
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
      <Link to={`/detail/${id}`} className={styles.link}>
        <div className={styles.imageContainer}>
          <img className={styles.img} src={visibleItems[index].image} />
        </div>
        <h3>{visibleItems[index].title}</h3>
        <div className={styles.priceAndRating}>
          <h4>{`Price: $${visibleItems[index].price}`}</h4>
          <h5>{`Rating: ${visibleItems[index].rating.rate}`}</h5>
        </div>
      </Link>
    </div>
  );
}

export default Item;
