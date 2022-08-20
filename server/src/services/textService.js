const Text = require("../models/Text");

async function getAll(query) {
if (query) {
    const userId = query.split('=')[1].slice(1, -1)
    return Text.find({_ownerId: userId})
    
}else {
    const allUsers = await Text.find({})
    return allUsers

}
}
async function createText(data) {
    const cratedText = new Text({
        title: data.title,
        language: data.language,
        time: data.time,
        content: data.content,
        loot: data.loot,
        _ownerId: data._ownerId,
        imageUrl: data.imageUrl
      })

      await cratedText.save()

      return cratedText
}
async function getById(id) {
    return Text.findById(id)
}

async function updateText(id, upText) {

    const updatedText = await Text.findByIdAndUpdate(id, {
        title: upText.title,
        language: upText.language,
        time: upText.time,
        content: upText.content,
        imageUrl: upText.imageUrl,
        loot: upText.loot,
    })

    const result = updatedText
    return result
}
async function deleteText(id) {
    return await Text.findByIdAndDelete(id)
}

module.exports = {
    getAll,
    createText,
    getById,
    updateText,
    deleteText
}