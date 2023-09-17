import VehicleCompanyModel from '@/Database/models/vehicleCompany'

export default async (input: string) => {
  const res = await VehicleCompanyModel.deleteOne({ _id: input })
  if (res) {
    return {
      success: true,
      message: 'Category Deleted Successfully',
    }
  }
}
