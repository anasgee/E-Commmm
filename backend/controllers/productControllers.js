const catchAsyncError = require("../middleware/catchAsyncError");
const Product = require("../models/productModel");
const ApiFeatures = require("../utils/apifeatures");
const ErrorHandler = require("../utils/errorhandler");



// This is Admin Route
const createProduct = catchAsyncError(async(req,res,next)=>{

 
      const product = await Product.create(req.body);
      res.status(200).json({success:true,product});

  });

const updateProduct = catchAsyncError( async(req,res,next)=>{
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
   })})

// Delete a product


const deleteProduct = catchAsyncError(async(req,res,next)=>{

   const product = await Product.findById(req.params.id);
if(!product){
return res.status(404).json({success:false,message:"Product Not Found"});
}

await product.deleteOne();
res.status(200).json({success:true,message:"Product Removed Successfully"})


})



// Get All products

const getAllProducts = catchAsyncError(async(req,res,next)=>
   {
      const productCount = await Product.countDocuments();
      const pageLimit = 5;
      const apiFeatures = new ApiFeatures(Product.find(),req.query).search().filter().pagination(pageLimit);
      const product = await apiFeatures.query;
       res.status(200).json({success:true,
         product,productCount
       })
   })



// Get Signle Product or product details

const getProductDetails = catchAsyncError(async(req,res,next)=>{

   const product = await Product.findById(req.params.id);
   if(!product){
         return next(new ErrorHandler("Product Not Found",404))
   }
   return res.status(200).json({
      success:true,
      product
   })


})






module.exports ={getAllProducts,createProduct,updateProduct,deleteProduct,getProductDetails}