const { createSlice } = require("@reduxjs/toolkit");
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    filter(state, action) {
      return state.filter((item) => item.description === action.payload);
    },
  },
});

export const { add, remove, filter } = cartSlice.actions;

export default cartSlice.reducer;
