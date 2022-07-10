import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
// import styles
import "./App.css";
// import routes
import Home from "./routes/Home";
import All from "./routes/All";
import About from "./routes/About";
import Detail from "./routes/Detail";
// import components
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import CategorySelect from "./components/CategorySelect";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
// import redux states
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  copyFromOldCart,
  copyFromOldCartQuantity,
} from "./store/store";
import Category from "./routes/Category";

import { useQuery } from "react-query";
import { useMediaQuery } from "react-responsive";
import NavbarMobile from "./components/NavbarMobile";
import CartButtonMobile from "./components/CartButtonMobile";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state;
  });

  /******************************This code is replaced with react query********************************* */
  // const [loading, setLoading] = useState(true);
  // const getItems = async () => {
  //   const json = await (
  //     await fetch("https://fakestoreapi.com/products")
  //   ).json();
  //   json.map((value) => {
  //     dispatch(addItem(value));
  //   });
  //   setLoading(false);
  // };

  const { isLoading, error, data } = useQuery("itemData", () =>
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => json.map((value) => dispatch(addItem(value))))
  );

  useEffect(() => {
    // getItems();
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

  //media query
  const isPC = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  const isMobileTablet = useMediaQuery({
    query: "(max-width: 1023px)",
  });

  return (
    <div className="App">
      {isLoading && (
        <div className="loadingContainer">
          <div className="loading"></div>
          <h3>Please wait few more seconds...</h3>
          <h3>페이지가 로딩되는 동안 조금만 기다려주세요</h3>
        </div>
      )}
      {error && (
        <div className="failedToLoadData">
          FAILED TO LOAD DATA... PLEASE TRY AGAIN LATER
        </div>
      )}
      {data && (
        <>
          {/*NAVBAR*/}
          {isPC && <Navbar />}
          {isMobileTablet && <NavbarMobile />}
          {state.mouseCat && <CategorySelect />}
          {/*ROUTES*/}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all" element={<All />} />
            <Route path="/about" element={<About />} />{" "}
            <Route path="/category/men" element={<Category />} />
            <Route path="/category/women" element={<Category />} />
            <Route path="/category/jewelery" element={<Category />} />
            <Route path="/category/electronics" element={<Category />} />
            <Route path={`/detail/:id`} element={<Detail />} />
          </Routes>
          {/*Cart*/}
          {state.cartState ? <Cart /> : null}
          {isPC && <ScrollToTop />}
          {isMobileTablet && <CartButtonMobile />}
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
