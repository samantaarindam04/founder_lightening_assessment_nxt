import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const USER_URL = 'https://jsonplaceholder.typicode.com/users'

const initialState = {
    users: [],
    status: false,
    error: null
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    try {
        const response = await axios.get(USER_URL)
        return response?.data
    } catch (error) {
        return error
    }
})

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = false
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = true
                state.users = action.payload
            })
            .addCase(fetchUsers.rejected, (state) => {
                state.status = false
                state.error = 'Failed to load'
            })
    }

})
export const selectAllUsers = (state) => state.users
export default userSlice.reducer

