const url = 'http://localhost:3030/users'

const getAllUsers = async () => {
      try {
        const res = await fetch(url)
        const users = await res.json()

        return users

      } catch (error) {
        console.error(error)
      }
      
}

const register = async ({email, password}) => {
try {
    const res = await fetch(url, {method: 'POST', headers:{}, body: {email, password}})
    //email, _id, accessToken
    const userInfo = await res.json()

    return userInfo

} catch (error) {
    console.error(error)
}
}

const login = async ({email, password}) => {
    try {
        const res = await fetch(url, {method: 'POST', headers:{}, body: {email, password}})
        //email, _id, accessToken
        const userInfo = await res.json()

        return userInfo
    
    } catch (error) {
        console.error(error)
    }
}

const logout = async () => {

}
export {
    getAllUsers,
    register,
    login,
    logout
}