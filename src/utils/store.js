import { configureStore } from '@reduxjs/toolkit'
import tokenResucers from './Slice/tokenSlice'
import playlistReducers from './Slice/userPlaylistSlice'

    const store = configureStore({
        reducer: {
            token: tokenResucers,
            userPlaylists: playlistReducers,
        },
    })

export default store;