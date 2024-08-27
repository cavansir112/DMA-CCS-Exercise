import { configureStore } from "@reduxjs/toolkit";
import todoSlice  from "./todoSlice.jsx";


export const store = configureStore({
    
  reducer: {
    todoList: todoSlice,
  },
});