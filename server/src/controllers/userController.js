const api = require('../services/userService')
const errorMapper = require('../util/errorMapper')
const router = require('express').Router()

router.post('/register', async (req, res) => {
const {email, password} = req.body

try {
    const result = await api.register(email, password)
    res.status(201).json(result)
} catch (error) {
    console.error(error);
    const message = errorMapper(error)
    res.status(400).json({message})
}})

router.post('/login', async (req, res) => {
    const {email, password} = req.body
    
    try {
        const result = await api.login(email, password)
        res.json(result)
    } catch (error) {
        console.error(error);
        const message = errorMapper(error)
        res.status(400).json({message})
}})

router.get('/logout', (req, res) => {
    api.logout(req.user.token)
    res.status(204).end()
})

router.get('/', async (req, res) => {
    const users = await api.getAllUsers()
    res.json(users)
})

module.exports = router
