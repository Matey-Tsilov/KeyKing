import { getUserData, setUserData, clearUserData } from "./util.js"

const host = "http://localhost:3030"

async function request(url, options) {
    
    try {
        const res = await fetch(host + url, options)

        if (!res.ok) {
        const problem = await res.json()
        throw new Error(problem.message)
        }

        // if (res.status == 204) {
        //     return res
        // }
        // return res.json()

        try {
            return await res.json()
        } catch (error) {
            return res
        }


    } catch (err) {
        //alert(err.message)
        throw err
    }
    
}

function createOptions(method = 'get', data) {
    const options = {
        method,
        headers: {

        }
    }

    if (data !== undefined) {
        options.headers['Content-Type'] = 'application/json'
        options.body = JSON.stringify(data)
    }
    const userData = getUserData()
    if (userData) {
        options.headers['X-Authorization'] = userData.token
    }
    
    return options
}

async function get(url) {
    return request(url, createOptions())
}
async function post(url, data) {
    return request(url, createOptions('post', data))
}
async function put(url, data) {
    return request(url, createOptions('put', data))
}
async function del(url) {
    return request(url, createOptions('delete'))
}

async function login(email, password) {

    const serverRes = await post('/users/login', {email, password})

    return serverRes
    
    // const userData = {
    //     email: serverRes.email, 
    //     password: serverRes.password,
    //     token: serverRes.accessToken,
    //     id: serverRes._id,
    // }
    

    // setUserData(userData)

}

async function register(email, password) {

    const serverRes = await post('/users/register', {email, password})
    
    return serverRes

    // const userData = {
    //     email: serverRes.email, 
    //     password: serverRes.password,
    //     token: serverRes.accessToken,
    //     id: serverRes._id
    // }

    // setUserData(userData)

}

async function logout() {
    return await get('/users/logout')
    // clearUserData()

}

export {
    get,
    post,
    put,
    del,
    login, 
    register, 
    logout
}