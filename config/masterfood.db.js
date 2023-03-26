const mongoose = require('mongoose')

exports.connect = async(URI) =>{
    try {
        await mongoose.connect(URI)
        console.log('DB CONNECTED')
    } catch (error) {
        console.log(error)
    }
} 