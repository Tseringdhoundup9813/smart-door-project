import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios';


function CartButton(props) {
    const[rate,setRate]= useState(props.productrate);
    const[qt,setqt] = useState();
  
   


    async function AddQt(quantity){
        console.log(qt);
        try{
            const product = await axios.post(`http://localhost:3001/addqt`,{product_id:props.product_id,user_id:props.userKey})
            console.log(product.data.qt);
            setqt(product.data.qt);
           
        
        }catch(err){
            console.log(err);
        }
    }
    async function MinQt(quantity){
        console.log(qt);
        try{
            const product = await axios.post(`http://localhost:3001/minqt`,{product_id:props.product_id,user_id:props.userKey})
            console.log(product);
            setqt(product.data.qt);

        
        }catch(err){
            console.log(err);
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
    },[])


          function  cartplus(){
          
          
            AddQt();
            }
            function cartminus(){
                 MinQt();
            }

  return (
    <div className="cart-product-incerase align-items-center ">
            <div className="cart-product-minus" onClick={cartminus}><i class="fa-solid fa-minus"></i></div>
            <div className="cart-product-number">{qt} </div>

            <div className="cart-product-plus" onClick={cartplus}><i class="fa-solid fa-plus"></i></div>
    </div>
  )
}

export default CartButton