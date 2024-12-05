
import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    darkMode: false
  },
  reducers: {
    toggleTheme: (state) => {
      console.log(state);
      
      state.darkMode = !state.darkMode;
    }
  },
});


export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
