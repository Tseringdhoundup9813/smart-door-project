

const mongoose = require('mongoose'); 


const Schema = mongoose.Schema;

const AddCategory= new Schema({
    category_name:{
        type:Array,
    },
    category_color:{
        tpye:Array,
    },
    category_size:{
        type:Array,
    }

})
module.exports = mongoose.model("AddCategory",AddCategory);