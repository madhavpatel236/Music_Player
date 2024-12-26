import { createSlice, current } from "@reduxjs/toolkit";

const currentSongInfoSlice = createSlice({
  name: "currentSongInfo",
  initialState:{
    apiData:{}, 
  },
  reducers: {
    showSongInfo: (state, action) => {
        state.apiData = action.payload
    },
  },
});

export default currentSongInfoSlice.reducer;

export const { showSongInfo } = currentSongInfoSlice.actions;
