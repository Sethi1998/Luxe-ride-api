import VehicleTypemodel from '@/Database/models/vehicleType'

export default async (input: string) => {
  const res = await VehicleTypemodel.deleteOne({ _id: input })
  if (res) {
    return {
      success: true,
      message: 'Type Deleted Successfully',
    }
  }
}
