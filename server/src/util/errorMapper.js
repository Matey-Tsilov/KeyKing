module.exports = (err) => {
    if (err.name == 'ValidationError') {
        return Object
        .entries(err.errors)
        .map(([key, err]) => err.properties.message)
        .join('\n' + '&' + '\n')
    }else {
        return err.message
    }
}