import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
// import styles
import "./App.css";
// import routes
import Home from "./routes/Home";
import Category from "./routes/Category";
import About from "./routes/About";
// import components
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
// import redux states
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./store/store";

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
  }, []);
  return (
    <div className="App">
      {loading ? (
        <div className="loadingContainer">
          <div className="loading"></div>
          <h3>Please wait few more seconds...</h3>
        </div>
      ) : (
        <>
          {/*NAVBAR*/}
          <Navbar />
          {/*ROUTES*/}
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/category" element={<Category />}></Route>
            <Route path="/about" element={<About />}></Route>{" "}
          </Routes>
          {/*Cart*/}
          {state.cartState ? <Cart /> : null}
        </>
      )}
    </div>
  );
}

export default App;
