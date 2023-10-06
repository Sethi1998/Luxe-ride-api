import { Schema, Types, model } from 'mongoose'

export interface FavoriteVehicle {
  vehicle: Types.ObjectId
  user: Types.ObjectId
}

const FavoriteVehicleSchema = new Schema<FavoriteVehicle>(
  {
    vehicle: {
      type: Schema.Types.ObjectId,
      ref: 'vehicle',
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  },
  {
    timestamps: true,
  },
)
const FavoriteVehcileModel = model('favoritevehicle', FavoriteVehicleSchema)
export default FavoriteVehcileModel
