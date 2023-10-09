import FavoriteVehcileModel from '@/Database/models/favoriteVehicle'
import VehicleModel from '@/Database/models/vehicle'

export default async (input, user) => {
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

  const likes = await Promise.all(
    vehicle.map(async (item) => {
      const abc = await FavoriteVehcileModel.findOne({
        vehicle: item._id,
        user: user,
      })
      return {
        ...item,
        like: abc ? true : false,
      }
    }),
  )

  const count = await VehicleModel.countDocuments(inputData)

  if (vehicle.length > 0) {
    return {
      data: likes,
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
