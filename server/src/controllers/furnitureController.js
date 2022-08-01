const { isAuth, isOwner } = require('../middlewares/guards');
const preload = require('../middlewares/preload');
const api = require('../services/furnitureService');
const errorMapper = require('../util/errorMapper');

const router = require('express').Router()

router.get('/catalog', async (req, res) => {
try {
    res.json(await api.getAll(req.query.where))
} catch (err) {
    res.status(400).json({message: 'Bad request!'})
}})

router.post('/catalog', isAuth(), async (req, res) => {

    const item = {
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        description: req.body.description,
        price: req.body.price,
        img: req.body.img,
        material: req.body.material,
        _ownerId: req.user._id
      }

      try {
        const result = await api.createItem(item)
        res.json(result)
    } catch (error) {
        const message = errorMapper(error)
        res.status(400).json({message})
      }
})

router.get('/catalog/:id', preload(api), (req, res) => {
        res.json(res.locals.item)
})

router.put('/catalog/:id', preload(api), isOwner(), async (req, res) => {
    const changedItem = {
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        description: req.body.description,
        price: req.body.price,
        img: req.body.img,
        material: req.body.material
    }

    try {
        const result = await api.updateItem(res.locals.item._id, changedItem)
        res.json(result)
    } catch (error) { 
        console.error(error)
        res.status(400).json({message: `request Error!`})
        
    }
})

//като подаваме така api-то => dependecy injection!, защото не го require-ваме в preload модула!
router.delete('/catalog/:id', preload(api), isOwner(), async (req, res) => {
    const result = await api.deleteItem(req.params.id)
    res.json(result)
})

module.exports = router