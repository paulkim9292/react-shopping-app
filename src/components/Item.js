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
        <div className={styles.itemInfo}>
          <h3>
            {visibleItems[index].title.length > 40
              ? `${visibleItems[index].title.slice(0, 40)}...`
              : visibleItems[index].title}
          </h3>
          <p>{`$${visibleItems[index].price}`}</p>
        </div>
      </Link>
    </div>
  );
}

export default Item;
