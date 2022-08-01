const Item = require("../models/Item");

async function getAll(query) {
if (query) {
    const userId = query.split('=')[1].slice(1, -1)
    return Item.find({_ownerId: userId})
    
}else {
    return Item.find({})

}
}
async function createItem(data) {
    const item = new Item({
        make: data.make,
        model: data.model,
        year: data.year,
        description: data.description,
        price: data.price,
        img: data.img,
        material: data.material,
        _ownerId: data._ownerId
      })

      await item.save()

      return item
}
async function getById(id) {
    return Item.findById(id)
}
async function updateItem(id, upItem) {

    const updatedItem = await Item.findByIdAndUpdate(id, {
        make: upItem.make,
        model: upItem.model,
        year: upItem.year,
        description: upItem.description,
        price: upItem.price,
        img: upItem.img,
        material: upItem.material
    })

    return updatedItem
}
async function deleteItem(id) {
    return await Item.findByIdAndDelete(id)
}

module.exports = {
    getAll,
    createItem,
    getById,
    updateItem,
    deleteItem
}