import { configureStore } from '@reduxjs/toolkit'
import tokenSlice from './Slice/tokenSlice'

    const appStore = configureStore({
        reducer: {
            token: tokenSlice
        },
    })

export default appStore;