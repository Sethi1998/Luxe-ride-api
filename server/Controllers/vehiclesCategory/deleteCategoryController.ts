import VehicleCategoryModel from '@/Database/models/vehicleCategory'

export default async (input: string) => {
  const res = await VehicleCategoryModel.deleteOne({ _id: input })
  if (res) {
    return 'Category Deleted Successfully'
  }
}
