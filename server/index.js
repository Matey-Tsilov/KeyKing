const express = require('express')
const app = express()
const cors = require('./src/middlewares/cors')
const auth = require('./src/middlewares/auth')
const router = require('./src/routes')

const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/furniture'
mongoose.connect(url)
.then(() => console.log('DB connected'))

//за да парсва querytata
app.use(express.urlencoded({extended: true}))
//за да идват данните от формите като JSON в req.body!
app.use(express.json())
app.use(cors())
app.use(auth())
app.use(router)//router


app.listen(3030, () => console.log('App is listening on port: 3030'))