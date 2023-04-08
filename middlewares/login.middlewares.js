const userModel = require("../models/user.model")

exports.checkemailexist = async(req,res,next)=>{
    try {
        const {email,password} = req.body
        if(!email) return(res.status(404).json({message:'email empty'}))
        if(!password) return(res.status(404).json({message:'password empty'}))
        const user = await userModel.findOne({email})
        if(!user) return(res.status(404).json({message:'user not found'}))
        else {
            req.user = user
            next()
        }
    } catch (error) {
        return(res.status(500).json({message:'internal server error'}))
    }
}



exports.checkemail = async(req,res,next)=>{
    try {
        const {email,role} = req.body
        const RolArray = ['admin','supervisor','delivery','blocked']
        if(!email) return(res.status(404).json({message:'email empty'}))
        const user = await userModel.findOne({email})
        if(user) return(res.status(404).json({message:'email exist'}))
        if(!RolArray.includes(role.toLowerCase())) return(res.status(404).json({message:'Role not exist'}))
        next()
    } catch (error) {
        return(res.status(500).json({message:'internal server error'}))
    }
}