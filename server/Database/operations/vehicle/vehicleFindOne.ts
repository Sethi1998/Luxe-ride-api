import VehicleModel, { Vehicle } from '@/Database/models/vehicle'

export const vehicleFindOne = async (
  filter: Record<string, any>,
): Promise<Vehicle | null> => {
  return await VehicleModel.findOne(filter).lean()
}
