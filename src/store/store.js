import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartState = createSlice({
  name: "cartState",
  initialState: false,
  reducers: {
    changeCart(state) {
      return !state;
    },
  },
});

const allItems = createSlice({
  name: "allItems",
  initialState: [],
  reducers: {
    addItem(state, action) {
      state.push(action.payload);
    },
  },
});

const visibleItems = createSlice({
  name: "visibleItems",
  initialState: [],
  reducers: {
    addVisibleItem(state, action) {
      state.push(action.payload);
    },
  },
});

const cartItems = createSlice({
  name: "cartItems",
  initialState: [],
  reducers: {
    addCartItem(state, action) {
      state.push(action.payload);
    },
  },
});

export const { changeCart } = cartState.actions;
export const { addItem } = allItems.actions;
export const { addVisibleItem } = visibleItems.actions;
export const { addCartItem } = cartItems.actions;

export default configureStore({
  reducer: {
    cartState: cartState.reducer,
    allItems: allItems.reducer,
    visibleItems: visibleItems.reducer,
    cartItems: cartItems.reducer,
  },
});
