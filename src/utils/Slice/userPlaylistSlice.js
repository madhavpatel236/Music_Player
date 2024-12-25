import { createSlice, current } from "@reduxjs/toolkit";

const userPlaylistSlice = createSlice({
    name: "token",
    initialState: {
        userPlaylist: []
    },
    reducers: {
        addPlaylist: (state, action) => {
            state.userPlaylist.push(action.payload);
        },
        tokenRemove: (state, action) => {
            return { tokenData: [] }
        }
    }
})  

export default userPlaylistSlice.reducer

export const {addPlaylist} = userPlaylistSlice.actions