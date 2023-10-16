import addvehicleController from '@/Controllers/vehicles/addvehicleController'
import deleteVehicleController from '@/Controllers/vehicles/deleteVehicleController'
import getAllVehiclesControler from '@/Controllers/vehicles/getAllVehiclesControler'
import getVehicleController from '@/Controllers/vehicles/getVehicleController'
import getVehiclesController from '@/Controllers/vehicles/getVehiclesController'
import updateVehicle from '@/Controllers/vehicles/updateVehicle'
import { parseJwt } from '@/services/authJwt'
import express, { Response } from 'express'
const vehicleRouter = express.Router()

//getVehicle
vehicleRouter.get('/getVehicle', [parseJwt], async (req, res) => {
  const input = req.query.id as string
  const response = await getVehicleController(input)
  res.json(response)
})
//getMeVehicles
vehicleRouter.get(
  '/getMeVehicles',
  [parseJwt],
  async (req: any, res: Response) => {
    const limit = req.query.limit as string
    const offset = req.query.offset as string
    const publish = req.query.publish as boolean
    const user = req.user
    const response = await getVehiclesController(
      user,
      parseInt(limit),
      parseInt(offset),
      publish,
    )
    res.json(response)
  },
)

// getAllVehicles
vehicleRouter.post('/getAllVehicles', [parseJwt], async (req, res) => {
  const input = req.body
  const user = req.user
  const response = await getAllVehiclesControler(input, user)
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

//updateVehicle
vehicleRouter.post(
  '/updateVehicle',
  [parseJwt],
  async (req: any, res: Response) => {
    const input = req.body
    const output = await updateVehicle(input)
    res.json(output)
  },
)
//deleteVehicle
vehicleRouter.delete(
  '/deleteVehicle',
  [parseJwt],
  async (req: any, res: Response) => {
    const input = req.body
    const output = await deleteVehicleController(input)
    res.json(output)
  },
)
export default vehicleRouter
