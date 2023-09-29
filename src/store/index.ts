import { configureStore } from '@reduxjs/toolkit'
import users from '../reducers/users'
import { Message, User } from '../models'
import messages from '../reducers/messages'
export interface UserState {
    users: {
      usersOnline: User[],
      currentUser: User
    },
    messages: {
      messages: Message[]
    },
}
export default configureStore({
  reducer: {
    users: users,
    messages: messages
  },
})