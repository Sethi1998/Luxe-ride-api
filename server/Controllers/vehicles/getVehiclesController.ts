import VehicleModel from '@/Database/models/vehicle'

export default async (user: string, limit: number, offset: number) => {
  try {
    const vehicles = await VehicleModel.find({ vehicleOwner: user })
      .populate('category')
      .populate('make')
      .populate('model')
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(offset)
      .lean()
    const totalCount = await VehicleModel.countDocuments()
    return {
      data: vehicles,
      count: totalCount,
    }
  } catch (error) {
    return error
  }
}
