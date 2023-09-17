import VehicleTypemodel from '@/Database/models/vehicleType'

export default async (input) => {
  const type = await VehicleTypemodel.create(input)
  return {
    data: type,
    success: true,
    message: 'Type Created Successfully',
  }
}
