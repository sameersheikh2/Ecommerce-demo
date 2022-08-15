import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import navReducer from "./NavSlice";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    nav: navReducer,
    user: userReducer,
  },
});

export default store;
