import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import registerRouter from './routes/auth/register.js'
import userRouter from './routes/users.js'
import authRouter from './routes/auth/login.js'

// Енв файл с конфигом
dotenv.config()

// Создаём инстансы
const app = express()

// Указываем порты, 
const PORT = process.env.PORT || 3000



// Разрешает общаться с сервером по средством JSON 
// Можно через xml и урл вот так app.use(express.urlencoded({ extended: true }))
app.use(express.json({extended: true}))

app.use(
    cors({
        origin: "*",
        credentials: true
    })
)

app.use('/register', registerRouter)
app.use('/users',userRouter)
app.use('/login',authRouter)

// Начать прослушивание сервера
app.listen(PORT, () => {console.log(`Listening on port ${PORT}`)})

