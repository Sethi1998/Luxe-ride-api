import { Schema, Types, model } from 'mongoose'

enum UserRole {
  user = 'user',
  owner = 'owner',
  admin = 'admin',
}
interface Driverlicense {
  firstName: string
  middleName: string
  lastName: string
  city: string
  country: string
  licenseNumber: string
  dob: string
  expirationDate: string
}
export interface user {
  _id: Types.ObjectId
  firstName: string
  lastName: string
  email: string
  phone: string
  password: string
  role: UserRole
  license: Driverlicense
  profileImg: string
  deviceType: string
  fcmToken: string
}
const UserSchema = new Schema<user>(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    license: new Schema<Driverlicense>({
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      middleName: {
        type: String,
      },
      city: {
        type: String,
      },
      country: {
        type: String,
      },
      licenseNumber: {
        type: String,
      },
      dob: {
        type: String,
      },
      expirationDate: {
        type: String,
      },
    }),
    profileImg: {
      type: String,
    },
    deviceType: {
      type: String,
    },
    fcmToken: {
      type: String,
    },
    role: {
      type: String,
      enum: ['user', 'owner', 'admin'],
    },
  },
  {
    timestamps: true,
  },
)
const UserModel = model('user', UserSchema)
export default UserModel
