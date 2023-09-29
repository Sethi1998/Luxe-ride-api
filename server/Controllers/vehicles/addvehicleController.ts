import { user } from '@/Database/models/user'
import VehicleModel, { Vehicle } from '@/Database/models/vehicle'
// import VehicleCategoryModel from '@/Database/models/vehicleCompany'
// import {
//   categoryDoesNotExistsError,
//   numberPlateExist,
//   vinNumberExist,
// } from '@/Errors/vehicleCategory'

export default async (input: Vehicle, user: user) => {
  try {
    // const category = await VehicleCategoryModel.findOne({
    //   _id: input.model,
    // }).lean()
    // const vinNumber = await vinNumberExist(input.vinNumber)
    // if (vinNumber) {
    //   return { error: vinNumber }
    // }
    // const plateNumber = await numberPlateExist(input.plateNumber)
    // if (plateNumber) {
    //   return { error: plateNumber }
    // }
    // const categoryNotExist = categoryDoesNotExistsError(category)
    // if (categoryNotExist)
    //   return {
    //     error: categoryNotExist,
    //   }
    const vehicleData = {
      ...input,
      vehicleOwner: user._id,
    }

    if (input.step === 1) {
      const addVehicle = await VehicleModel.create(vehicleData)
      return {
        data: addVehicle,
      }
    } else {
      const update = await VehicleModel.findOneAndUpdate(
        { _id: input._id },
        { $set: input },
        { new: true },
      )
      console.log(update, 'updatee')
    }
  } catch (error) {
    return {
      error: error,
    }
  }
}
