import VehicleCategoryModel from '@/Database/models/vehicleCategory'

export default async (limit: number, offset: number) => {
  try {
    const categories = await VehicleCategoryModel.find()
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(offset)
      .lean()
    const totalCount = await VehicleCategoryModel.countDocuments()

    return {
      data: categories,
      count: totalCount,
    }
  } catch (error) {
    return error
  }
}
