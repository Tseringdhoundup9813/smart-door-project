
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
    categories:{
            type:String,
            required:true,
            
    },
    colors:{
        type:String,
        required:true,
       
    },
    size:{
        type:String,
        required:true,
    },

  
    img:{
       
        type:Array,
        
    },
    quantity:{
        type:Number,
        default:1,
    },
  
   
    addToCart:{
        type:Boolean,
        
        
    },
    discount:{
        type:Number,
        default:0,
    }
   

},{timestamps:true})


module.exports = new mongoose.model("Product",ProductScheme);