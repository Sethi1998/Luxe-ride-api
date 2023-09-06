import VehicleCategoryModel, {
  VehicleCategory,
} from '@/Database/models/vehicleCategory'
import { categoryDoesNotExistsError } from '@/Errors/vehicleCategory'

export default async (input: VehicleCategory) => {
  try {
    const findCategory = await VehicleCategoryModel.findOne({
      _id: input._id,
    }).lean()

    const categoryNotExist = categoryDoesNotExistsError(findCategory)
    if (categoryNotExist)
      return {
        error: categoryNotExist,
      }
    const output = await VehicleCategoryModel.findOneAndUpdate(
      { _id: input._id },
      { $set: input },
      { new: true },
    )
    return {
      data: output,
    }
  } catch (error) {
    return error
  }
}
