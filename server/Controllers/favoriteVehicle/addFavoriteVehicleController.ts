import FavoriteVehcileModel from '@/Database/models/favoriteVehicle'
import VehicleModel from '@/Database/models/vehicle'
import { categoryDoesNotExistsError } from '@/Errors/vehicleCategory'

export default async (input, user) => {
  const vehicle = await VehicleModel.findById({ _id: input.vehicle }).lean()
  const category = categoryDoesNotExistsError(vehicle)
  if (category) {
    return category
  }
  const createFavorite = await FavoriteVehcileModel.create({
    vehicle: input.vehicle,
    user: user._id,
  })
  const vehicleData = await FavoriteVehcileModel.findById({
    _id: createFavorite._id,
  })
    .populate('vehicle')
    .populate('user')
    .lean()
  return {
    data: vehicleData,
    success: true,
    message: 'Favorite Added',
  }
}
