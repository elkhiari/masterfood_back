const userRolModel = require("../models/user.model")

exports.check_IF_blocked = async(req,res)=>{
    try {
        const user = req.user
        if(user.role == 'blocked') return (res.status(404).json({message:'Soory, your account has been suspended. please contact your administrator'}))
        next()
    } catch (error) {
        res.status(500).json({error:'internal server error'})
    }
}

exports.check_IF_admin = async(req,res,next)=>{
    try {
        const user = req.user
        if(user.role != 'admin') return (res.status(404).json({message:'Soory, your not authorized to use this service.'}))
        next()
    } catch (error) {
        res.status(500).json({error:'internal server error'})
    }
}


exports.check_IF_delivery = async(req,res,next)=>{
    try {
        const user = req.user
        if(user.role != 'delivery') return(res.status(404).json({message:'Soory, your not authorized to use this service.'}))
        next()
    } catch (error) {
        res.status(500).json({error:'internal server error'})
    }
}


exports.check_IF_supervisor = async(req,res,next)=>{
    try {
        const user = req.user
        if(user.role != 'supervisor') return(res.status(404).json({message:'Soory, your not authorized to use this service.'}))
        next()
    } catch (error) {
        res.status(500).json({error:'internal server error'})
    }
}



exports.check_IF_supervisor_admin = async(req,res,next)=>{
    try {
        const user = req.user
        if(user.role == 'supervisor' || user.role == 'admin') next()
        else return (res.status(404).json({message:'Soory, your not authorized to use this service.'}))
    } catch (error) {
        res.status(500).json({error:'internal server error'})
    }
}
