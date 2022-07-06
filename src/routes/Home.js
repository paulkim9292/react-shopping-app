import { useEffect, useState } from "react";
// import redux states
import { useDispatch, useSelector } from "react-redux";
import { addVisibleItem } from "../store/store";
// import components
import Item from "../components/Item.js";
// import css module
import styles from "./Home.module.css";

function Home() {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state;
  });
  const [showItemNum, setShowItemNum] = useState();

  useEffect(() => {
    const copy = state.allItems.slice(0, 10);
    copy.map((value) => {
      dispatch(addVisibleItem(value));
    });
  }, []);
  //console.log(state.visibleItems);

  return (
    <div>
      <div className={styles.items}>
        {state.visibleItems.map((item) => {
          return <Item key={item.id} id={item.id} />;
        })}
      </div>
      <button onClick={() => {}}>more</button>
    </div>
  );
}

export default Home;
