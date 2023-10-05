import VehicleModel from '@/Database/models/vehicle'

export default async (input) => {
  const vehicle = await VehicleModel.findOne({ _id: input })
    .populate('category')
    .populate('make')
    .populate('model')
    .lean()

  if (vehicle) {
    return {
      data: vehicle,
      success: true,
      message: 'Vehhicle Found',
    }
  } else {
    return {
      success: false,
      messsage: 'No vehicle found',
    }
  }
}
