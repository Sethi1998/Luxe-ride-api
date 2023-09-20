import { Schema, Types, model } from 'mongoose'

enum UserRole {
  user = 'user',
  owner = 'owner',
  admin = 'admin',
}
enum DeviceType {
  android = 'android',
  ios = 'ios',
}
enum SignupType {
  email = 'email',
  facebook = 'facebook',
  google = 'google',
  apple = 'apple',
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
  socialId: string
  firstName: string
  lastName: string
  email: string
  phone: string
  password: string
  role: UserRole
  license: Driverlicense
  ninNumber: string
  profileImg: string
  deviceType: DeviceType
  fcmToken: string
  countryCode: string
  signUpType: SignupType
  isEmailVerified: boolean
  isPhoneVerified: boolean
  isFacebook: string
  language: string
  description: string
}
const UserSchema = new Schema<user>(
  {
    socialId: {
      type: String,
    },
    signUpType: {
      type: String,
      enum: SignupType,
    },
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
      unique: true,
    },

    phone: {
      type: String,
      unique: true,
    },
    countryCode: {
      type: String,
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
    ninNumber: {
      type: String,
    },
    profileImg: {
      type: String,
    },
    deviceType: {
      type: String,
      enum: DeviceType,
    },
    fcmToken: {
      type: String,
    },
    role: {
      type: String,
      enum: UserRole,
      default: UserRole.user,
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    isPhoneVerified: {
      type: Boolean,
      default: false,
    },
    isFacebook: {
      type: String,
    },
    language: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
)
const UserModel = model('user', UserSchema)
export default UserModel
