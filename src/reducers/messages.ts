import { createSlice } from '@reduxjs/toolkit'
export const messages = createSlice({
  name: 'messages',
  initialState: {
    messages: [],
  },
  reducers: {
    setMessages: (state, action) => {
      state.messages = [...state.messages, action.payload as never]
    }
  },
})
export const { setMessages } = messages.actions
export default messages.reducer