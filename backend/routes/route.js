const express = require('express')
const router = express.Router()

//the model is an object used 
const Model = require('../schema')

//IMPORTANT

//route.js deals with all of the request endpoints
//it acts like the middleman between the frontend and the database

const sendError = (err, res) => {
    res.send({
        error: err.message
    })
}

const sendData = async (queryString, res) => {
    try {
        const data = await Model.find({name:'test'})

        res.send(data)

    } catch(err) {
        sendError(err, res)
    }
}

router.get('/testing', (req,res) => {

    sendData('asdas', res)
})

router.get('/get-club/:name', async (req,res) => {

    const name = req.params.name

    try {
        const data = await Model.find({name: name})

        res.send(data)

    } catch(err) {
        sendError(err, res)
    }
})

router.get('/get-clubs', async (req, res) => {

    try {
        const data = await Model.find({})
        
        res.send(data)
    } catch(err) {
        sendError(err,res)
    }
})

module.exports = router