/* eslint-disable no-control-regex */
import { user } from '@/Database/models/user'
import { Error } from '@/Types/error'
import Joi from 'joi'
import bcrypt from 'bcrypt'

const isEmail = (string: string): boolean => {
  const isEmailRegExp = new RegExp(
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
  )

  return isEmailRegExp.test(string)
}
const schema = Joi.string()
  .required()
  .min(8)
  .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/)
  .error((errors: any) => {
    errors.forEach((err: any) => {
      switch (err.type) {
        case 'string.regex.base':
          err.message =
            'At least one lower case (a-z), one upper case (A-Z) and number (0-9)'
          break
        case 'string.min':
          err.message = 'Password is too short - should be 8 chars minimum.'
      }
    })
    return errors
  })

export const checkPasswordPolicies = (password: string): boolean => {
  const { error } = schema.validate(password)

  return !error
}

// Check if valid email string.
export const isValidEmailError = (email: string): Error => {
  if (!isEmail(email)) {
    return {
      message: 'This is not a valid email',
      code: 'false',
    }
  }
}

// Check if valid password string.
export const isValidPasswordError = (password: string): Error => {
  if (!checkPasswordPolicies(password)) {
    return {
      message:
        'Minimum 8 characters with at least one uppercase, lowercase, numeric and special characters.',
      code: 'true',
    }
  }
}

// Check if user exists in the datababse.
export const userDoesNotExistsError = (user: user): Error | undefined => {
  if (!user) {
    return {
      message: "Sorry we can't find this email. Please check and try again.",
      code: 'false',
    }
  }
}
export const userAlreadyExistError = (user: user): Error | undefined => {
  if (user) {
    return {
      message: 'Email already exist.',
      code: 'false',
    }
  }
}

export const isPasswordValid = (
  password: string,
  dbPassword: string,
): Error => {
  const valid = bcrypt.compareSync(password, dbPassword)
  if (!valid) {
    return {
      message: 'Sorry the password you have entered is incorrect.',
      code: 'INVALID_PASSWORD',
    }
  }
}
