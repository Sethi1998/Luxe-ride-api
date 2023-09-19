import { user } from '@/Database/models/user'
import usersUpdateOne from '@/Database/operations/User/updateOne'

export default async (user: user, input: user) => {
  try {
    console.log(input, 'ads', user)
    const updateUser = await usersUpdateOne({ _id: user._id }, input)
    if (updateUser) {
      return {
        data: updateUser,
        success: true,
        message: 'User Updated Successfully',
      }
    } else {
      return {
        data: null,
        success: false,
        message: 'Something Went Wrong',
      }
    }
  } catch (error) {
    return error
  }
}
