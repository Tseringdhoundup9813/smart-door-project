
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
        const limit = Number(req.query.limit)||9;
        
        const colors= req.query.colors==="all"?["rose wood","andrateak"]:req.query.colors;
        const categories = req.query.category==="all"?["3D DOORS","DOUBLE DOORS","CANADA DOORS","MEMBRANE DOORS"]:req.query.category;
        const sizes = req.query.size==="all"?["80-32","80-26","75-26","72-26","80-38","DD80-19","DD80-22"]:req.query.size;
        
        console.log(sizes);
        console.log(colors);
 
        const skip = (page-1) * limit;

        const totalProduct =await productModel.find({

            "$or":[{"categories":categories,"colors":colors,"size":sizes}],
            
          
        });
        
      

        const product =await productModel.find({
            
            "$or":[{"categories":categories,"colors":colors,"size":sizes}],
            
        }).skip(skip).limit(limit).sort({updatedAt:-1});

    
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


