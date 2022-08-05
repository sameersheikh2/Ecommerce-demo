import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice"
import navReducer from "./NavSlice"
import userReducer from "./UserSlice"

const store = configureStore({
    reducer:{
        cart: cartReducer,
        nav: navReducer,
        user: userReducer,
    }
})

export default store;