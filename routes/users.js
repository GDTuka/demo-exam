import { Router} from 'express'
import  User  from '../models/user.js'
import UserService from '../src/user_service.js'

const router = Router()

router.get('/', async (req, res) => {

  const users = await UserService.getAllUsers()

  res.send(users)
})

export default router