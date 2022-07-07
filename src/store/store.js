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
    cleanVisibleItems() {
      return [];
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

const maxReached = createSlice({
  name: "maxReached",
  initialState: false,
  reducers: {
    maxIsReached() {
      return true;
    },
  },
});

const mouseCat = createSlice({
  name: "mouseCat",
  initialState: false,
  reducers: {
    changeMouseCat(state) {
      return !state;
    },
    mouseCatFalse() {
      return false;
    },
  },
});

const whichCategory = createSlice({
  name: "whichCategory",
  initialState: "",
  reducers: {
    toThisCategory(state, action) {
      return `${action.payload}`;
    },
  },
});

export const { changeCart } = cartState.actions;
export const { addItem } = allItems.actions;
export const { addVisibleItem, cleanVisibleItems } = visibleItems.actions;
export const { addCartItem } = cartItems.actions;
export const { maxIsReached } = maxReached.actions;
export const { changeMouseCat, mouseCatFalse } = mouseCat.actions;
export const { toThisCategory } = whichCategory.actions;

export default configureStore({
  reducer: {
    cartState: cartState.reducer,
    allItems: allItems.reducer,
    visibleItems: visibleItems.reducer,
    cartItems: cartItems.reducer,
    maxReached: maxReached.reducer,
    mouseCat: mouseCat.reducer,
    whichCategory: whichCategory.reducer,
  },
});
