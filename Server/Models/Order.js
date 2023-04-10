const mongoose = require('mongoose'); 


const Schema = mongoose.Schema;

const OrderSchema= new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:"user",
        unquie:false,
    },
    productId:{
        type:Array,
        
    },
    totalquantity:{
        type:Number,
        default:1,
    },
    totalamount:{
        type:Number,
        default:0,
        
    },
    number:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        required:true,
    },
    confirm:{
       type:Boolean,
       default:false,
    },
    deliverystatus:{
        type:Number,
        default:0,
    },
    mainuser:{
        type:Array,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        
    },
    payment:{
        type:Boolean,
        default:false,
    },
    pidx:{
        type:String,
    }
   
})
module.exports = mongoose.model("Order",OrderSchema);