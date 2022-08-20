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



export {
    getAllTexts,
    createText,
    getById
}