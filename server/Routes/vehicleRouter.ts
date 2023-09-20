import addvehicleController from '@/Controllers/vehicles/addvehicleController'
import getVehiclesController from '@/Controllers/vehicles/getVehiclesController'
import { parseJwt } from '@/services/authJwt'
import { upload } from '@/services/imgUpload'
import express, { Request, Response } from 'express'
const vehicleRouter = express.Router()
//gteVehicles
vehicleRouter.get('/getVehicles', async (req: Request, res: Response) => {
  const limit = req.query.limit as string
  const offset = req.query.offset as string
  const response = await getVehiclesController(
    parseInt(limit),
    parseInt(offset),
  )
  res.json(response)
})

//addVehicle
vehicleRouter.post(
  '/addVehicle',
  [parseJwt],
  upload.fields([{ name: 'insurance' }, { name: 'vehicleImages' }]),
  async (req: any, res: Response) => {
    const input = req.body
    const user = req.user
    const files = req.files
    const inputBody = {
      ...input,
      insurance: files.insurance,
      vehicleImages: files.vehicleImages,
    }
    const response = await addvehicleController(inputBody, user)
    res.json(response)
  },
)

export default vehicleRouter
