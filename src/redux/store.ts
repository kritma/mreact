import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './features/api/apiSlice'
import { musicSlice } from './features/music/musicSlice'

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        [musicSlice.name]: musicSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch