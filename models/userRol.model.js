const mongoose = require('mongoose')

const userRolschema = new mongoose.Schema({
    RolID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Role'
    },
    UserID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }
}) 