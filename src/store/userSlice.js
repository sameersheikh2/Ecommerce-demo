import { createSlice } from "@reduxjs/toolkit";

 
const userSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers:{
        signUp(state, action){
            state.push(action.payload)
        },
    }
})

export const {signUp} = userSlice.actions;
export default userSlice.reducer;
