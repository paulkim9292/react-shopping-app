import { useEffect } from "react";
// import redux states
import { useDispatch, useSelector } from "react-redux";
import {
  addVisibleItem,
  maxIsReached,
  cleanVisibleItems,
  mouseCatFalse,
} from "../store/store";
// import components
import Item from "../components/Item.js";
// import css module
import styles from "./Home.module.css";

function Home() {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state;
  });

  useEffect(() => {
    let lastItem = 10;
    if (state.maxReached) {
      lastItem = 20;
    }
    const copy = state.allItems.slice(0, lastItem);
    copy.map((value) => {
      dispatch(addVisibleItem(value));
    });
    return () => {
      dispatch(mouseCatFalse());
      dispatch(cleanVisibleItems());
    };
  }, []);
  //console.log(state.visibleItems);

  return (
    <div>
      <div className={styles.items}>
        {state.visibleItems.map((item, index) => {
          return <Item key={item.id} id={item.id} index={index} />;
        })}
      </div>
      {state.maxReached ? null : (
        <button
          onClick={() => {
            const copy = state.allItems.slice(10, 20);
            copy.map((value) => {
              dispatch(addVisibleItem(value));
            });
            dispatch(maxIsReached());
          }}
          className={styles.moreBtn}
        >
          LOAD MORE
        </button>
      )}
    </div>
  );
}

export default Home;
