//call express module
const express = require('express')
//call mongoose db configuration file
require('./db/mongoose')
//call book model where I set up fields
const bookRouter = require('./routers/book')

//set up express connection port
const app = express()
const port = process.env.PORT || 3000

//send json objects and get back
app.use(express.json())
app.use(bookRouter)

//port listening
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})