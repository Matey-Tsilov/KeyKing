import * as api from '../api/api.js'


const getAllTexts = async () => {
    const all = await api.get('/data/catalog')
    return all
}



export {
    getAllTexts
}