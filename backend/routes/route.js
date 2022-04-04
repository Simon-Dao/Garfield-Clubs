const express = require('express')
const { db } = require('../schema')
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

const sendData = async (query, res) => {
    try {
        const data = await Model.find(query)
        res.send(data)

    } catch(err) {
        sendError(err, res)
    }
}

router.get('/testing', (req,res) => {

    sendData({}, res)
})

router.get('/get-club/:name', async (req,res) => {

    const name = req.params.name

    try {
        const data = await Model.find({name: name})
        console.log(data)
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

router.get('/get-clubs/:prefix', async (req, res) => {
    
    let prefix = req.params.prefix
    let ignoreCase = '(?i)'

 
 
    s = "/^" + prefix + "/i"
    console.log(s)

    try {
<<<<<<< HEAD

        const data = await Model.find( { name: { $regex: prefix, $options : 'i'} } )
=======
        
        const data = await Model.find( { name: { $regex: prefix, $options : 'i'} } ).limit(9)
>>>>>>> 91b59f554f4d80449636fa916a8fb947416545aa
        
        res.send(data)
    } catch(err) {
        sendError(err,res)
    }
})

module.exports = router