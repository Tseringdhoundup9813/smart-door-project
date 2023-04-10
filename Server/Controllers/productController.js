
const express = require("express");
const productModel = require("../Models/productModel");
const User = require("../Models/User");
const BuyNowProduct = require("../Models/BuyNowProduct");
const AddToCart = require("../Models/AddToCart")
const AddCategory = require("../Models/Category")
const Order = require("../Models/Order")
const axios = require("axios");





exports.ProductUpload=async(req,res)=>{

    const url = req.protocol + '://' + req.get('host');
    
    const {name,description,price,discount,colors,categories,size} = req.body;
    let imgdata = req.files;
    path = [];

    // console.log(req.file);
    try{
        if(req.files){
           for(var a= 0;a < imgdata.length;a++){
            if(a < 2){
                path.push(url + "/Uploads/" + imgdata[a].filename.split(" ").join(""));

            }
           }
      
        }

       
        const productdata = await productModel.create({name,categories,colors,size,description,price,img:path,discount:discount});
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
        const limit = Number(req.query.limit)||15;
        
        const colors= req.query.colors==="all"?["rose wood","andrateak"]:req.query.colors;
        const categories = req.query.category==="all"?["3D DOORS","DOUBLE DOORS","CANADA DOORS","MEMBRANE DOORS"]:req.query.category;
        const sizes = req.query.size==="all"?["80-32","80-26","75-26","72-26","80-38","DD80-19","DD80-22"]:req.query.size;
      
 
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



// delete product =========

exports.deleteProduct =async (req,res)=>{
    try{
        const deleteproduct = await productModel.findByIdAndDelete(req.query.id);
        res.status(202).json({
            message:"sucessfully deleted"
        })
        

    }catch(err){
        res.status(404).json({
            message:err,
        })
    }
}

// product detail

exports.ProductDetail = async(req,res)=>{
    try{
        const id = req.params.id;
        const productDetail = await productModel.findById(id);
        res.status(200).json({
            data:productDetail
        })

    }catch(err){

    }
}


// add to cart ===================
exports.AddToCart = async(req,res)=>{
    const {product_id,userId} = req.body;
   
   
    try{
        const cartlistExist = await AddToCart.find({userId:userId ,productId:product_id});
        
        if(cartlistExist.length <  1){
           
            const addtocart = await AddToCart({userId:userId ,productId:product_id}).save();
            const product = await productModel.find({_id:product_id});
            const cartlist = await AddToCart.find({userId:userId,productId:product_id});
            
            if(product[0].discount> 0){
    
                let discount = product[0].price*product[0].discount/100;
                discount = discount * cartlist[0].quantity;
                const addamount =await  AddToCart.findOneAndUpdate({userId:userId,productId:product_id},{amount:discount})
                const addMainProduct =await  AddToCart.findOneAndUpdate({userId:userId,productId:product_id},{mainproduct:product})
            }
            else{
                let discount = product[0].price;
                discount = discount * cartlist[0].quantity;
                const addamount = await AddToCart.findOneAndUpdate({userId:userId,productId:product_id},{amount:discount})
                const addMainProduct =await  AddToCart.findOneAndUpdate({userId:userId,productId:product_id},{mainproduct:product})

             }
            res.status(200).json({data:addtocart,success:true,cartexist:false})
           
        }else{
        
            const addtocart = await AddToCart.findOneAndUpdate({userId:userId,productId:product_id},{$inc:{quantity:1}})
            const product = await productModel.find({_id:product_id});
            const cartlist = await AddToCart.find({userId:userId,productId:product_id});

           
            if(product[0].discount> 0){
                let discount = product[0].price*product[0].discount/100;
                discount = discount * cartlist[0].quantity;
                const addamount = await AddToCart.findOneAndUpdate({userId:userId,productId:product_id},{amount:discount})
                const addMainProduct =await  AddToCart.findOneAndUpdate({userId:userId,productId:product_id},{mainproduct:product})

              
            }
            else{
                let discount = product[0].price;
                discount = discount * cartlist[0].quantity;
                const addamount =await  AddToCart.findOneAndUpdate({userId:userId,productId:product_id},{amount:discount})
                const addMainProduct =await  AddToCart.findOneAndUpdate({userId:userId,productId:product_id},{mainproduct:product})

                 
            }
            res.status(200).json({data:addtocart,success:true,cartexist:true})


        }
       
    }catch(err){
        console.log(err);
    }

}

exports.GetProductCart = async(req,res)=>{
    try{
        const user_id = req.params.id;
       
     
        // if(user_id){
            const cartId = await AddToCart.find({userId:user_id});
            const cartarray = [];
            cartId.forEach((cart)=>{
               
                cartarray.push(cart.productId);
            })
            
            const cartlist = await productModel.find({_id:cartarray}, {},{sort: { '_id': 1 }} )
           
            const quantity = await AddToCart.find({userId:user_id},{},{sort: { 'productId': 1} });

          
            res.status(200).json({data:cartlist,quantity:quantity});
        // }
        

    }
    catch(err){
        console.log(err);
    }
}
// qunatiy get request 

exports.getQuantity = async(req,res)=>{
    const product_id = req.params.product_id;
    const user_id = req.params.user_id;

    const qt = await AddToCart.find({userId:user_id,productId:product_id});
    
    res.status(200).json({qt:qt[0].quantity})



}
exports.addQt = async(req,res)=>{
 
    const{product_id,user_id} = req.body;
    
  
    try{    
        const rateChange = await AddToCart.findOneAndUpdate({userId:user_id,productId:product_id},{$inc:{quantity:1}})
        const qt = await AddToCart.find({userId:user_id,productId:product_id});

        const discount = await productModel.find({_id:product_id})
        const price = await productModel.find({_id:product_id})
        const P_price = price[0].price;
        
        const P_discount = discount[0].discount;
       
   
        if(P_discount > 0){
            const after_discount_price = P_price*P_discount/100;
          
            let totalamount = after_discount_price * qt[0].quantity;
            totalamount =  totalamount.toFixed(0);
            const setTotalamount = await AddToCart.findOneAndUpdate({userId:user_id,productId:product_id},{amount:totalamount})
            const get_total_amount = await AddToCart.find({userId:user_id,productId:product_id});
            res.status(200).json({qt:qt[0].quantity,totalamount:get_total_amount[0].amount})
        }
        else{
       
            let totalamount = P_price * qt[0].quantity;
            totalamount =  totalamount.toFixed(0);
            const setTotalamount = await AddToCart.findOneAndUpdate({userId:user_id,productId:product_id},{amount:totalamount})
            const get_total_amount = await AddToCart.find({userId:user_id,productId:product_id});
            res.status(200).json({qt:qt[0].quantity,totalamount:get_total_amount[0].amount})
            
            
        }
       
       
        

    }catch(err){
        console.log(err);
    }

}

exports.minQt = async(req,res)=>{
    const{product_id,user_id} = req.body;
 
  
    try{    
        const rateChange = await AddToCart.findOneAndUpdate({userId:user_id,productId:product_id},{$inc:{quantity:-1}})
        const qt = await AddToCart.find({userId:user_id,productId:product_id});

       

        const discount = await productModel.find({_id:product_id})
        const price = await productModel.find({_id:product_id})
        const P_price = price[0].price;
        const P_discount = discount[0].discount;

        if(P_discount > 0){
            const after_discount_price = P_price*P_discount/100;
           
            let totalamount = after_discount_price * qt[0].quantity;
            totalamount =  totalamount.toFixed(0);
            const setTotalamount = await AddToCart.findOneAndUpdate({userId:user_id,productId:product_id},{amount:totalamount})
            const get_total_amount = await AddToCart.find({userId:user_id,productId:product_id});
            res.status(200).json({qt:qt[0].quantity,totalamount:get_total_amount[0].amount})
        }
        else{
       
            let totalamount = P_price * qt[0].quantity;
            totalamount =  totalamount.toFixed(0);
            const setTotalamount = await AddToCart.findOneAndUpdate({userId:user_id,productId:product_id},{amount:totalamount})
            const get_total_amount = await AddToCart.find({userId:user_id,productId:product_id});
            res.status(200).json({qt:qt[0].quantity,totalamount:get_total_amount[0].amount})
             
        }


    }catch(err){
        console.log(err);
    }
}

// ==================TOTAL AMOUNT=============================


exports.totalamount = async(req,res)=>{
      
        const totalamount = await AddToCart.find({userId:req.params.user_id})
        let sum = 0;
        if(totalamount.length>0){
            if(totalamount.length>0){
                for(var a= 0; a< totalamount.length;a++){
                
                    sum = sum+ Number(totalamount[a].amount);
                }
            }
            else{
                sum = totalamount[0].amount;
                
            }
        
            res.status(200).json({totalamount:sum});
        }
       
       
}

// ============END+===============================
exports.deletecartlist = async(req,res)=>{
    const product_id = req.params.product_id;
    const user_id = req.params.user_id;

    
    try{
        const deletecart = await AddToCart.findOneAndDelete({userId:user_id,productId:product_id});
        res.status(200).json({sucess:true})
    }catch(err){
        console.log(err);
        res.status(400).json({sucess:true})

    }
}
// add to cart=========================


exports.totalcartlistcount = async(req,res)=>{
 
    try{
        if(req.params.user_id!==undefined){
         
             const totalcartlist = await AddToCart.find({userId:req.params.user_id})
             res.status(200).json({totalcartlist:totalcartlist.length})
    
         
        }
    }catch(err){
        console.log(err);
    }
  

}
// buy now add product===================================
exports.BuyNowProduct= async(req,res)=>{
   
    try{
        const user_product_exits = await BuyNowProduct.find({userId:req.params.user_id});

         if(user_product_exits.length < 1){
        
            const Buynowprouduct = await  BuyNowProduct({
                userId:req.params.user_id,
                productId:req.params.product_id,
            }).save();
        }
        else if(user_product_exits){
            await BuyNowProduct.findOneAndUpdate({userId:req.params.user_id,productId:req.params.product_id})
        }
         
        
      
        
    
    }catch(err){
        console.log(err);
    }
   
   
   
}

exports.BuyNowProductShow = async(req,res)=>{
   try{
     const buynow = await BuyNowProduct.find({userId:req.params.user_id})
     const product = await productModel.findOne({_id:buynow[0].productId})
     res.status(200).json({data:product});

   }catch(err){
     console.log(err);
     
   }
  
}


// ===================END===============================================


// order-----------------------------order   order ----------------===============================

exports.Order=async(req,res)=>{
    const user_id = req.params.user_id;

    const{address,number} = req.body;
    try{
        const cartlist = await AddToCart.find({userId:user_id});
        const user = await User.find({_id:user_id});
    
        let totalquantity = 0;
        let totalamount = 0;
        cartlist.map((item)=>{
            
            totalquantity += item.quantity;
            totalamount +=item.amount;
        })
        const createorder = await Order.create({userId:user_id,productId:cartlist,location:address,number:number,totalamount:totalamount,totalquantity:totalquantity,mainuser:user})
     
        res.status(200).json({order_id:createorder._id,totalamount:totalamount})


    }catch(err){
        console.log(err);
    }
   

   
}
// end=========================================================

// order confirm and get total amount of order

exports.orderConfirm= async(req,res)=>{
    console.log(req.body);
    const{order_id} = req.body;
    
    try{

        const orderconfirm = await Order.findByIdAndUpdate({_id:order_id},{confirm:true})
        
        res.status(200).json({success:true})


    }catch(err){
        console.log(err);
    }
    
   
   

}

exports.khaltidata=async(req,res)=>{
  
    const order_id = req.params.order_id;
    console.log(order_id);

    const order = await Order.find({_id:order_id});
    const VAT = 300
    console.log(order);
  
        const customer_number = order[0].number;
        const customer_name = order[0].mainuser[0].username;
        const customer_email = order[0].mainuser[0].email;
        let totalamount = order[0].totalamount * 100;
        totalamount = Math.trunc(totalamount);
  
  


    const product_details=[];
    order[0].productId.map((product)=>{
        product_details.push( {
                 "identity": product._id,
                    "name": "Khalti logo",
                    "total_price": product.amount * 100,
                    "quantity": product.quantity,
             "unit_price": product.amount * 100,
                })
         })
        const payload = {
            "return_url": "http://localhost:3000/product/placeorder",
            "website_url": "https://example.com/",
            "amount": totalamount + VAT,
            "purchase_order_id": order_id,
            "purchase_order_name": "smart door/doors",
            "customer_info": {
                "name": customer_name,
                "email": customer_email,
                "phone": customer_number,
            },
            "amount_breakdown": [
                {
                    "label": "Mark Price",
                    "amount": totalamount,
                },
                {
                    "label": "VAT",
                    "amount": VAT,
                }
            ],
            product_details,
          }
          
        try{

        const response = await axios.post("https://a.khalti.com/api/v2/epayment/initiate/",payload,{
            headers:{
                'Authorization':`Key 6e223eea84c04cc5bd7ac70b92c9bfaf `
            }
        
        })   



        const pidx = response.data.pidx;
        const savepidx = await Order.findByIdAndUpdate({_id:order_id},{pidx:pidx});
        console.log(savepidx);

        res.status(200).json({khaltiurl:response.data.payment_url})
      
    }catch(err){
        console.log(err);
    }
        
}





exports.CustomerOrder=async(req,res)=>{
    console.log("working");
  
    const orderlist = await Order.find({},{},{sort: { '_id': 1 }})
    
    res.status(200).json({data:orderlist})
    
}


// order tracking======================

exports.OrderTracking=async(req,res)=>{
    console.log(req.params);
    try{
        const user_order = await Order.find({userId:req.params.user_id,confirm:true});
        res.status(200).json({data:user_order})

    }catch(err){
        console.log(err);
        res.status(500).json({message:"server error"})

    }
  

}

// add categories ===================================

exports.AddCategoryName=async(req,res)=>{
   
       const name = req.body.name;
       const categoryexist = await AddCategory.find();

       console.log(categoryexist[0]._id)
       try{
            if(categoryexist.length < 1){
                const category_name = await AddCategory.create({category_name:name})
            }
            else{
                const category_name = await AddCategory.findByIdAndUpdate({_id:categoryexist[0]._id},{$push:{category_name:name}})
            }
            res.status(200).json({success:true})
       }catch(err){
         console.log(err);
       }


}

exports.AddCategoryColor = async(req,res)=>{
    const name = req.body.color;
    const categoryexist = await AddCategory.find();

    console.log(categoryexist[0]._id)
    try{
         if(categoryexist.length < 1){
             const category_name = await AddCategory.create({category_color:name})
         }
         else{
             const category_name = await AddCategory.findByIdAndUpdate({_id:categoryexist[0]._id},{$push:{category_color:name}})
         }
         res.status(200).json({success:true})
    }catch(err){
      console.log(err);
    }

}

// ===========END+==================================================

// check admin or not ============================
exports.CheckAdmin=(req,res)=>{
    console.log(res.params);
}
// ---------------==========================


// checkpidx ======================================================================

exports.CheckPidx=async(req,res)=>{
    const{pidx,order_id} = req.params;
    try{
        const orderdata = await Order.find({_id:order_id})
        console.log(orderdata);
        if(orderdata[0].pidx ===pidx){
            const updatepayment = await Order.findByIdAndUpdate({_id:order_id},{payment:true})
            await Order.findByIdAndUpdate({_id:order_id},{confirm:true})
            res.status(200).json({payment:true})

        }
        else{
            const updatepayment = await Order.findByIdAndUpdate({_id:order_id},{payment:false})
            await Order.findByIdAndUpdate({_id:order_id},{confirm:false})

            res.status(200).json({payment:false})
        }
    }catch(err){
        console.log(err);
    }
   
    

}

// ========END=====================================