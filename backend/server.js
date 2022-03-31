const express = require('express')
const cors = require('cors')
const app = express()
const port = 8080
const router = require('./routes/route')
const mongoose = require('mongoose')
require("dotenv").config();

//PLEASE READ THIS

//this code just initializes the server and sets up the config, it doesn't deal with the api endpoints

mongoose.connect(
    process.env.REACT_APP_MONGO_DB_URL
    , { useNewUrlParser: true,
        useUnifiedTopology: true,}
)

const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('connected to database'))

//this allows the server to accept any request regardless of the origin
//this is a potential security flaw so please dont put this in production
app.use(cors())  
app.use('/', router)

app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
})