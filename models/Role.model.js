const mongoose = require('mongoose')

const RoleSchema = new mongoose.Schema({
    role:{
        type:String,
        require:[true,'Role is required'],
        trim:true
    },
    roldes:{
        type:String
    }
})

module.exports = mongoose.model('Role',RoleSchema);