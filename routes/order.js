const express = require('express')
const app = express()
const router = express.Router()

app.use(express.json())

router.get('/', (req, res) => {
    res.send('order get all')
})

router.post('/', (req, res) => {
    res.send(req.body)
})


module.exports = router