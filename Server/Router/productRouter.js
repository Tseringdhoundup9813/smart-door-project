const express = require("express");
const fs = require("fs");
const Router = express.Router();
const MulterMiddleware = require("../multerMiddleware");




const productController = require("../Controllers/productController");





Router.post("/upload",MulterMiddleware.single("testImage"),productController.ProductUpload);
Router.get("/product",productController.ProductAll);



module.exports =Router;