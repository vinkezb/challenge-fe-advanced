import { createSlice } from '@reduxjs/toolkit'
import { User } from '../models'
export const users = createSlice({
  name: 'users',
  initialState: {
    usersOnline: [],
  },
  reducers: {
    setUsers: (state, action) => {
      state.usersOnline = action.payload
    }
  },
})
export const { setUsers } = users.actions
export default users.reducer