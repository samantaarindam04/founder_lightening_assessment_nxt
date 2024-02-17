import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import albumSlice from './slices/albumSlice'
import photoSlice from './slices/photoSlice'


const rootReducer = combineReducers({
    users: userReducer,
    albums: albumSlice,
    photos: photoSlice
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
    devTools: true
})
