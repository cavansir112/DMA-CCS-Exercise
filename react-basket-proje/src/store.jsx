import { configureStore } from '@reduxjs/toolkit'
import basketSlice from './basketSlice';

export const store = configureStore({
  reducer: {
    soppingCard:basketSlice
  },
})

export default store;