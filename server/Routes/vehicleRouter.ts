import addvehicleController from '@/Controllers/vehicles/addvehicleController'
import getVehiclesController from '@/Controllers/vehicles/getVehiclesController'
import { parseJwt } from '@/services/authJwt'
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
  async (req: any, res: Response) => {
    const input = req.body
    const user = req.user
    const response = await addvehicleController(input, user)
    res.json(response)
  },
)

export default vehicleRouter
