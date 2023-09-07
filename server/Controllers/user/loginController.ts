import usersFindOne from '@/Database/operations/User/findOne'
import usersUpdateOne from '@/Database/operations/User/updateOne'
import { isPasswordValid, userDoesNotExistsError } from '@/Errors/user'
import { loginInput } from '@/Types/User'
import { signToken } from '@/services/authJwt'
export default async (input: loginInput) => {
  try {
    const user = await usersFindOne({ email: input.email })
    const userNoExist = userDoesNotExistsError(user)
    if (userNoExist) return userNoExist
    const passwordValid = isPasswordValid(input.password, user.password)
    if (passwordValid) return passwordValid
    await usersUpdateOne(
      { _id: user._id },
      { deviceType: input.deviceType, fcmToken: input.fcmToken },
    )
    const token = signToken(user)
    return {
      data: user,
      token,
      success: true,
      message: 'Login Successfully',
    }
  } catch (error) {
    return error
  }
}
