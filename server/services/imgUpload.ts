import Multer from 'multer'
import express from 'express'
import { v4 as uuidv4 } from 'uuid'
import sanitize from 'sanitize-filename'
import fs from 'fs'
import { parseJwt } from './authJwt'
const router = express.Router()

const fileStorage = Multer.diskStorage({
  destination: (req, file, cb) => {
    const path = `uploads`
    fs.mkdirSync(path, { recursive: true })
    cb(null, path)
  },
  filename: (req, file, cb) => {
    if (
      file.mimetype == 'image/png' ||
      file.mimetype == 'image/jpg' ||
      file.mimetype == 'image/jpeg'
    ) {
      cb(null, `${uuidv4()}_${sanitize(file.originalname)}`)
    } else {
      cb(new Error('Wrong extension type'), false)
    }
  },
})
export const upload = Multer({
  storage: fileStorage,
  limits: { fileSize: 50 * 1024 * 1024 }, //20mb
})

router.post(
  '/imgUpload',
  [parseJwt],
  upload.array('files'),
  async (req: any, res) => {
    const files = req.files
    const filesUrl = files.map((item) => item.filename)
    const data = {
      data: filesUrl,
      success: true,
      message: 'Img Uploaded Sucessfully',
    }
    res.json(data)
  },
)

export default router
