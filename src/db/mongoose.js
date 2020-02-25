const mongoose = require('mongoose')

//connection database
mongoose.connect('mongodb://127.0.0.1:27017/dbapi', {
    useUnifiedTopology: true,
    //create index to search faster
    userCreateIndex: true,
    useFindAndModify: false
})