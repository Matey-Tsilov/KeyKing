import * as api from '../api/api.js'


const getAllTexts = async () => {
    const all = await api.get('/data/catalog')
    return all
}

const getById = async (id) => {
    const byId = await api.get('/data/catalog/' + id)
    return byId
}

const createText = async (textData) => {
    const createdText = await api.post('/data/catalog', textData)
    return createdText
}

const updateText = async (id, textData) => {
    const updatedText = await api.put('/data/catalog/' + id, textData)
    return updatedText
}

const deleteText = async (id) => {
    const updatedText = await api.del('/data/catalog/' + id)
    return updatedText
}



export {
    getAllTexts,
    createText,
    getById,
    updateText,
    deleteText
}