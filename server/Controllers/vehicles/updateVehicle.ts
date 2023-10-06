import VehicleModel from '@/Database/models/vehicle'

export default async (input) => {
  await VehicleModel.findByIdAndUpdate({ _id: input._id }, input)
  const data = await VehicleModel.findOne({ _id: input._id })
  if (data) {
    return {
      data: data,
      success: true,
      message: 'Vehicle Updated Successfully',
    }
  }
}
