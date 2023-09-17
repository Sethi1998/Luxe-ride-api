import createCompanyController from '@/Controllers/vehicleCompany/createCompanyController'
import deleteCompanyController from '@/Controllers/vehicleCompany/deleteCompanyController'
import editCompanyController from '@/Controllers/vehicleCompany/editCompanyController'
import getCompanyController from '@/Controllers/vehicleCompany/getCompanyController'
import { VehicleCompany } from '@/Database/models/vehicleCompany'
import { parseJwt, parseJwtAdmin } from '@/services/authJwt'
import { upload } from '@/services/imgUpload'
import express, { Request, Response } from 'express'

const vechicleCompanyRouter = express.Router()
///getCategory
vechicleCompanyRouter.get(
  '/getCompanies',
  [parseJwt],
  async (req: Request, res: Response) => {
    const limit = req.query.limit as string
    const offset = req.query.offset as string
    const response = await getCompanyController(
      parseInt(limit),
      parseInt(offset),
    )
    res.json(response)
  },
)

///createCompany
vechicleCompanyRouter.post(
  '/createCompany',
  [parseJwtAdmin],
  upload.array('files'),
  async (req: any, res: Response) => {
    const input = req.body
    const files = req.files
    const filesUrl = files.map((item) => item.filename)
    const inputData = {
      ...input,
      companyImg: filesUrl[0],
    }
    const response = await createCompanyController(inputData)
    res.json(response)
  },
)
//editCategory
vechicleCompanyRouter.post(
  '/editCompany',
  [parseJwtAdmin],
  upload.array('files'),
  async (req: any, res: Response) => {
    const input = req.body
    const files = req.files
    let inputData = <VehicleCompany>{}
    if (files) {
      const filesUrl = files.map((item) => item.filename)
      inputData = {
        ...input,
        companyImg: filesUrl[0],
      }
    } else {
      inputData = {
        ...input,
      }
    }
    const response = await editCompanyController(inputData)
    res.json(response)
  },
)
//deleteCategory
vechicleCompanyRouter.post(
  '/deleteCompany',
  [parseJwtAdmin],
  async (req: Request, res: Response) => {
    const id = req.body.id
    const response = await deleteCompanyController(id)
    res.json(response)
  },
)

export default vechicleCompanyRouter
