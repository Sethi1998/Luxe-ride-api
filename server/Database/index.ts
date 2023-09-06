import mongoose from 'mongoose'

const initiateMongoServer = (DB_URL: string) => {
  try {
    mongoose.set('strictQuery', false)
    mongoose.connect(DB_URL)
    console.info('Connected to DB')
  } catch (err) {
    throw new Error(err)
  }
}

export default initiateMongoServer
