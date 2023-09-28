import VehicleCompanyModel from '@/Database/models/vehicleCompany'
import VehicleSubCategoryModel from '@/Database/models/vehicleSubCategory'
import { categoryDoesNotExistsError } from '@/Errors/vehicleCategory'

export default async (input: {
  categoryId: string
  subCategoryName: string
}) => {
  try {
    const categoryExist = await VehicleCompanyModel.findOne({
      _id: input.categoryId,
    }).lean()
    const categoryNotExist = categoryDoesNotExistsError(categoryExist)
    if (categoryNotExist) {
      return {
        categoryNotExist,
      }
    }
    const response = await VehicleSubCategoryModel.create(input)
    return {
      data: response,
      success: true,
      message: 'Successfully',
    }
  } catch (error) {
    return error
  }
}
