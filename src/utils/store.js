import { configureStore } from '@reduxjs/toolkit'
import tokenResucers from './Slice/tokenSlice'

    const store = configureStore({
        reducer: {
            token: tokenResucers,
        },
    })

export default store;