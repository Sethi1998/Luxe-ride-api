import ContactSupportModel, {
  ContactSupport,
} from '@/Database/models/contactSupport'
import { isValidEmailError } from '@/Errors/user'
import sendSupportEmail from '@/services/email/sendContactSupport'

export default async (input: ContactSupport) => {
  try {
    const validEmail = isValidEmailError(input.email)
    if (validEmail) return validEmail
    const contact = await ContactSupportModel.create(input)
    if (contact) {
      sendSupportEmail(input.email)
    }
    return {
      data: contact,
      success: true,
      message: 'Contact Support Created Successfully',
    }
  } catch (error) {
    return error
  }
}
