const router = require('express').Router()
const furnitureController = require('./controllers/furnitureController')
const userController = require('./controllers/userController')

router.use('/data', furnitureController)
router.use('/users', userController)

module.exports = router