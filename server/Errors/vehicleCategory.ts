import { VehicleCategory } from '@/Database/models/vehicleCategory'
import { vehicleFindOne } from '@/Database/operations/vehicle/vehicleFindOne'
import { Error } from '@/Types/error'

export const categoryAlreadyExistError = (
  category: VehicleCategory,
): Error | undefined => {
  if (category) {
    return {
      message: 'Category Name already exist.',
      code: 'false',
    }
  }
}

export const categoryDoesNotExistsError = (
  category: VehicleCategory,
): Error | undefined => {
  if (!category) {
    return {
      message: "Sorry we can't find this Category. Please check and try again.",
      code: 'false',
    }
  }
}

export const vinNumberExist = async (
  input: string,
): Promise<Error | undefined> => {
  const vinNumber = await vehicleFindOne({ vinNumber: input })
  if (vinNumber) {
    return {
      message: 'Vin Number already exist.',
      code: 'false',
    }
  }
}

export const numberPlateExist = async (
  plate: string,
): Promise<Error | undefined> => {
  const numberPlate = await vehicleFindOne({ plateNumber: plate })

  if (numberPlate) {
    return {
      message: 'Number Plate already exist.',
      code: 'false',
    }
  }
}
