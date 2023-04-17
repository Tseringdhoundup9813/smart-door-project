const express = require("express");
const fs = require("fs");
const Router = express.Router();
const MulterMiddleware = require("../multerMiddleware");
const {protect} = require("../middleware/auth")




const productController = require("../Controllers/productController");





Router.post("/upload",MulterMiddleware.array("testImage"),productController.ProductUpload);
Router.get("/product",productController.ProductAll);
Router.delete("/delete",productController.deleteProduct);
Router.post("/addtocart",productController.AddToCart);
Router.get("/showCartlist/:id",productController.GetProductCart);
Router.delete("/deletecartlist/:product_id/:user_id",productController.deletecartlist);
Router.get("/productdetail/:id",productController.ProductDetail);
Router.get("/buynowproduct/:product_id/:user_id",productController.BuyNowProduct);
Router.get("/buynowproductshow/:user_id",productController.BuyNowProductShow);
Router.post("/addqt",productController.addQt);
Router.post("/minqt",productController.minQt);
Router.get("/quantity/:product_id/:user_id",productController.getQuantity);
Router.get("/totalcartlistcount/:user_id",productController.totalcartlistcount);
Router.get("/totalamount/:user_id",productController.totalamount);
Router.post("/orders/:user_id",productController.Order)
Router.post("/orderconfirm",productController.orderConfirm);
Router.get("/khaltipayload/:order_id",productController.khaltidata)


// khalti===========================================================
Router.get("/checkpidx/:pidx/:order_id",productController.CheckPidx);

// ==============
// order tracking
Router.get("/ordertracking/:user_id",productController.OrderTracking)

// admin router ============================================
Router.get("/customerorder/",productController.CustomerOrder);
Router.post("/addcategoryname/",productController.AddCategoryName)
Router.post("/addcategorycolor/",productController.AddCategoryName);
Router.get("/checkadmin/:user_id/",productController.CheckAdmin);
Router.get("/orderstatus/:order_id/:status",productController.OrderStatus);



// 






module.exports =Router;