import { user } from '@/Database/models/user'
import { Request } from 'express'
export interface IGetUserAuthInfoRequest extends Request {
  user: user // or any other type
}
export type signupInput = Omit<user, '_id'>

export type loginInput = Omit<
  user,
  '_id' | 'firstName' | 'lastName' | 'phone' | 'role'
>
