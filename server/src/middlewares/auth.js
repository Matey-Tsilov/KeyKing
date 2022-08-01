const { validateToken } = require("../services/userService")

module.exports = () => (req, res, next) => {
    const token = req.headers["x-authorization"]

    if (token) {
        try {
            const payload = validateToken(token)

            req.user = {
                email: payload.email,
                _id: payload._id,
                token
            }
        } catch (error) {
            console.error(error)
            //Ако не използваме return тогава ще се изпълни next, a ние искаме да спрем заявката и да върнме отговор веднага
            return res.status(401).json({message: "Invalid access token. Please log in!"})
        }
    }
    
    next()
}