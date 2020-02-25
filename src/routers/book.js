const express = require('express')
const Book = require('../models/book')
const router = new express.Router()

//insert books
router.post('/books', async (req, res) => {
    const book = new Book(req.body)

    try {
        await book.save()
        res.status(201).send(book)
    } catch (e) {
        res.status(400).send(e)
    }
})

//search books
router.get('/books', async (req, res) => {
    try {
        const books = await Book.find({})
        res.send(books)
    } catch (e) {
        res.status(500).send()
    }
})
//search book by id in the Url
router.get('/books/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const book = await Book.findById(_id)

        if (!book) {
            return res.status(404).send()
        }

        res.send(book)
    } catch (e) {
        res.status(500).send()
    }
})
//update book by id
router.patch('/books/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'authors', 'publisher', 'publication', 'summary']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!book) {
            return res.status(404).send()
        }

        res.send(book)
    } catch (e) {
        res.status(400).send(e)
    }
})
// delete book by id
router.delete('/books/:id', async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id)

        if (!book) {
            return res.status(404).send()
        }

        res.send(book)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router