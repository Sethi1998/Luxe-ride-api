import { Vehicle } from '@/Database/models/vehicle'
import { VehicleCompany } from '@/Database/models/vehicleCompany'
import { VehicleType } from '@/Database/models/vehicleType'
import { vehicleFindOne } from '@/Database/operations/vehicle/vehicleFindOne'
import { Error } from '@/Types/error'

export const categoryAlreadyExistError = (
  category: VehicleCompany,
): Error | undefined => {
  if (category) {
    return {
      message: 'Category Name already exist.',
      success: false,
    }
  }
}

export const categoryDoesNotExistsError = (
  category: VehicleCompany | VehicleType | Vehicle,
): Error | undefined => {
  if (!category) {
    return {
      message: "Sorry we can't find this Category. Please check and try again.",
      success: false,
    }
  }
}

export const vinNumberExist = async (
  input: string,
): Promise<Error | undefined> => {
  if (input) {
    const vinNumber = await vehicleFindOne({ vinNumber: input })
    if (vinNumber) {
      return {
        message: 'Vin Number already exist.',
        success: false,
      }
    }
  }
}

export const numberPlateExist = async (
  plate: string,
): Promise<Error | undefined> => {
  if (plate) {
    const numberPlate = await vehicleFindOne({ plateNumber: plate })

    if (numberPlate) {
      return {
        message: 'Number Plate already exist.',
        success: false,
      }
    }
  }
}
