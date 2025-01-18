import { createSlice } from "@reduxjs/toolkit";



const menuSlice = createSlice({
    name: "menu",
    initialState:{
        isMenuOpen: true,
    },
    reducers:{
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        }
    }
});

export const {toggleMenu} = menuSlice.actions;

export default menuSlice.reducer;