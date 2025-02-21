const Product = require("../models/productModel")



// This is Admin Route
const createProduct = async(req,res,next)=>{

 try {
    const product = await Product.create(req.body);

    res.status(200).json({success:true,product});
 } catch (error) {
    res.status(500).json({success:false,error})
 }
}



// Get All products

const getAllProducts = async(req,res,next)=>
{

    const products = await Product.find();
    res.status(200).json(products)
}



module.exports ={getAllProducts,createProduct}