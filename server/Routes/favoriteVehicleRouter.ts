import addFavoriteVehicleController from '@/Controllers/favoriteVehicle/addFavoriteVehicleController'
import getfavoriteVehicleController from '@/Controllers/favoriteVehicle/getfavoriteVehicleController'
import removeFavoriteVehicleController from '@/Controllers/favoriteVehicle/removeFavoriteVehicleController'
import { parseJwt } from '@/services/authJwt'
import express from 'express'

const favoriteVehicleRouter = express.Router()
//getfavorite
favoriteVehicleRouter.get(
  '/getFavoriteVehicles',
  [parseJwt],
  async (req, res) => {
    const user = req.user
    const response = await getfavoriteVehicleController(user)
    res.json(response)
  },
)

//adFavorite
favoriteVehicleRouter.post(
  '/addFavoriteVehicle',
  [parseJwt],
  async (req, res) => {
    const user = req.user
    const input = req.body
    const response = await addFavoriteVehicleController(input, user)
    res.json(response)
  },
)
//removeFavorite
favoriteVehicleRouter.post(
  '/removeFavoriteVehicle',
  [parseJwt],
  async (req, res) => {
    const input = req.body
    const response = await removeFavoriteVehicleController(input)
    res.json(response)
  },
)
export default favoriteVehicleRouter
