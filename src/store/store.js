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

const cart = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
    deleteFromCart(state, action) {
      state.splice(action.payload, 1);
    },
    copyFromOldCart(state, action) {
      if (action.payload !== null) {
        return action.payload;
      }
    },
    removeCart() {
      return [];
    },
  },
});

const cartQuantity = createSlice({
  name: "cartQuantity",
  initialState: [],
  reducers: {
    initializeQuantity(state) {
      state.push(1);
    },
    deleteQuantity(state, action) {
      state.splice(action.payload, 1);
    },
    addQuantity(state, action) {
      state[action.payload] += 1;
    },
    subQuantity(state, action) {
      if (state[action.payload] !== 0) {
        state[action.payload] -= 1;
      }
    },
    copyFromOldCartQuantity(state, action) {
      if (action.payload !== null) {
        return action.payload;
      }
    },
    removeCartQuantity() {
      return [];
    },
  },
});

export const { changeCart } = cartState.actions;
export const { addItem } = allItems.actions;
export const { addVisibleItem, cleanVisibleItems } = visibleItems.actions;
export const { maxIsReached } = maxReached.actions;
export const { changeMouseCat, mouseCatFalse } = mouseCat.actions;
export const { toThisCategory } = whichCategory.actions;
export const { addToCart, deleteFromCart, copyFromOldCart, removeCart } =
  cart.actions;
export const {
  initializeQuantity,
  deleteQuantity,
  addQuantity,
  subQuantity,
  copyFromOldCartQuantity,
  removeCartQuantity,
} = cartQuantity.actions;

export default configureStore({
  reducer: {
    cartState: cartState.reducer,
    allItems: allItems.reducer,
    visibleItems: visibleItems.reducer,
    maxReached: maxReached.reducer,
    mouseCat: mouseCat.reducer,
    whichCategory: whichCategory.reducer,
    cart: cart.reducer,
    cartQuantity: cartQuantity.reducer,
  },
});
