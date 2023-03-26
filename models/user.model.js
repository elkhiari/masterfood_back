const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        trim:true
    }
})

module.exports =  mongoose.model('user', userSchema);