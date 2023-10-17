import ReportVehicleModel from '@/Database/models/reportVehicle'
import VehicleModel from '@/Database/models/vehicle'
import { categoryDoesNotExistsError } from '@/Errors/vehicleCategory'

export default async (input, user) => {
  console.log(input, 'input')
  const vehcile = await VehicleModel.findOne({ _id: input.vehicle }).lean()
  const vehcileExist = categoryDoesNotExistsError(vehcile)
  if (vehcileExist) {
    return vehcileExist
  }
  const data = {
    ...input,
    user: user,
  }
  const createReport = await ReportVehicleModel.create(data)
  return {
    data: createReport,
    success: true,
    message: 'Report Created',
  }
}
