const express = require("express");
const { getAllProducts, createProduct, updateProduct, deleteProduct } = require("../controllers/productControllers");
const router  = express.Router();


router.get("/product",getAllProducts);
router.post("/product/new",createProduct);
router.put("/product/:id",updateProduct)
router.delete("/product/:id",deleteProduct)


module.exports=router;