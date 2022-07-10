import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCart } from "../store/store";

function CartButtonMobile() {
  const [showCartBtn, setShowCartBtn] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state;
  });

  return (
    <button
      onClick={() => {
        dispatch(changeCart());
      }}
      className="toTopBtnANDCartBtn"
    >{`CART(${state.cart.length})`}</button>
  );
}

export default CartButtonMobile;
