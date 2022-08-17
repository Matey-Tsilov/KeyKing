import * as api from '../api/api.js'
import { clearUserData } from '../api/util.js'
const url = 'http://localhost:3030/users'


const getAllUsers = async () => {
try {
    const users = await api.get(url)
    return users

} catch (error) {
        console.error(error)
}
      
}

export {
    getAllUsers
}