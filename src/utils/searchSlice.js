import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
    
    },
    reducers: {
        catchResults : (state, action) => {
            state = {...action.payload, ...state};
        },
        
    },
})

export const { catchResults } = searchSlice.actions;
export default searchSlice.reducer;