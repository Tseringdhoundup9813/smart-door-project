
const express = require("express");
const productModel = require("../Models/productModel");




exports.ProductUpload=async(req,res)=>{

    const url = req.protocol + '://' + req.get('host');
  
    const {name,description,price,colors,categories,size} = req.body;
    try{
        
        const productdata = await productModel.create({name,categories,colors,size,description,price,img:url + "/Uploads/" + req.file.filename});
        res.status(200).json({
            data:productdata,
            message:"Succefully Upload Product"
        })

    }
    catch(err){
        console.log(err);
    }
}

// product show all 

exports.ProductAll =async (req,res)=>{
    try{
        // const product =await productModel.find({});
 
      
        const page = Number(req.query.page) ||1;
        const limit = Number(req.query.limit)||6;
    
        const skip = (page-1) * limit;
        const totalProduct =await productModel.find({});
        const product =await productModel.find().skip(skip).limit(limit);
        console.log(totalProduct.length);
     
        res.status(200).json({
            data:product,
            productLenght:totalProduct.length,
        })

   

    }
    catch(err){
        res.status(400).json({
            message:err,
        })
    }
    
}


