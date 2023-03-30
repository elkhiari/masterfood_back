const express = require('express')
const app = express()
const config = require('../config/masterfood.db')
const { RolRoute } = require('../routes/rol.routes')
require('dotenv').config()

app.use(express.json())
app.use('/',RolRoute)

const startingServer = async(PORT,URI)=>{
    try {
        await config.connect(URI)
        app.listen(PORT,console.log(`App working on port[${PORT}]...`))
    } catch (error) {
        console.log(error)
    }
}

startingServer(process.env.PORT,process.env.URI)