import createCategoryController from '@/Controllers/vehiclesCategory/createCategoryController'
import deleteCategoryController from '@/Controllers/vehiclesCategory/deleteCategoryController'
import editCategoryController from '@/Controllers/vehiclesCategory/editCategoryController'
import getCategoriesController from '@/Controllers/vehiclesCategory/getCategoriesController'
import { VehicleCategory } from '@/Database/models/vehicleCategory'
import { parseJwtAdmin } from '@/services/authJwt'
import { upload } from '@/services/imgUpload'
import express, { Request, Response } from 'express'

const vechicleCategoryRouter = express.Router()
///getCategory
vechicleCategoryRouter.get(
  '/getCategories',
  [parseJwtAdmin],
  async (req: Request, res: Response) => {
    const limit = req.query.limit as string
    const offset = req.query.offset as string
    const response = await getCategoriesController(
      parseInt(limit),
      parseInt(offset),
    )
    res.json(response)
  },
)

///createCategory
vechicleCategoryRouter.post(
  '/createCategory',
  [parseJwtAdmin],
  upload.array('files'),
  async (req: any, res: Response) => {
    const input = req.body
    const files = req.files
    const filesUrl = files.map((item) => item.filename)
    const inputData = {
      ...input,
      vehicleImg: filesUrl[0],
    }
    const response = await createCategoryController(inputData)
    res.json(response)
  },
)
//editCategory
vechicleCategoryRouter.post(
  '/editCategory',
  [parseJwtAdmin],
  upload.array('files'),
  async (req: any, res: Response) => {
    const input = req.body
    const files = req.files
    let inputData = <VehicleCategory>{}
    if (files) {
      const filesUrl = files.map((item) => item.filename)
      inputData = {
        ...input,
        vehicleImg: filesUrl[0],
      }
    } else {
      inputData = {
        ...input,
      }
    }

    const response = await editCategoryController(inputData)
    res.json(response)
  },
)
//deleteCategory
vechicleCategoryRouter.post(
  '/deleteCategory',
  [parseJwtAdmin],
  async (req: Request, res: Response) => {
    const id = req.body.id
    console.log(id, 'idd')
    const response = await deleteCategoryController(id)
    res.json(response)
  },
)

export default vechicleCategoryRouter
