import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { data: [], emailExist: false, loggedIn: false },
  reducers: {
    logIn(state) {
      state.loggedIn = !state.loggedIn;
    },
    signOut(state) {
      state.loggedIn = !state.loggedIn;
      console.log("running");
    },
  },
});

export const { signUp, logIn, signOut } = userSlice.actions;
export default userSlice.reducer;
