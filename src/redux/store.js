import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slices/cartSlice";
import CategorySlice from "./Slices/categorySlice";
import SearchSlice from './Slices/searchSlice'

const store = configureStore({
  reducer: {
    cart: CartSlice,
    category: CategorySlice,
    search: SearchSlice
  },
});
export default store;
