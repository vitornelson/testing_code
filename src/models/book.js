const mongoose = require('mongoose')
//const validator = require('validator')

// mongoose model to be able to specify fields , I didn't set up any checks yet
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