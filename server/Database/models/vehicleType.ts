import { Schema, model, Types } from 'mongoose'

export interface VehicleType {
  _id: Types.ObjectId
  vehicleTypeName: string
  vehicleTypeImg: string
  active: boolean
}

const VehicleTypeSchema = new Schema<VehicleType>(
  {
    vehicleTypeName: {
      type: String,
      required: true,
      unique: true,
    },
    vehicleTypeImg: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
)
const VehicleTypemodel = model('vehicleType', VehicleTypeSchema)
export default VehicleTypemodel
