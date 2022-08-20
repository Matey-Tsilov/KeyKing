import * as api from '../api/api.js'


const getAllTexts = async () => {
    const all = await api.get('/data/catalog')
    return all
}

const createText = async (textData) => {
    const createdText = await api.post('/data/catalog', textData)
    return createdText
}



export {
    getAllTexts,
    createText
}