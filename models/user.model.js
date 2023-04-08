const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        lowercase:true
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true
    },
    password:{
        type:String,
        trim:true
    },
    role:{
        type:String,
        enum:['admin','supervisor','delivery','blocked'],
        lowercase:true
    }
})

module.exports =  mongoose.model('user', userSchema);