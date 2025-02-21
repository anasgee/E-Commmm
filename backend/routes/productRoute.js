const express = require("express");
const { getAllProducts, createProduct } = require("../controllers/productControllers");
const router  = express.Router();


router.get("/product",getAllProducts);
router.post("/product/new",createProduct);


module.exports=router;