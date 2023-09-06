import UserModel, { user } from '@/Database/models/user'

const usersFindOne = async (
  filter: Record<string, any>,
): Promise<user | null> => {
  const user = await UserModel.findOne(filter).lean()
  return user
}

export default usersFindOne
