import VehicleTypemodel, { VehicleType } from '@/Database/models/vehicleType'
import { categoryDoesNotExistsError } from '@/Errors/vehicleCategory'

export default async (input: VehicleType) => {
  try {
    const findCategory = await VehicleTypemodel.findOne({
      _id: input._id,
    }).lean()

    const categoryNotExist = categoryDoesNotExistsError(findCategory)
    if (categoryNotExist)
      return {
        error: categoryNotExist,
      }
    const output = await VehicleTypemodel.findOneAndUpdate(
      { _id: input._id },
      { $set: input },
      { new: true },
    )
    return {
      data: output,
      success: true,
      message: 'Updated Successfully',
    }
  } catch (error) {
    return error
  }
}
