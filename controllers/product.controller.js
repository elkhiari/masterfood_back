const  {Product}  = require("../models/product.model")

exports.add_product = async (req,res)=>{
    try {
        const {picture,name,description,price,category} = req.body
        if(!picture || !name  || !description || !price || !category) return res.status(404).json({message:'items empty'})
        const newproduct = new Product({
            picture,name,description,price,categoryID
        })
        await newproduct.save().then((p)=>res.status(201).json({message:'product added'})).catch((err)=>res.status(400).json({message:'Bad Request'}))
    } catch (error) {
        res.status(500).json({error:'internal server error'})
    }
}


exports.get_product = async(req,res)=>{
    try {
        const id = req.params.id
        const Products = await Product.findById(id).populate('categoryID')
        if(!Products)  return(res.status(404).json({message:'Product not found'}))
        res.status(200).json({Product:Products})
    } catch (error) {
        res.status(500).json({error:'internal server error'})
    }
}


exports.get_product_By_Category = async(req,res)=>{
    try {
        const id = req.params.id
        console.log(id)
        const Products = await Product.find({categoryID:id}).populate('categoryID')
        if(!Products)  return(res.status(404).json({message:'Product not found'}))
        res.status(200).json({Product:Products})
    } catch (error) {
        res.status(500).json({error:'internal server error'})
    }
}




exports.get_All_product = async(req,res)=>{
    try {
        const Products = await Product.find().populate('categoryID')
        res.status(200).json({Product:Products})
    } catch (error) {
        res.status(500).json({error:'internal server error'})
    }
}

exports.delete_product = async(req,res)=>{
    try {
        const id = req.params.id
        const deleteProduct = await Product.findByIdAndDelete(id)
        if(deleteProduct.deletedCount === 0) return(res.status(404).json({message:'Product not found'}))
        res.status(200).json({message:'Product deleted successfully'})
    } catch (error) {
        res.status(500).json({error:'internal server error'})
    }
}

