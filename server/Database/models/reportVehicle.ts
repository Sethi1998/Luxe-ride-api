import { Schema, Types, model } from 'mongoose'

export interface ReportVehcile {
  _id: string
  vehicle: Types.ObjectId
  user: Types.ObjectId
  reason: string
  message: string
}

const ReportVehcileSchema = new Schema<ReportVehcile>({
  vehicle: {
    type: Schema.Types.ObjectId,
    ref: 'vehicle',
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  reason: {
    type: String,
  },
  message: {
    type: String,
  },
})
const ReportVehicleModel = model('reportvehicle', ReportVehcileSchema)
export default ReportVehicleModel
