import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice"
import navReducer from "./NavSlice"

const store = configureStore({
    reducer:{
        cart: cartReducer,
        nav: navReducer,
    }
})

export default store;