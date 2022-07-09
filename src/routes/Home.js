import styles from "./Home.module.css";
import Item from "../components/Item";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  addVisibleItem,
  cleanVisibleItems,
  mouseCatFalse,
} from "../store/store";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function Home() {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state;
  });

  useEffect(() => {
    const copy = state.allItems.slice(0, 4);
    copy.map((value) => {
      dispatch(addVisibleItem(value));
    });
    window.scrollTo(0, 0);
    return () => {
      dispatch(mouseCatFalse());
      dispatch(cleanVisibleItems());
    };
  }, []);

  //media query
  const isPC = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  const isMobileTablet = useMediaQuery({
    query: "(max-width: 1023px)",
  });

  return (
    <div className={styles.home}>
      <img className={styles.frontImg} src={require("../img/home.jpg")} />
      {isPC && (
        <div className={styles.newArrival}>
          <div className={styles.newArrivalTitle}>
            <p>NEW ARRIVAL</p>
            <button>
              <Link className={styles.tab} to="/all">
                &gt; more
              </Link>
            </button>
          </div>
          <div className={styles.newArrivalItems}>
            {isPC &&
              state.visibleItems.map((item, index) => {
                return <Item key={item.id} id={item.id} index={index} />;
              })}
          </div>
        </div>
      )}
      {isMobileTablet && (
        <div className={styles.mobileNewArrival}>
          <p>NEW ARRIVAL!</p>
          <button>
            <Link to="/all">Click here to see more...</Link>
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;
