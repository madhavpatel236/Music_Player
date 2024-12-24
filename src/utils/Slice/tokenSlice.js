import { createSlice, current } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
    name: "token",
    initialState: {
        items:[]
    },
    reducers: {
        tokenAdd: (state, action) => {
            state.items.push(action.payload)
        },
        tokenRemove: (state, action) => {
            return { items: [] }
        }
    }
})  

export default tokenSlice.reducer

export const {tokenAdd} = tokenSlice.actions