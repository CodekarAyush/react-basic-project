

import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import  todoReducer  from "./slices/todoSlice";
import wheatherReducer from "./slices/wheatherSlice"
export const store = configureStore({
  reducer: {
    theme: themeReducer,
    todos: todoReducer,
    wheather :wheatherReducer
  },
});
