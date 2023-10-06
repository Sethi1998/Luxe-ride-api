import FavoriteVehcileModel from '@/Database/models/favoriteVehicle'

export default async (user) => {
  const vehciles = await FavoriteVehcileModel.find({ user: user })
    .populate('vehicle')
    .populate('user')
    .lean()
  if (vehciles.length > 0) {
    return {
      data: vehciles,
      success: true,
      message: 'Favorite Vehicles Found',
    }
  } else {
    return {
      success: false,
      message: 'No Favorite Vehicles FOund',
    }
  }
}
