import { Schema, Types, model } from 'mongoose'

export interface Vehicle {
  _id: string
  address: string
  city: string
  state: string
  postalCode: string
  year: number
  category: Types.ObjectId
  make: Types.ObjectId
  model: Types.ObjectId
  color: string
  vinNumber: string
  trim: string
  door: number
  plateNumber: string
  seat: number
  fuelType: string
  transmission: string
  odometer: string
  discount: number
  amount: number
  insurance: string[]
  images: string[]
  description: string
  vehicleOwner: Types.ObjectId
  step: number
  status: boolean
}

const VehicleSchema = new Schema<Vehicle>(
  {
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    postalCode: {
      type: String,
    },

    year: {
      type: Number,
    },
    category: {
      type: Schema.ObjectId,
      ref: 'vehicleType',
    },
    make: {
      type: Schema.ObjectId,
      ref: 'vehicleCompanies',
    },
    model: {
      type: Schema.ObjectId,
      ref: 'vehicleSubCategory',
    },
    color: {
      type: String,
    },
    vinNumber: {
      type: String,
    },
    trim: {
      type: String,
    },
    door: {
      type: Number,
    },
    plateNumber: {
      type: String,
    },
    seat: {
      type: Number,
    },
    fuelType: {
      type: String,
    },
    transmission: {
      type: String,
    },
    odometer: {
      type: String,
    },
    discount: {
      type: Number,
    },
    amount: {
      type: Number,
    },
    insurance: [
      {
        type: String,
      },
    ],
    images: [
      {
        type: String,
      },
    ],
    description: {
      type: String,
    },
    vehicleOwner: {
      type: Schema.ObjectId,
      ref: 'user',
    },
    step: {
      type: Number,
    },
    status: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
)

const VehicleModel = model('vehicle', VehicleSchema)
export default VehicleModel
