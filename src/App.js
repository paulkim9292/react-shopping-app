import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
// import styles
import "./App.css";
// import routes
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
// import components
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import CategorySelect from "./components/CategorySelect";
// import redux states
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  copyFromOldCart,
  copyFromOldCartQuantity,
} from "./store/store";
import Category from "./routes/Category";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state;
  });
  const [loading, setLoading] = useState(true);

  const getItems = async () => {
    const json = await (
      await fetch("https://fakestoreapi.com/products")
    ).json();
    json.map((value) => {
      dispatch(addItem(value));
    });
    setLoading(false);
  };

  useEffect(() => {
    getItems();
    let savedCart = localStorage.getItem("cart");
    savedCart = JSON.parse(savedCart);
    dispatch(copyFromOldCart(savedCart));
    let savedCartQuantity = localStorage.getItem("cartQuantity");
    savedCartQuantity = JSON.parse(savedCartQuantity);
    dispatch(copyFromOldCartQuantity(savedCartQuantity));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
    localStorage.setItem("cartQuantity", JSON.stringify(state.cartQuantity));
  }, [state.cart, state.cartQuantity]);

  return (
    <div className="App">
      {loading ? (
        <div className="loadingContainer">
          <div className="loading"></div>
          <h3>Please wait few more seconds...</h3>
          <h3>페이지가 로딩되는 동안 조금만 기다려주세요</h3>
        </div>
      ) : (
        <>
          {/*NAVBAR*/}
          <Navbar />
          {state.mouseCat ? <CategorySelect /> : null}
          {/*ROUTES*/}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />{" "}
            <Route path="/category/men" element={<Category />} />
            <Route path="/category/women" element={<Category />} />
            <Route path="/category/jewelery" element={<Category />} />
            <Route path="/category/electronics" element={<Category />} />
            <Route path={`/detail/:id`} element={<Detail />} />
          </Routes>
          {/*Cart*/}
          {state.cartState ? <Cart /> : null}
          <button className="toTopBtnContainer">
            <FontAwesomeIcon
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className="toTopBtn"
              icon={faCircleArrowUp}
            />
          </button>
        </>
      )}
    </div>
  );
}

export default App;
