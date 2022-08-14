const router = require('express').Router()
const textController = require('./controllers/textController')
const userController = require('./controllers/userController')

router.use('/data', textController)
router.use('/users', userController)

module.exports = router