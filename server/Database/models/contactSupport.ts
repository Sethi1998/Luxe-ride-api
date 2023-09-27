import { Schema, model } from 'mongoose'

export interface ContactSupport {
  title: string
  email: string
  description: string
}

const ContactSupportSchema = new Schema<ContactSupport>(
  {
    title: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

const ContactSupportModel = model('contactsupport', ContactSupportSchema)
export default ContactSupportModel
