import FavoriteVehcileModel from '@/Database/models/favoriteVehicle'

export default async (input) => {
  const vehicle = await FavoriteVehcileModel.findByIdAndDelete({
    _id: input._id,
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
