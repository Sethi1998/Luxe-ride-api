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
    res.send('Please Provide Authorization token')
  }
  const token: string = authorizationHeader.replace('Bearer ', '')
  try {
    const jwtData = checkToken(token)
    if (jwtData && jwtData.user) {
      req.user = jwtData.user
      next()
    } else {
      console.log('not authorised')
      // authLogger.debug('Token was not authorized', { token });
    }
  } catch (err) {
    console.log('err', err)
  }
}

export const parseJwtAdmin = (
  req: Request | any,
  res,
  next: () => void,
): void => {
  const authorizationHeader = req.headers.authorization
  if (!authorizationHeader) {
    res.send('Please Provide Authorization token')
  }
  const token: string = authorizationHeader.replace('Bearer ', '')
  try {
    const jwtData = checkToken(token)
    if (jwtData && jwtData.user.role === 'admin') {
      req.user = jwtData.user
      next()
    } else {
      console.log('not authorised')
      res.send(`You dont't have rights`)
      // authLogger.debug('Token was not authorized', { token });
    }
  } catch (err) {
    console.log('err', err)
  }
}
