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
        as: 'vehicleData',
      },
    },
    { $unwind: '$vehicleData' },
    {
      $lookup: {
        from: 'vehiclecompanies',
        localField: 'vehicleData.make',
        foreignField: '_id',
        as: 'companyData',
      },
    },
    {
      $lookup: {
        from: 'vehiclesubcategories',
        localField: 'vehicleData.model',
        foreignField: '_id',
        as: 'modelData',
      },
    },
    { $unwind: '$companyData' },
    { $unwind: '$modelData' },
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
