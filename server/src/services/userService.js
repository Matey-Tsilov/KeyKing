const User = require("../models/User")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const JWT_SECRET = 'ydreyhyji7tieopdseb2ooe;km2p;3i480dw2`1'
const blackList = new Set()

async function register(email, password) {
    //check if email is taken
    const existing = await User.findOne({email})
    if (existing) {
        throw new Error('Email is already taken!')
    }

    //hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    //store user
    const user = new User({email, password: hashedPassword})
    await user.save()

    //create session token
    //return result
    return createSessionInClient(user)
}
async function login(email, password) {
    //check if user exists
    const existing = await User.findOne({email})
    if (!existing) {
        throw new Error('Incorrect email or password!')
    }

    //verify password
    const match = await bcrypt.compare(password, existing.password)

    if (!match) {
        throw new Error('Incorrect email or password!')
    }

    //create session token
    //return result
    return createSessionInClient(existing)
}
function logout(token) {
    blackList.add(token)
}

//щом и при двете се повтаря тази стъпка по-добре ще е да си я изнесем на функция!
function createSessionInClient(userObj) {
    //create and sign 
    const payload = {
        email: userObj.email,
        _id: userObj._id
    }

    const accessToken = jwt.sign(payload, JWT_SECRET)

    //return session depending on cleint requirements. Here: 
    return {
        email: userObj.email,
        _id: userObj._id,
        accessToken
    }
}

function validateToken(token) {
    if (blackList.has(token)) {
        console.log(blackList);
        throw new Error('Token is blacklisted!')
    }
    return jwt.verify(token, JWT_SECRET)
}

module.exports = {
    register,
    login,
    logout,
    validateToken
}