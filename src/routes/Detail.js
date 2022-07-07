import { useParams, useNavigate } from "react-router-dom";
import styles from "./Detail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addQuantity, initializeQuantity, addToCart } from "../store/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state;
  });
  const [tab, setTab] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //const copy = state.allItems[id - 1];
  //console.log(state.cart);
  return (
    <>
      <div className={styles.detail}>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          <FontAwesomeIcon className={styles.goBack} icon={faCircleArrowLeft} />
        </button>
        <img className={styles.img} src={state.allItems[id - 1].image} />
        <div className={styles.description}>
          <div className={styles.info}>
            <h5>{state.allItems[id - 1].category}</h5>
            <h2>{state.allItems[id - 1].title}</h2>
            <h3>{`Rating: ${state.allItems[id - 1].rating.rate}`}</h3>
            <h2>{`$${state.allItems[id - 1].price}`}</h2>
          </div>
          <button
            className={styles.addToCart}
            onClick={() => {
              const alreadyExist = state.cart.some((element) => {
                return element.id == id;
              });
              if (!alreadyExist) {
                dispatch(addToCart(state.allItems[id - 1]));
                dispatch(initializeQuantity());
              } else {
                const thisIndex = state.cart.findIndex(
                  (element) => element.id == id
                );
                dispatch(addQuantity(thisIndex));
              }
            }}
          >
            ADD TO CART
          </button>
          <p className={styles.infoDescription}>
            {state.allItems[id - 1].description}
          </p>
        </div>
      </div>
      <div className={styles.hrContainer}>
        <hr className={styles.hr} />
      </div>
      <div className={styles.tabBarContainer}>
        <div className={styles.tabBar}>
          <button
            onClick={() => {
              setTab(0);
            }}
          >
            Detail Info
          </button>
          <button
            onClick={() => {
              setTab(1);
            }}
          >
            Review
          </button>
          <button
            onClick={() => {
              setTab(2);
            }}
          >
            Q&A
          </button>
        </div>
      </div>
      <TabContent tab={tab} />
    </>
  );
}

function TabContent({ tab }) {
  switch (tab) {
    case 0:
      return <div className={styles.tabContent}>DETAILED INFO</div>;
    case 1:
      return <div className={styles.tabContent}>REVIEW</div>;
    case 2:
      return <div className={styles.tabContent}>Q&A</div>;
  }
}

export default Detail;
