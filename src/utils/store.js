import { configureStore } from '@reduxjs/toolkit'
import tokenResucers from './Slice/tokenSlice'
import playlistReducers from './Slice/userPlaylistSlice'
import songIDReducer from './Slice/songIDSlice'
import songInfoReducer from './Slice/currentSongInfoSlice'

    const store = configureStore({
        reducer: {
            token: tokenResucers,
            userPlaylists: playlistReducers,
            songID: songIDReducer, 
            currentSongInfo: songInfoReducer,
        },
    })

export default store;