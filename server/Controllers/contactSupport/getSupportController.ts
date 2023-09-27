import ContactSupportModel from '@/Database/models/contactSupport'

export default async () => {
  const res = await ContactSupportModel.find().lean()
  return {
    data: res,
    success: true,
    message: 'Sucessfully',
  }
}
