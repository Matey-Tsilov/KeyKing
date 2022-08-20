const {model, Schema, Types: {ObjectId}} = require('mongoose')

const textSchema = new Schema({
    title: {type: String},
    time: {type: Number},
    language: {type: String},
    content: {type: String},
    imageUrl: {type: String},
    loot: {
    type: Number,
    min: [0.01, 'Price must be a positive number'],
  },
  _ownerId: {type: ObjectId, ref: "User"}
  })

const Text = model('Text', textSchema)

module.exports = Text