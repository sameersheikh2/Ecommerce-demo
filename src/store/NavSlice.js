const { createSlice } = require("@reduxjs/toolkit");

let initialNavState = {showNav: false}

const navSlice = createSlice({
    name: 'nav',
    initialState: initialNavState,
    reducers:{
        navHandler(state){
            state.showNav = !state.showNav; 
        },
    }
})

export const {navHandler} = navSlice.actions;

export default navSlice.reducer;