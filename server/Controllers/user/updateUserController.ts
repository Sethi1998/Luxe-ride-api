import { user } from '@/Database/models/user'
import usersUpdateOne from '@/Database/operations/User/updateOne'

export default async (user: user, input: user) => {
  try {
    const updateUser = await usersUpdateOne({ _id: user._id }, input)
    return {
      data: updateUser,
      success: 'true',
      message: 'User Updated Successfully',
    }
  } catch (error) {
    return error
  }
}
