import UserModel, { user } from '@/Database/models/user'

const usersUpdateOne = async (
  filter: Record<string, any>,
  update: Record<string, any>,
): Promise<user | null> => {
  await UserModel.findOneAndUpdate(filter, update)
  const user = await UserModel.findOne(filter).lean()
  return user
}

export default usersUpdateOne
