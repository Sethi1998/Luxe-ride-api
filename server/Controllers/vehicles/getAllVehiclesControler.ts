import VehicleModel from '@/Database/models/vehicle'

export default async (input) => {
  const inputData = {
    ...input,
    publish: true,
  }
  const vehicle = await VehicleModel.find(inputData)
    .populate('category')
    .populate('make')
    .populate('model')
    .sort({ createdAt: -1 })
    .lean()
  const count = await VehicleModel.countDocuments(inputData)
  if (vehicle.length > 0) {
    return {
      data: vehicle,
      count,
      success: true,
      message: 'Vehicle Found',
    }
  } else {
    return {
      success: false,
      message: 'No Vehicle Found',
    }
  }
}
