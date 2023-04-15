const express = require('express')
const app = express()
const config = require('../config/masterfood.db')

const {UserRoute} = require('../routes/user.routes')
const { category_Route } = require('../routes/category.routes')
const { product_Route } = require('../routes/product.routes')
require('dotenv').config()

app.use(express.json())
app.use('/',UserRoute)
app.use('/',category_Route)
app.use('/',product_Route)
app.get("/",(req,res)=>{
    res.send("hello")
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
