const express = require('express')
const router = express.Router()
const Model = require('../schema')

router.get('/testing', async (req,res) => {

    try {
        const data = await Model.find({name:'test'})

        res.send(data)

    } catch(err) {
        res.send({
            error: err.message
        })
    }
})

router.get('/club-list', (req,res) => {

    res.send(['club1','club2'])
})

module.exports = router