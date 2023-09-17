import VehicleTypemodel from '@/Database/models/vehicleType'

export default async () => {
  const types = await VehicleTypemodel.find().lean()
  const totalCount = await VehicleTypemodel.countDocuments()
  return {
    data: types,
    count: totalCount,
    success: true,
    message: 'Vehicle Types',
  }
}
