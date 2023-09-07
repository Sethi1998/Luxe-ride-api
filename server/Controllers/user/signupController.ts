import bcrypt from 'bcrypt'
import UserModel from '@/Database/models/user'
import {
  isPhoneExist,
  isValidEmailError,
  isValidPasswordError,
  isValidPhoneError,
  userAlreadyExistError,
} from '@/Errors/user'
import { signupInput } from '@/Types/User'
import usersFindOne from '@/Database/operations/User/findOne'
import { signToken } from '@/services/authJwt'
import usersUpdateOne from '@/Database/operations/User/updateOne'

export default async (input: signupInput) => {
  try {
    const findUser = await usersFindOne({ email: input.email })
    const userExist = userAlreadyExistError(findUser)
    if (userExist) return userExist
    const isEmailValid = isValidEmailError(input.email)
    if (isEmailValid) return isEmailValid
    const isValidPhone = isValidPhoneError(input.phone)
    if (isValidPhone) return isValidPhone
    const phoneExist = await isPhoneExist(input.phone)
    if (phoneExist) return phoneExist
    const isPasswordValid = isValidPasswordError(input.password)
    if (isPasswordValid) return isPasswordValid
    const { password } = input
    const hashedPassword = await bcrypt.hash(password, 12)
    const createUser = await UserModel.create({
      ...input,
      password: hashedPassword,
    })
    await usersUpdateOne(
      { _id: createUser._id },
      { deviceType: input.deviceType, fcmToken: input.fcmToken },
    )
    const token = signToken(createUser)

    return {
      data: createUser,
      success: true,
      message: 'Signup Successfully',
      token,
    }
  } catch (error) {
    return error
  }
}
