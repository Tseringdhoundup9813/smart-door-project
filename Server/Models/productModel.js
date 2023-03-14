
const mongoose =require("mongoose");

const ProductScheme =new  mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,


    },
    price:{
        type:Number,
        required:true,


    },
  
    img:{
       
        type:String,
        required:true,
    }

})


module.exports = new mongoose.model("Product",ProductScheme);