import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios';


function CartButton(props) {
  
    const[qt,setqt] = useState();
    const[totalamount,setTotalamount] = useState();
    
   


    async function AddQt(quantity){
       
        
        try{
            const product = await axios.post(`http://localhost:3001/addqt`,{product_id:props.product_id,user_id:props.userKey})
            
            setTotalamount(product.data.totalamount)
            setqt(product.data.qt);
            props.rateChange(qt);
           
        
        }catch(err){
            console.log(err);
        }
    }
    async function MinQt(quantity){
        if(qt > 1){
            try{
                const product = await axios.post(`http://localhost:3001/minqt`,{product_id:props.product_id,user_id:props.userKey})
           
                setqt(product.data.qt);
                props.rateChange(qt);
    
        
            }catch(err){
                console.log(err);
            }
        }
       
    }

  
   
   
     useEffect(()=>{
    
        async function getQuantity(){
            try{
                const product = await axios.get(`http://localhost:3001/quantity/${props.product_id}/${props.userKey}`)
                console.log(product.data.qt);
                setqt(product.data.qt);
            
            }catch(err){
                console.log(err);
            }
        }

        getQuantity();

        // get total amount 

    },[])


          function  cartplus(){
          
          
            AddQt();
            }
            function cartminus(){
                 MinQt();
            }

  return (
    <div>
    <div className="cart-product-incerase align-items-center ">
            <div className="cart-product-minus" onClick={cartminus}><i class="fa-solid fa-minus"></i></div>
            <div className="cart-product-number">{qt} </div>

            <div className="cart-product-plus" onClick={cartplus}><i class="fa-solid fa-plus"></i></div>
    </div>
     
     
  </div>
  )
}

export default CartButton