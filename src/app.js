const express = require('express')
const app = express()
const config = require('../config/masterfood.db')
require('dotenv').config()

const startingServer = async(PORT,URI)=>{
    try {
        await config.connect(URI)
        app.listen(PORT,console.log(`App working on port[${PORT}]...`))
    } catch (error) {
        console.log(error)
    }
}

startingServer(process.env.PORT,process.env.URI)