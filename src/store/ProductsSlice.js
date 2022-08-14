import { createSlice } from "@reduxjs/toolkit";

const ProductsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    async fetchItems() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        state = state.p;
      } catch (err) {
        // const message = (err)
        console.log(err);
      }
    },
  },
});
