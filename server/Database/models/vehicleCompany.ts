import { Schema, model, Types } from 'mongoose'

export interface VehicleCompany {
  _id: Types.ObjectId
  companyName: string
  companyImg: string
  active: boolean
}

const VehicleCompanySchema = new Schema<VehicleCompany>(
  {
    companyName: {
      type: String,
      required: true,
      unique: true,
    },
    companyImg: {
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
const VehicleCompanyModel = model('vehicleCompanies', VehicleCompanySchema)
export default VehicleCompanyModel
