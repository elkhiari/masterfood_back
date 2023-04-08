// const rolModle = require('../models/Role.model')
// const userModel = require('../models/user.model')
// const userRol = require('../models/userRol.model')
// exports.AddRol = async(req,res)=>{
//     try {
//         const {role,roldes} = req.body
//         const newRol = new rolModle({role,roldes})
//         await newRol.save().then(()=>res.status(200).json({message:"ok"}))
//     } catch (error) {
//         res.status(500).send(error)
//     }
// }
// exports.getAllRol = async(req,res)=>{
//     try {
//         const Rols = await rolModle.find({})
//         res.status(200).send(Rols)
//     } catch (error) {
//         res.status(500).send(error)
//     }
// }

// exports.addUserRol = async(req,res)=>{
//     try {
//         const {RolID,UserID}  = req.body;
//         const NewUserRol = new userRol({RolID,UserID})
//         await NewUserRol.save().then(()=>res.status(200).json({message:'ok'})).catch((e)=>res.status(500).json({error:e}))
//     } catch (error) {
//         res.status(500).send(error)
//     }
// }