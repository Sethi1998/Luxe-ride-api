import VehicleCompanyModel, {
  VehicleCompany,
} from '@/Database/models/vehicleCompany'
import { categoryDoesNotExistsError } from '@/Errors/vehicleCategory'

export default async (input: VehicleCompany) => {
  try {
    const findCategory = await VehicleCompanyModel.findOne({
      _id: input._id,
    }).lean()

    const categoryNotExist = categoryDoesNotExistsError(findCategory)
    if (categoryNotExist)
      return {
        error: categoryNotExist,
      }
    const output = await VehicleCompanyModel.findOneAndUpdate(
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
