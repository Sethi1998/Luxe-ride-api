import { Schema, Types, model } from 'mongoose'

export interface VehicleSubCategory {
  categoryId: Types.ObjectId
  subCategoryName: string
  status: boolean
}
const VehicleSubCategorySchema = new Schema<VehicleSubCategory>(
  {
    categoryId: {
      type: Schema.ObjectId,
      ref: 'vehicleCompanies',
    },

    subCategoryName: {
      type: String,
      required: true,
      unique: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
)
const VehicleSubCategoryModel = model(
  'vehicleSubCategory',
  VehicleSubCategorySchema,
)
export default VehicleSubCategoryModel
