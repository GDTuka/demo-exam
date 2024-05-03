import { Router} from 'express'
import  User  from '../../models/user.js'

const router = Router()

router.post('/', async (req, res) => {

    const user = new User(req.body.username, req.body.surname,req.body.thirdName, req.body.login, req.body.phone, req.body.password)

    if(user.login.length  < 3 || user.password.length < 8){
        console.log('status 1')
        res.status(400).send({message: 'Wrong data'})
        return;
    }

    try{
        await user.save()    
    } catch (e){
        
        if(e.code == 'ER_DUP_ENTRY'){
            res.status(400).send('User already exists')
        } else {
            res.sendStatus(500)
        }
        return;
    }

    res.sendStatus(200)


})

export default router;