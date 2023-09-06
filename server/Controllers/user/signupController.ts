import bcrypt from 'bcrypt'
import UserModel from '@/Database/models/user'
import {
  isValidEmailError,
  isValidPasswordError,
  userAlreadyExistError,
} from '@/Errors/user'
import { signupInput } from '@/Types/User'
import usersFindOne from '@/Database/operations/User/findOne'

export default async (input: signupInput) => {
  try {
    const findUser = await usersFindOne({ email: input.email })
    const userExist = userAlreadyExistError(findUser)
    if (userExist)
      return {
        erro: userExist,
      }
    const isEmailValid = isValidEmailError(input.email)
    if (isEmailValid) return { error: isEmailValid }
    const isPasswordValid = isValidPasswordError(input.password)
    if (isPasswordValid) return { error: isPasswordValid }
    const { password } = input
    const hashedPassword = await bcrypt.hash(password, 12)
    const createUser = await UserModel.create({
      ...input,
      password: hashedPassword,
    })
    return createUser
  } catch (error) {
    return error
  }
}
