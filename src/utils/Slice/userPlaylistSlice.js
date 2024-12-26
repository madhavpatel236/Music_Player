import { createSlice, current } from "@reduxjs/toolkit";

const userPlaylistSlice = createSlice({
    name: "userPlaylists",
    initialState: {
        userPlaylist: []
    },
    reducers: {
        addPlaylist: (state, action) => {
            state.userPlaylist.push(action.payload)

        },
        
    }
})  

export default userPlaylistSlice.reducer

export const {addPlaylist} = userPlaylistSlice.actions