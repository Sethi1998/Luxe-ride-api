import { user } from '@/Database/models/user'
import usersUpdateOne from '@/Database/operations/User/updateOne'

export default async (user: user, input: user) => {
  try {
    const updateUser = await usersUpdateOne({ _id: user._id }, input)
    return updateUser
  } catch (error) {
    return error
  }
}
