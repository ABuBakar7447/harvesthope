import { configureStore } from '@reduxjs/toolkit'
import { hopeharvestapi } from './api'

export const store = configureStore({
  reducer: {
    [hopeharvestapi.reducerPath]:hopeharvestapi.reducer
  },
  middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(hopeharvestapi.middleware),
})