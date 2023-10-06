import UserModel from '@/Database/models/user'
import usersFindOne from '@/Database/operations/User/findOne'
import { isValidPasswordError } from '@/Errors/user'
import bcrypt from 'bcrypt'
export default async (input, user) => {
  const passwordValid = isValidPasswordError(input.newPassword)
  if (passwordValid) {
    return passwordValid
  }
  const userData = await usersFindOne({ _id: user._id })
  const checkPasswod = await bcrypt.compare(input.password, userData.password)
  if (!checkPasswod) {
    return {
      success: false,
      message: 'Current Password do not match!',
    }
  }
  const hashedPassword = await bcrypt.hash(input.newPassword, 12)
  await UserModel.findByIdAndUpdate(
    { _id: user._id },
    { password: hashedPassword },
  )
  return {
    success: true,
    message: 'Password Changed Successfully',
  }
}
