
const express = require("express");
const productModel = require("../Models/productModel");




exports.ProductUpload=async(req,res)=>{

    const url = req.protocol + '://' + req.get('host');
  
    const {name,description,price} = req.body;
    try{
     
        const productdata = await productModel.create({name,description,price,img:url + "/Uploads/" + req.file.filename});
        console.log(productdata);
        res.status(200).json({
            data:productdata,
        })

    }
    catch(err){
        console.log(err);
    }
}

// product show all 

exports.ProductAll =async (req,res)=>{
    try{
        const product =await productModel.find({});
        res.status(200).send(product);
    }
    catch(err){
        res.status(400).json({
            message:err,
        })
    }
    
}


