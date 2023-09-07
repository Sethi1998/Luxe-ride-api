import nodemailer from 'nodemailer'
import { signupTemplate } from '../templates/signupTemplate'
import { isEmailSend } from '@/Errors/user'
const sendSupportEmail = async (email: string) => {
  try {
    //step1
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'yash.codedrill@gmail.com',
        pass: 'bafiakfljuikrlcz',
      },
    })

    //step2
    const mailOptions = {
      from: 'yash.codedrill@gmail.com',
      to: email,
      subject: 'Contact Support Verification',
      html: signupTemplate().toString(),
    }
    //step3
    const sendEmail = await transporter.sendMail(mailOptions)
    const isSend = isEmailSend(sendEmail)
    return isSend
  } catch (error) {
    return error
  }
}
export default sendSupportEmail
