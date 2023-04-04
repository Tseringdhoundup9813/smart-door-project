const mongoose = require('mongoose'); 


const Schema = mongoose.Schema;

const BuyNowProductSchema= new Schema({
    userId:{
        type:String,
   
    },
    productId:{
        type:String, 
    },
   
})
module.exports = mongoose.model("BuyNowProduct",BuyNowProductSchema);