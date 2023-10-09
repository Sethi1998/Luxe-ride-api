import FavoriteVehcileModel from '@/Database/models/favoriteVehicle'

export default async (input, user) => {
  const vehicle = await FavoriteVehcileModel.findByIdAndDelete({
    vehicle: input.vehicle,
    user: user,
  })
  if (vehicle) {
    return {
      success: true,
      message: 'Vehilce Removed SuccessFully',
    }
  } else {
    {
      return {
        success: false,
        message: 'Something Went Wrong',
      }
    }
  }
}
