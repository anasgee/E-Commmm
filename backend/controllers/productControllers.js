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

const updateProduct = async(req,res,next)=>{
   const productRef = await Product.findById(req.params.id);
   if(!productRef){
      return res.status(404).json({
         success:false,
         message:"Product Not Found"
      })
   }
   // // // // // // // //
   const updateProdct = await Product.findByIdAndUpdate(req.params.id, req.body,{
      new:true,
      runValidators:true,
      useFindAndModify:false
   });

   res.status(201).json({
      success:true,
      message:"Document updated successfully",
      updateProdct
   })}

// Delete a product


const deleteProduct = async(req,res,next)=>{

   try {
      const product = await Product.findById(req.params.id);
if(!product){
  return res.status(404).json({success:false,message:"Product Not Found"});
}

await product.deleteOne();
res.status(200).json({success:true,message:"Product Removed Successfully"})

   } catch (error) {
      res.status(500).json({success:false,message:`Error here and error is ${error}`})
   }

}



// Get All products

const getAllProducts = async(req,res,next)=>
{

    const products = await Product.find();
    res.status(200).json(products)
}








module.exports ={getAllProducts,createProduct,updateProduct,deleteProduct}