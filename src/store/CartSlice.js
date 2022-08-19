const { createSlice } = require("@reduxjs/toolkit");
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add(state, action) {
      const items = state.filter((item) => item.id === action.payload.id); //to check if item already exist in array..
      if (items.length === 0) {
        // if not exist
        const item = action.payload; //add the coming data into the array
        item.quantity = 1; //assign quantity a value = 1
        state.push(item); // push the item into our array
      } else {
        //if already item exist
        state.map(
          (
            item //map thorugh each item
          ) => (item.id === action.payload.id ? (item.quantity += 1) : item) //check if item already there then increase the quanitity or else add the item
        );
      }
    },
    remove(state, action) {
      const items = state.filter((item) => item.id !== action.payload.id);
      const item = action.payload;
      console.log(item);
      if (item.quantity > 1) {
        items.push({ ...item, quantity: item.quantity - 1 });
      } else {
        return items;
      }
    },
  },
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
