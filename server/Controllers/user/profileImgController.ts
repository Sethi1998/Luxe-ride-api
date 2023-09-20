import usersUpdateOne from '@/Database/operations/User/updateOne'

export default async (input) => {
  try {
    const updateuser = await usersUpdateOne(
      { _id: input.user._id },
      { profileImg: input.files },
    )
    return {
      data: updateuser,
      message: 'Profile Img Updated',
      success: true,
    }
  } catch (error) {
    return error
  }
}
