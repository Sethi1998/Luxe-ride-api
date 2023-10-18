import getReportedVehicles from '@/Controllers/reportVehicle/getReportedVehicles'
import reportVehicle from '@/Controllers/reportVehicle/reportVehicle'
import { IGetUserAuthInfoRequest } from '@/Types/User'
import { parseJwt } from '@/services/authJwt'
import express from 'express'
const reportVehicleRouter = express.Router()
//getVehicleReports
reportVehicleRouter.get(
  '/getReportedVehicles',
  [parseJwt],
  async (req, res) => {
    const response = await getReportedVehicles()
    res.json(response)
  },
)

//reportVehcile
reportVehicleRouter.post(
  '/reportVehicle',
  [parseJwt],
  async (req: IGetUserAuthInfoRequest, res) => {
    const body = req.body
    const user = req.user
    const response = await reportVehicle(body, user)
    res.json(response)
  },
)

export default reportVehicleRouter
