import getAllUserController from '@/Controllers/user/getAllUserController'
import loginController from '@/Controllers/user/loginController'
import signupController from '@/Controllers/user/signupController'
import updateUserController from '@/Controllers/user/updateUserController'
import { IGetUserAuthInfoRequest } from '@/Types/User'
import { parseJwt, parseJwtAdmin } from '@/services/authJwt'
import express, { Request, Response } from 'express'
import usersFindOne from '@/Database/operations/User/findOne'
const userRouter = express.Router()

//getUserInfo
userRouter.get(
  '/getUser',
  [parseJwt],
  async (req: IGetUserAuthInfoRequest, res: Response) => {
    const id = req.user._id
    if (!id) return null
    const user = await usersFindOne({ _id: id })
    res.json(user)
  },
)

//getAdminInfo
userRouter.get(
  '/getAdmin',
  [parseJwtAdmin],
  async (req: IGetUserAuthInfoRequest, res: Response) => {
    const id = req.user._id
    if (!id) return null
    const user = await usersFindOne({ _id: id })
    res.json(user)
  },
)
// getAllUser
userRouter.get('/getUsers', [parseJwt], async (req: Request, res: Response) => {
  const input = req.query.filter as string
  const limit = req.query.limit as string
  const offset = req.query.offset as string
  const users = await getAllUserController(
    parseInt(limit),
    parseInt(offset),
    input,
  )
  res.json(users)
})

//registerUser
userRouter.post('/signup', async (req: Request, res: Response) => {
  const input = req.body
  const response = await signupController(input)
  res.json(response)
})
//loginUser
userRouter.post('/login', async (req: Request, res: Response) => {
  const input = req.body
  const response = await loginController(input)
  res.json(response)
})
//loginAdmin

userRouter.post('/adminlogin', async (req: Request, res: Response) => {
  const input = req.body
  const response = await loginController(input)
  res.json(response)
})
//updateuser
userRouter.post(
  '/updateUser',
  [parseJwt],
  async (req: IGetUserAuthInfoRequest, res: Response) => {
    const user = req.user
    const input = req.body
    const response = await updateUserController(user, input)
    res.json(response)
  },
)

export default userRouter
