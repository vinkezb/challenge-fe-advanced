import { configureStore } from '@reduxjs/toolkit'
import users from '../reducers/users'
import { User } from '../models'
export interface UserState {
    users: {
        usersOnline: User[]
    }
}
export default configureStore({
  reducer: {
    users: users,
  },
})