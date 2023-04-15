const userModel = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.adduser = async(req,res)=>{
    try {
        const {name,phone,email,password,role} = req.body
        if(!name || !phone || !email || !password || !role) return res.status(404).json({message:'empty info !!!'})
        if (!password) return res.status.send('password empty')
        await bcrypt.hash(password,10).then((hashpassword)=>{
            const newUser =  new userModel({
                name,phone,email,password:hashpassword,role
            })
            newUser.save().then((user)=>res.status(201).json({user})).catch((e)=>res.status(500).send(e))
        })
    } catch (error) {
        res.status(500).json({error:'internal server error'})
    }
}


exports.login = async(req,res)=>{
    try {
        const {password} = req.body
        const user = req.user
        const match = await bcrypt.compare(password,user.password)
        if(!match) return (res.status(401).json({message:'password incorrect'}))
        const payload = {_id:user._id}
        const token = jwt.sign(payload,process.env.secret,{expiresIn: '24h' })
        res.status(200).json({message:'login success',token})
    } catch (error) {
        res.status(500).json({error:'internal server error'})
    }
}


exports.get_All_delivery = async(req,res)=>{
    try {
        const delivery = await userModel.find({role:'delivery'})
        res.status(200).json({delivery})
    } catch (error) {
        res.status(500).json({error:'internal server error'})
    }
}

exports.myData = async(req,res)=>{
    try {
        const {_id,name,phone,email,role} = req.user
        const user = {_id,name,phone,email,role}
        res.status(200).json({user})
    } catch (error) {
        res.status(500).json({error:'internal server error'})
    }
}