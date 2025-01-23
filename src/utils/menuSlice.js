import { createSlice } from "@reduxjs/toolkit";



const menuSlice = createSlice({
    name: "menu",
    initialState:{
        isMenuOpen: true,
        isWatchPage: false,
    },
    reducers:{
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu: (state) => {
            state.isMenuOpen = false;
        },
        setWatchPage: (state, action) => {
            state.isWatchPage = action.payload;
        }
    }
});

export const { toggleMenu, closeMenu, setWatchPage } = menuSlice.actions;

export default menuSlice.reducer;