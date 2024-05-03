import { Router} from 'express'
import UserService from '../../src/user_service.js'

const router = Router()

router.post('/', async (req, res) => {
    const {login, password} = req.body

    console.log(login, password)

    const user = await UserService.checkIfUserExist(login, password)

    if(user.length === 0) return res.status(400).json({message: 'Invalid login or password'})


    res.status(200).send(user)
})

export default router;