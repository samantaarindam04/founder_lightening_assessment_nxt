import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const ALBUM_URL = 'https://jsonplaceholder.typicode.com/albums'
const initialState = {
    albums: [],
    status: false,
    error: null
}

export const fetchAlbums = createAsyncThunk('albums/fetchAlbums', async () => {
    try {
        const response = await axios.get(ALBUM_URL)
        return response.data
    } catch (error) {
        return error
    }
})

const albumSlice = createSlice({
    name: 'albums',
    initialState,
    extraReducers(builder) {
        builder
            .addCase(fetchAlbums.pending, (state) => {
                state.status = false
            })
            .addCase(fetchAlbums.fulfilled, (state, action) => {
                state.status = true
                state.albums = action.payload
            })
            .addCase(fetchAlbums.rejected, (state) => {
                state.status = false
                state.error = 'Failed to load'
            })

    }

})
export const selectAllAlbums = (state) => state.albums
export default albumSlice.reducer