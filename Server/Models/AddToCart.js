const mongoose = require('mongoose'); 


const Schema = mongoose.Schema;

const AddToCartSchema= new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:"user",
        unquie:false,
    },
    productId:{
        type:String,
        
    },
    quantity:{
        type:Number,
        default:1,
    },
    amount:{
        type:Number,
        default:0,
        
    },
    mainproduct:{
        type:Array,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
       
    },

   
})
module.exports = mongoose.model("AddToCart",AddToCartSchema);