import { Schema, model } from 'mongoose'
export interface Vehicle {
  vehicleLocated: string
  vehicleName: string
  vehicleCategory: string
  vehicleYear: number
  plateNumber: string
  trim: string
  color: string
  vinNumber: string
  doors: number
  seats: number
  fuelType: string
  model: string
  engine: string
  insurance: string[]
  vehicleImages: string[]
  vehicleOwner: string
}

const VehicleSchema = new Schema<Vehicle>(
  {
    vehicleLocated: {
      type: String,
      required: true,
    },
    vehicleCategory: {
      type: String,
      ref: 'vehicleCategory',
      required: true,
    },
    vehicleName: {
      type: String,
      required: true,
    },
    vehicleYear: {
      type: Number,
      required: true,
    },
    plateNumber: {
      type: String,
      required: true,
      unique: true,
    },
    trim: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    vinNumber: {
      type: String,
      required: true,
      unique: true,
    },
    doors: {
      type: Number,
      required: true,
    },
    seats: {
      type: Number,
      required: true,
    },
    fuelType: {
      type: String,
      required: true,
    },
    engine: {
      type: String,
      required: true,
    },
    insurance: [
      {
        type: String,
      },
    ],
    vehicleImages: [
      {
        type: String,
      },
    ],
    vehicleOwner: {
      type: String,
      ref: 'user',
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

const VehicleModel = model('vehicle', VehicleSchema)
export default VehicleModel
