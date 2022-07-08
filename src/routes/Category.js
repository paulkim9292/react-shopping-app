import {
  addVisibleItem,
  cleanVisibleItems,
  mouseCatFalse,
} from "../store/store.js";
// import redux states
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import components
import Item from "../components/Item.js";
// import css module
import styles from "./All.module.css";

function Category() {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state;
  });

  // 해당 카테고리 allItems에서 불러와서 visibleItems array에 넣기

  useEffect(() => {
    const copy = state.allItems.filter(
      (item) => item.category === state.whichCategory
    );
    copy.map((value) => {
      dispatch(addVisibleItem(value));
    });
    return () => {
      dispatch(cleanVisibleItems());
      dispatch(mouseCatFalse());
    };
  }, [state.whichCategory]);

  // console.log(state.visibleItems);

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      dispatch(mouseCatFalse());
    };
  }, []);

  return (
    <div className={styles.items}>
      {state.visibleItems.map((item, index) => {
        return <Item key={item.id} id={item.id} index={index} />;
      })}
    </div>
  );
}

export default Category;
