const { Category } = require("../models/category.model")

exports.add_Category = async (req,res)=>{
    try {
        const {name,description} = req.body
        if( !name  || !description ) return res.status(404).json({message:'items empty'})
        const newcategory = new Category({
            name,description
        })
        await newcategory.save().then((p)=>res.status(201).json({message:'Category added'})).catch((err)=>res.status(400).json({message:'Bad Request'}))
    } catch (error) {
        res.status(500).json({error:'internal server error'})
    }
}

exports.get_all_Category = async(req,res)=>{
    try {
        const Categorys = await Category.find()
        res.status(200).json({Category:Categorys})
    } catch (error) {
        res.status(500).json({error:'internal server error'})
    }
}


exports.delete_category = async(req,res)=>{
    try {
        const id = req.params.id
        const deleteCategory = await Category.findByIdAndDelete(id)
        if(deleteCategory.deletedCount === 0) return(res.status(404).json({message:'Category not found'}))
        res.status(200).json({message:'Category deleted successfully'})
    } catch (error) {
        res.status(500).json({error:'internal server error'})
    }
}
