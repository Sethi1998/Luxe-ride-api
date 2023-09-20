import createvehicleTypeController from '@/Controllers/vehicleType/createvehicleTypeController'
import deleteVehicleTypeController from '@/Controllers/vehicleType/deleteVehicleTypeController'
import editVehicleTypeController from '@/Controllers/vehicleType/editVehicleTypeController'
import getVehiclesTypeController from '@/Controllers/vehicleType/getVehiclesTypeController'
import { VehicleType } from '@/Database/models/vehicleType'
import { parseJwtAdmin } from '@/services/authJwt'
import { upload } from '@/services/imgUpload'
import express, { Request, Response } from 'express'

const vehicleTypeRouter = express.Router()

vehicleTypeRouter.get(
  '/getVehicleTypes',
  async (req: Request, res: Response) => {
    // const limit = req.query.limit as string
    // const offset = req.query.offset as string
    const response = await getVehiclesTypeController()
    res.json(response)
  },
)
vehicleTypeRouter.post(
  '/createVehicleType',
  [parseJwtAdmin],
  upload.array('files'),
  async (req: any, res: Response) => {
    const input = req.body
    const files = req.files
    const filesUrl = files.map((item) => item.filename)
    const inputData = {
      ...input,
      vehicleTypeImg: filesUrl[0],
    }
    const response = await createvehicleTypeController(inputData)
    res.json(response)
  },
)
vehicleTypeRouter.post(
  '/editVehicleType',
  [parseJwtAdmin],
  upload.array('files'),
  async (req: any, res: Response) => {
    const input = req.body
    const files = req.files
    let inputData = <VehicleType>{}
    if (files) {
      const filesUrl = files.map((item) => item.filename)
      inputData = {
        ...input,
        vehicleTypeImg: filesUrl[0],
      }
    } else {
      inputData = {
        ...input,
      }
    }
    const response = await editVehicleTypeController(inputData)
    res.json(response)
  },
)
vehicleTypeRouter.post(
  '/deleteVehicleType',
  [parseJwtAdmin],
  async (req: Request, res: Response) => {
    const id = req.body.id

    const response = await deleteVehicleTypeController(id)
    res.json(response)
  },
)

export default vehicleTypeRouter
