import { Schema, model } from 'mongoose'
export interface Address {
  address: string
  city: string
  state: string
  postalCode: string
}
export interface Vehicle {
  _id: string
  locatedAddress: Address
  year: number
  category: string
  make: string
  model: string
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
  vehicleOwner: string
  step: number
  status: boolean
}

const VehicleSchema = new Schema<Vehicle>(
  {
    locatedAddress: {
      type: {
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
      },
    },
    year: {
      type: Number,
    },
    category: {
      type: String,
      ref: 'vehicleType',
    },
    make: {
      type: String,
      ref: 'vehicleCompanies',
    },
    model: {
      type: String,
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
      type: String,
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
