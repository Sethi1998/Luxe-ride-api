import VehicleModel from '@/Database/models/vehicle'

export default async (input) => {
  const deleteVehicle = await VehicleModel.findOneAndDelete({ _id: input._id })
  if (deleteVehicle) {
    return {
      success: true,
      message: 'Vehicle Deleted SuccessFully',
    }
  } else {
    return {
      success: false,
      message: 'Vehicle Not Found',
    }
  }
}
