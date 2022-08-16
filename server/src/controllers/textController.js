const { isAuth, isOwner } = require('../middlewares/guards');
const preload = require('../middlewares/preload');
const api = require('../services/textService');
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
        title: req.body.title,
        language: req.body.language,
        time: req.body.time,
        content: req.body.content,
        loot: req.body.loot,
        _ownerId: req.user._id
      }

      try {
        const result = await api.createText(item)
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
        title: req.body.title,
        time: req.body.time,
        language: req.body.language,
        content: req.body.content,
        loot: req.body.loot,
    }

    try {
        const result = await api.updateText(res.locals.item._id, changedItem)
        res.json(result)
    } catch (error) { 
        console.error(error)
        res.status(400).json({message: `request Error!`})
        
    }
})

//като подаваме така api-то => dependecy injection!, защото не го require-ваме в preload модула!
router.delete('/catalog/:id', preload(api), isOwner(), async (req, res) => {
    const result = await api.deleteText(req.params.id)
    res.json(result)
})

module.exports = router