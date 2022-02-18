const express = require('express')
const cors = require('cors')
const app = express()
const port = 8080
const router = require('./routes/route')

const mongoose = require('mongoose')

mongoose.connect(
    'mongodb+srv://simon:password100@cluster0.cy8ah.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
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

app.get('/', (req,res) => {
    res.send('Simon was here')
})

app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
})