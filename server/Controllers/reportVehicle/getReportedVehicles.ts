import ReportVehicleModel from '@/Database/models/reportVehicle'

export default async () => {
  const reportedVehicles = await ReportVehicleModel.find()
    .populate('vehicle')
    .populate('user')
    .lean()
  return {
    data: reportedVehicles,
    message: 'Reported Vehicles Data',
    success: true,
  }
}
