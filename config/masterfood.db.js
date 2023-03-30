const mongoose = require('mongoose')
exports.connect = async(URI) =>{
    try {
        mongoose.set('strictQuery',true)
        mongoose.connect(URI)
        console.log('DB CONNECTED')
    } catch (error) {
        console.log(error)
    }
}