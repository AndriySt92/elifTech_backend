import { body } from 'express-validator'

export const registerValidation = [
  body('email', 'wrong email').isEmail(),
  body('fullName', 'min 3 symbols').isLength({ min: 3 }),
  body('fullName', 'max 100 symbols').isLength({ max: 100 }),
  body('birth_date', 'Invalid birthday date').isISO8601(),
  body('source', 'Invalid source value').isIn(['social media', 'friends', 'found myself']),
]
