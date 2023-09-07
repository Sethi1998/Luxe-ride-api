import createSupportController from '@/Controllers/contactSupport/createSupportController'
import express, { Request, Response } from 'express'
const contactSupportRouter = express.Router()

//create
contactSupportRouter.post(
  '/createSupport',
  async (req: Request, res: Response) => {
    const input = req.body
    const response = await createSupportController(input)
    res.json(response)
  },
)
export default contactSupportRouter
