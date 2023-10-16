import VehicleModel from '@/Database/models/vehicle'

export default async (
  user: string,
  limit: number,
  offset: number,
  publish: boolean,
) => {
  try {
    const vehicles = await VehicleModel.find({ vehicleOwner: user, publish })
      .populate('category')
      .populate('make')
      .populate('model')
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(offset)
      .lean()
    const totalCount = await VehicleModel.countDocuments({
      vehicleOwner: user,
      publish: publish,
    })
    return {
      data: vehicles,
      count: totalCount,
      success: true,
      message: 'Vehciles Found',
    }
  } catch (error) {
    return error
  }
}
