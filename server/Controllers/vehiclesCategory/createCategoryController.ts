import VehicleCategoryModel, {
  VehicleCategory,
} from '@/Database/models/vehicleCategory'
import { categoryAlreadyExistError } from '@/Errors/vehicleCategory'

export default async (input: VehicleCategory) => {
  try {
    const findCategory = await VehicleCategoryModel.findOne({
      vehicleName: input.vehicleName,
    }).lean()
    const categoryExist = categoryAlreadyExistError(findCategory)
    if (categoryExist)
      return {
        error: categoryExist,
      }
    const category = await VehicleCategoryModel.create(input)
    return {
      data: category,
    }
  } catch (error) {
    return error
  }
}
