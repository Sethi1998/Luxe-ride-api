import VehicleCompanyModel from '@/Database/models/vehicleCompany'

export default async (limit: number, offset: number) => {
  try {
    const categories = await VehicleCompanyModel.find()
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(offset)
      .lean()
    const totalCount = await VehicleCompanyModel.countDocuments()

    return {
      data: categories,
      count: totalCount,
    }
  } catch (error) {
    return error
  }
}
