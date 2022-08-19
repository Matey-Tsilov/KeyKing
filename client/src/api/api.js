import { getUserData} from "./util.js"

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
    if (JSON.stringify(userData) !== '{}') {
        options.headers['X-Authorization'] = userData.accessToken
    }
    
    return options
}

async function get(url, userData) {
    return request(url, createOptions(userData))
}
async function post(url, data, userData) {
    return request(url, createOptions('post', data, userData))
}
async function put(url, data, userData) {
    return request(url, createOptions('put', data, userData))
}
async function del(url, userData) {
    return request(url, createOptions('delete', userData))
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
    await get('/users/logout')
    // clearUserData()
    return

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