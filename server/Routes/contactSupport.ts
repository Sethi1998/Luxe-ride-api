import createSupportController from '@/Controllers/contactSupport/createSupportController'
import getSupportController from '@/Controllers/contactSupport/getSupportController'
import { parseJwtAdmin } from '@/services/authJwt'
import express, { Request, Response } from 'express'
const contactSupportRouter = express.Router()

contactSupportRouter.get('/getSupport', [parseJwtAdmin], async (req, res) => {
  const output = await getSupportController()
  res.json(output)
})
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
