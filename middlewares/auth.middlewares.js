const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

exports.checkAuth = async (req,res,next)=>{
    try {
        const token = req.headers.authorization.split(" ")[1]
        if(!token) return res.status(401).json({message:'Missing JWT token.'});
        await jwt.verify(token,process.env.secret,(err,decoded)=>{
            if(err){
                if(err.name === ('TokenExpiredError')) return res.status(401).json({message:"Token has expired!"})
                else return res.status(401).json({message:"Invalid token!"})
            }
            else{
                req.decoded = decoded
                next()
            }
        })
    } catch (error) {
        res.status(401).json({message:"Authorization Failed!"})

    }
}


exports.getUser = async(req,res,next)=>{
    try {
        const {_id} = req.decoded
        const user = await userModel.findById(_id)
        req.user = user
        next()
    } catch (error) {
        res.status(500).json({error:'internal server error'})
    }
}