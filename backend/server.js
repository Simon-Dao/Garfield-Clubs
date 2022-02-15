const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
const port = 8080


mongoose.connect()

//this allows the server to accept any request regardless of the origin
//this is a potential security flaw so please dont put this in production
app.use(cors())

app.get('/', (req,res) => {
    res.send('Simon was here')
})

app.get('/club-list', (req,res) => {

    //get data from the database
    /*const data = [
        {
            name: ,
            advisor: ,
            day: , 
            room: , 
            email: , 
            phone:
        },
        {},
        {}
    ]*/

    res.send(['club1','club2'])
})

app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
})