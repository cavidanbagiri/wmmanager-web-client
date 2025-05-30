
import { configureStore } from '@reduxjs/toolkit'
import authSlice from './auth-store.js'
import messageBoxSlice from './message-store.js'

export const store = configureStore({
  reducer: {
    messageBoxSlice: messageBoxSlice,
    authSlice: authSlice,
  },
})