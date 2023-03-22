const express = require("express");
const fs = require("fs");
const Router = express.Router();
const MulterMiddleware = require("../multerMiddleware");
const {protect} = require("../middleware/auth")




const productController = require("../Controllers/productController");





Router.post("/upload",MulterMiddleware.array("testImage"),productController.ProductUpload);
Router.get("/product",productController.ProductAll);
Router.delete("/delete",productController.deleteProduct);

Router.get("/productdetail/:id",productController.ProductDetail);



module.exports =Router;