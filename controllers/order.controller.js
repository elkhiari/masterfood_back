const  {order}  = require("../models/order.model")

exports.add_order = async (req,res)=>{
    try {
        const {email,name,phone,totalPrice,quantity,product,adress} = req.body
        if(!name  || !phone || !totalPrice || !quantity || !product || !adress ) return res.status(404).json({message:'items empty'})
        const neworder = new order({
            email,name,phone,totalPrice,quantity,product,adress
        })
        await neworder.save().then((p)=>res.status(201).json({message:'order added'})).catch((err)=>res.status(400).json({message:'Bad Request'}))
    } catch (error) {
        res.status(500).json({error:'internal server error'})
    }
}


exports.get_order = async(req,res)=>{
    try {
        const id = req.params.id
        const orders = await order.findById(id).populate('category')
        if(!orders)  return(res.status(404).json({message:'order not found'}))
        res.status(200).json({order:orders})
    } catch (error) {
        res.status(500).json({error:'internal server error'})
    }
}

exports.get_All_order = async(req,res)=>{
    try {
        const orders = await order.find().populate('product')
        res.status(200).json({order:orders})
    } catch (error) {
        res.status(500).json({error:'internal server error'})
    }
}

exports.delete_order = async(req,res)=>{
    try {
        const id = req.params.id
        const deleteorder = await order.findByIdAndDelete(id)
        if(deleteorder.deletedCount === 0) return(res.status(404).json({message:'order not found'}))
        res.status(200).json({message:'order deleted successfully'})
    } catch (error) {
        res.status(500).json({error:'internal server error'})
    }
}

exports.set_order_shipped = async(req,res)=>{
    try {
        const {delivery_id,order_id} = req.body
        const order_shipped = await order.findById(order_id)
        if(order_shipped === null) return(res.status(404).json({message:'order not found'}))
        order_shipped.status = 'shipped'
        order_shipped.deliveryPerson = delivery_id
        await order_shipped.save()
        res.status(201).json({message:`order shipped successfully`})
    } catch (error) {
        res.status(500).json({error:'internal server error'})
    }
}

exports.get_order_processing = async(req,res)=>{
    try {
        const order_in_processing = await order.find({status:'processing'})
        if(order_in_processing === null) return(res.status(404).json({message:'empty order'}))
        res.status(200).json({order:order_in_processing})
    } catch (error) {
        res.status(500).json({error:'internal server error'})
    }
}

exports.get_my_order = async(req,res)=>{
    try {
        const deliveryPerson = req.user._id
        const orders = await order.find({deliveryPerson}).populate('product')
        res.status(200).json({order:orders})
    } catch (error) {
        res.status(500).json({error:'internal server error'})
    }
}

exports.set_order_delivered = async(req,res)=>{
    try {
        const deliveryPerson = req.user._id
        const {order_id} = req.body
        const order_delivered = await order.findById(order_id)
        if(order_delivered === null) return(res.status(404).json({message:'order not found'}))
        else if(order_delivered.deliveryPerson != deliveryPerson) return(res.status(401).json({'message':'you not the delivery'}))
        order_delivered.status = 'shipped'
        await order_shipped.save()
        res.status(201).json({message:`order shipped successfully`})
    } catch (error) {
        res.status(500).json({error:'internal server error'})
    }
}