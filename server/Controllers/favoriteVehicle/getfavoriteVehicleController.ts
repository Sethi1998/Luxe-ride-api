import FavoriteVehcileModel from '@/Database/models/favoriteVehicle'
import mongoose from 'mongoose'

export default async (user) => {
  const vehciles = await FavoriteVehcileModel.aggregate([
    {
      $match: {
        user: new mongoose.Types.ObjectId(user._id),
      },
    },
    {
      $lookup: {
        from: 'vehicles',
        localField: 'vehicle',
        foreignField: '_id',
        as: 'vehicle',
      },
    },
    { $unwind: '$vehicle' },
    {
      $lookup: {
        from: 'vehiclecompanies',
        localField: 'vehicle.make',
        foreignField: '_id',
        as: 'make',
      },
    },
    {
      $lookup: {
        from: 'vehiclesubcategories',
        localField: 'vehicle.model',
        foreignField: '_id',
        as: 'model',
      },
    },
    { $unwind: '$make' },
    { $unwind: '$model' },
  ])

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
