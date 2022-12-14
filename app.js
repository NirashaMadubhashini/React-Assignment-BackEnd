const express = require('express')
const customer = require('./routes/customer')
const item = require('./routes/item')
const order = require('./routes/order')
const app = express()
const port = 4000

app.use(express.json())
app.use('/customer', customer)
app.use('/item',  item)
app.use('/order',  order)

app.get('/', (req, res) => {
    console.log('get request comming!');
    res.send('get req came for / route')
})


app.listen(port, () => {
    console.log(`app starting on ${port}`);
})