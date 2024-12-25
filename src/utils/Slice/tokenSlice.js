import { createSlice, current } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
    name: "token",
    initialState: {
        tokenData: ''
    },
    reducers: {
        tokenAdd: (state, action) => {
            state.tokenData = action.payload;
        },
        tokenRemove: (state, action) => {
            return { tokenData: [] }
        }
    }
})  

export default tokenSlice.reducer

export const {tokenAdd} = tokenSlice.actions