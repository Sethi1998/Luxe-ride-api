import { user } from '@/Database/models/user'
import jwt from 'jsonwebtoken'

export const signToken = (user: user, signOptions = { expiresIn: '30d' }) => {
  const token = jwt.sign(
    {
      user: {
        _id: user._id,
        email: user.email,
        role: user.role,
      },
    },
    process.env.JWT_TOKEN_SECRET,
    signOptions,
  )
  return token
}

export const checkToken = (token: string): any => {
  return jwt.verify(token, process.env.JWT_TOKEN_SECRET)
}

export const parseJwt = (req: Request | any, res, next: () => void): void => {
  const authorizationHeader = req.headers.authorization
  if (!authorizationHeader) {
    res.json({
      success: false,
      message: 'Please Provide Authorization token',
    })
  }
  const token: string = authorizationHeader.replace('Bearer ', '')
  jwt.verify(token, process.env.JWT_TOKEN_SECRET, (err, user) => {
    if (err) {
      res.json({
        success: false,
        message: 'unauthorized',
      })
    } else {
      req.user = user
      next()
    }
  })
}

export const parseJwtAdmin = (
  req: Request | any,
  res,
  next: () => void,
): void => {
  const authorizationHeader = req.headers.authorization
  if (!authorizationHeader) {
    res.json({
      success: false,
      message: 'Please Provide Authorization token',
    })
  }
  const token: string = authorizationHeader.replace('Bearer ', '')
  jwt.verify(token, process.env.JWT_TOKEN_SECRET, (err, user: any) => {
    if (err) {
      res.json({
        success: false,
        message: 'unauthorized',
      })
    } else {
      if (user.user.role === 'admin') {
        req.user = user
        next()
      } else {
        res.json({
          success: false,
          message: `Don't have rights`,
        })
      }
    }
  })
}
