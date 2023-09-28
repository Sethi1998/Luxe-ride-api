import addSubCategoryController from '@/Controllers/subCategory/addSubCategoryController'
import getSubCategoryController from '@/Controllers/subCategory/getSubCategoryController'
import { parseJwtAdmin } from '@/services/authJwt'
import express from 'express'

const vehicleSubCategoryRouter = express.Router()

vehicleSubCategoryRouter.get('/getSubCategories', async (req, res) => {
  const filter = req.query.filter as string
  const limit = req.query.limit as string
  const offset = req.query.offset as string
  const output = await getSubCategoryController(filter, limit, offset)
  res.json(output)
})
vehicleSubCategoryRouter.post(
  '/addSubCategory',
  [parseJwtAdmin],
  async (req, res) => {
    const input = req.body
    const response = await addSubCategoryController(input)
    res.json(response)
  },
)
export default vehicleSubCategoryRouter
