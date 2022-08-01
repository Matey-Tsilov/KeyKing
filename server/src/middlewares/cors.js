
module.exports = () => (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    // === всеки може да прави заявки към нашия RESTapi!
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, HEAD, OPTIONS')
    // === допустимите видове CRUD операции!
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-authorization')
    // === допустимите хедъри, който можем да приемаме и да изпращаме!

    
    next()
}