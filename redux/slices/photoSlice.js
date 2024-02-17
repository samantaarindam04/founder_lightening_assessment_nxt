import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const PHOTO_URL = 'https://jsonplaceholder.typicode.com/photos'
const initialState = {
    photos: [],
    status: false,
    error: null
}

export const fetchPhotos = createAsyncThunk('photos/fetchPhotos', async () => {
    try {
        const response = await axios.get(PHOTO_URL)
        return response.data
    } catch (error) {
        return error
    }
})

const photoSlice = createSlice({
    name: 'photos',
    initialState,
    extraReducers(builder) {
        builder
            .addCase(fetchPhotos.pending, (state) => {
                state.status = false
            })
            .addCase(fetchPhotos.fulfilled, (state, action) => {
                state.status = true
                state.photos = action.payload
            })
            .addCase(fetchPhotos.rejected, (state) => {
                state.status = false
                state.error = 'Failed to load'
            })

    }

})
export const selectAllPhotos = (state) => state.photos
export default photoSlice.reducer