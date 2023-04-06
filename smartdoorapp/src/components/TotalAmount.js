import React,{useEffect,useState} from 'react'
import axios from 'axios';

function TotalAmount(props) {
    const[total_Amount,set_total_Amount]=useState(0);
    const[count,setcount] =useState(0);


    console.log(count)

   
    useEffect(()=>{
        setcount(props.cartcount);
        totalproductamount();
        async function totalproductamount(){
        
            try{
                const totalamount = await  axios.get(`http://localhost:3001/totalamount/${localStorage.getItem("user_id")}`)
                
                set_total_Amount(totalamount.data.totalamount);
    
                
            }catch(err){
                console.log(err);
            }
        }
    })  
    
  return (
    <div className="cart-total">
        <div className="cart-total-head text-capitalize">total</div>
        <div className="cart-total-amt"> Rs.{total_Amount}/-</div>
    </div>  
  )
}

export default TotalAmount