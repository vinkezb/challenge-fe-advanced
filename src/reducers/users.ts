import { createSlice } from '@reduxjs/toolkit'
export const users = createSlice({
  name: 'users',
  initialState: {
    usersOnline: [],
    currentUser: {}
  },
  reducers: {
    setUsers: (state, action) => {
      state.usersOnline = action.payload
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload
    }
  },
})
export const { setUsers, setCurrentUser } = users.actions
export default users.reducer