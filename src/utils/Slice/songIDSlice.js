import { createSlice, current } from "@reduxjs/toolkit";

const songIDSlice = createSlice({
    name: "songID",
    initialState: {
        ID: ""
    },
    reducers: {
        showsongID: (state, action) => {
            state.ID = action.payload;
        },
        
    }
})  

export default songIDSlice.reducer

export const {showsongID} = songIDSlice.actions