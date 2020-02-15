const express = require('express')
const app = express();
const hostname = '127.0.0.1';
const port = 3000;
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
//const ObjectID = mongodb.ObjectID

// Connection URL
const dbConnection = 'mongodb://127.0.0.1:27017';

// Database Name
const dbName = 'dbapi';
//info about server and port
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

// func to insert book
app.post('/insertBook', function (req, res) {
    
   
    MongoClient.connect(dbConnection, { useUnifiedTopology: true }, (error, client) => {
        if (error) {
            console.log('Unable to connect to database')
        }
        
        const db = client.db(dbName)

        //insert
        db.collection('users').insertOne({
            name: 'VitorS',
            age: 31
        }, (error, result) => {
            if(error){
                return console.log('Unable to insert user')
            }

            console.log(result.ops)
            
        })
    })
   res.status(201).send('Book inserted')
    
});

// func to search book
app.post('/searchBook', function (req, res) {

    MongoClient.connect(dbConnection, { useUnifiedTopology: true }, (error, client) => {
        if (error) {
            console.log('Unable to connect to database')
        }

        const db = client.db(dbName)

        //insert
        db.collection('users').findOne({name: 'Vitor'}, (error, user) =>
        {
            if (error){
                return console.log('unable to find');
            }
            user.send(user)
        })
    })
    res.status(201)

});
