import VehicleSubCategoryModel from '@/Database/models/vehicleSubCategory'

export default async (filter, limit, offset) => {
  try {
    let condition = {}

    if (filter) {
      condition = {
        categoryId: filter,
      }
    } else {
      condition = {}
    }

    const subCategory = await VehicleSubCategoryModel.find(condition)
      .populate('categoryId')
      .limit(limit)
      .skip(offset)
      .lean()
    return {
      data: subCategory,
      success: true,
      message: 'Success',
    }
  } catch (error) {
    return error
  }
}
