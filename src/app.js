const express = require('express')
const app = express()
const config = require('../config/masterfood.db')
const cors = require('cors')
require('dotenv').config()

const {UserRoute} = require('../routes/user.routes')
const { category_Route } = require('../routes/category.routes')
const { product_Route } = require('../routes/product.routes')
const { order_Route } = require('../routes/order.routes')

app.use(cors())
app.use(express.json())
app.use('/',UserRoute)
app.use('/',category_Route)
app.use('/',product_Route)
app.use('/',order_Route)

app.get('/',(res,req)=>{
    res.send("OK")
})

const startingServer = async(PORT,URI)=>{
    try {
        await config.connect(URI)
        app.listen(PORT,console.log(`App working on port[${PORT}]...`))
    } catch (error) {
        console.log(error)
    }
}

startingServer(process.env.PORT,process.env.URI)