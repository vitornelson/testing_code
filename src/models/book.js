const mongoose = require('mongoose')
//const validator = require('validator')

const Book = mongoose.model('Book', {
    name: {
        type: String
    },
    authors: {
        type: String
    },
    publisher: {
        type: String
    },
    publication: {
        type: Number
    },
    summary: {
        type: String
    }
})

module.exports = Book