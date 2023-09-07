import './init-aliases'
import express from 'express'
import bodyParser from 'body-parser'
import { config } from 'dotenv'
import userRouter from './Routes/userRoutes'
import initiateMongoServer from './Database'
import imgRouter from './services/imgUpload'
import cors from 'cors'
import vechicleCategoryRouter from './Routes/vehicleCompanyRoutes'
import vehicleRouter from './Routes/vehicleRouter'
import contactSupportRouter from './Routes/contactSupport'
const app: express.Application = express()
const PORT = 8080
const defaultRoute = '/carRental'
app.use(bodyParser.json())
app.use(cors())
app.use(express.static('uploads'))
app.use(defaultRoute, imgRouter)
app.use(defaultRoute, userRouter)
app.use(defaultRoute, vechicleCategoryRouter)
app.use(defaultRoute, vehicleRouter)
app.use(defaultRoute, contactSupportRouter)
config()
app.listen(PORT, () => {
  initiateMongoServer(process.env.DB_URL)
  console.log(`🚀 Query endpoint ready at http://localhost:${PORT}`)
})
