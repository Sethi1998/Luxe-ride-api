import VehicleCompanyModel, {
  VehicleCompany,
} from '@/Database/models/vehicleCompany'

import { categoryAlreadyExistError } from '@/Errors/vehicleCategory'

export default async (input: VehicleCompany) => {
  try {
    const findCategory = await VehicleCompanyModel.findOne({
      companyName: input.companyName,
    }).lean()
    const categoryExist = categoryAlreadyExistError(findCategory)
    if (categoryExist) return categoryExist
    const category = await VehicleCompanyModel.create(input)
    return {
      data: category,
      success: true,
      message: 'Successfully',
    }
  } catch (error) {
    return error
  }
}
