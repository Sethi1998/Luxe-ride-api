import { Schema, Types, model } from 'mongoose'

export interface Vehicle {
  _id: string
  address: string
  city: string
  state: string
  postalCode: string
  lat: string
  long: string
  year: string
  category: Types.ObjectId
  make: Types.ObjectId
  model: Types.ObjectId
  color: string
  vinNumber: string
  trim: string
  door: string
  plateNumber: string
  seat: string
  fuelType: string
  transmission: string
  odometer: string
  discount: string
  discountAmount: string
  amount: string
  insurance: string[]
  images: string[]
  description: string
  vehicleOwner: Types.ObjectId
  step: string
  publish: boolean
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
    lat: {
      type: String,
    },
    long: {
      type: String,
    },
    year: {
      type: String,
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
      index: true,
      unique: true,
      sparse: true,
    },
    trim: {
      type: String,
    },
    door: {
      type: String,
    },
    plateNumber: {
      type: String,
      index: true,
      unique: true,
      sparse: true,
    },
    seat: {
      type: String,
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
      type: String,
    },
    discountAmount: {
      type: String,
    },
    amount: {
      type: String,
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
      type: String,
    },
    publish: {
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
