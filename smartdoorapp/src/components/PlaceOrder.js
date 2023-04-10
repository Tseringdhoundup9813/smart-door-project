import React, { useState,useEffect} from 'react'
import { useNavigate ,useSearchParams} from "react-router-dom"
import '../style/PlaceOrder.css';

//navbar
import Navbar from '../components/Navbar';
//footer
import Footer from '../components/Footer';
import axios from 'axios';

export default function PlaceOrder() {
    const [khalti, setKhalti]=useState(true);
    const [cod, setCod]=useState(false);
    const[total_Amount,set_total_Amount]=useState(0);
    const[order_id,set_order_id]=useState();
    const[orderconfirm_success,set_order_confirm_success] = useState(false);
    const[payment,set_payment] =useState();
    const[pidx_number,set_pidx_number] =useState();

    
    
    const [params] = useSearchParams();
    
    if(params.get("pidx") !==null){
        let pidx = params.get("pidx");
        console.log(pidx);
        CheckPidx();
       
        async function CheckPidx(){

            try{
                const response= await  axios.get(`http://localhost:3001/checkpidx/${pidx}/${localStorage.getItem("order_id")}`)
                console.log(response.data.payment);
                set_payment(response.data.payment);
                    
            }catch(err){
                console.log(err);
            }
        }
       
    }
    // setpidx(params.get("pidx"));
  
   

    const navigate = useNavigate();

    // useeffect ======================================
    useEffect(()=>{
        
        set_order_id(localStorage.getItem("order_id"));
        totalproductamount();
        if(orderconfirm_success){
            console.log("working sucess");
            setTimeout(function(){
                navigate("/product/order-tracking");

            },2500)
          
        }

        if(payment){
            console.log("working sucess");
            setTimeout(function(){
                navigate("/product/order-tracking");

            },2500)
          
        }
        
    },[orderconfirm_success,payment])

    // ====================
    // total amount ================================================================


    async function totalproductamount(){
        
        try{
            const totalamount = await  axios.get(`http://localhost:3001/totalamount/${localStorage.getItem("user_id")}`)
            
            set_total_Amount(totalamount.data.totalamount);
           
        }catch(err){
            console.log(err);
        }
    }

 

    const handle=()=>{
        setKhalti(true)
        setCod(false)
    }
    const clickcod=()=>{
        setCod(true)
        setKhalti(false)
        document.querySelector('.cod').style.background="#fff"
    }

    // order confirm =======================================

    async function confirmOrder(){
        try{
            const order = await axios.post(`http://localhost:3001/orderconfirm`,{order_id:order_id})
            console.log(order.data);
            set_order_confirm_success(order.data.success)
            if(orderconfirm_success){

            }
            
            
        }catch(err){
            console.log(err);
        }
    }
    // =============END+=======================================


    // =================================================

        
      


    // pay on khalti =====================================================================================================
     async function KhaltiPay(){
        try{
            const order = await axios.get(`http://localhost:3001/khaltipayload/${localStorage.getItem("order_id")}`)
            console.log(order.data.khaltiurl);
            window.location.replace(order.data.khaltiurl);
        }catch(err){
            console.log(err);
        }
       
        }
      

    // =--------------------------------flasklfksadf=========================================================





  return (
    <div>
        <Navbar></Navbar>

        {/* order confirm success fully =====================================MESSAGE ======================== */}
        {
            <div className="order_confirm_message" style={{transform:`${orderconfirm_success?"translateY(20%)":"translateY(-300%)"}`}}>
               
                <p>You Have sucessully place order<span> Thank you {localStorage.getItem("username").slice(0,4)}.... </span></p>
                
            </div>
        }


        {
            <div className="order_confirm_message" style={{transform:`${payment?"translateY(20%)":"translateY(-300%)"}`}}>
               <p>You Have sucessfully paid <span> Thank you {localStorage.getItem("username").slice(0,4)}.... </span></p>
             </div>
        }
        {/* ================END+=====================END+=================================================== */}
        <div id="placeOrder">
            <div className="row row-placeOrder">
                <div className="col-sm-12 col-xsm-12 order-xsm-1 text-capitalize fs-3 my-4 fw-bold">
                select payment method
                </div>
                <div className="col-sm-7 col-xsm-12 order-xsm-3">
                    <div className="payment-container">
                        <div className="payment-mode-container d-flex">
                            <div className="khalti" style={{backgroundColor:`${khalti?'#fff':''}`}} onClick={handle}>
                                <div className="img-padding">
                                    <div className="khalti-icon">
                                    </div>
                                </div>
                              <div className="khalti-head fw-bold text-center">khalti</div>
                            </div>
                            <div className="cod" style={{backgroundColor:`${cod?'#fff':''}`}} onClick={clickcod}>
                                <div className="img-padding">

                                <div className="cod-icon">
                                </div>
                                </div>
                                <div className="cod-head fw-bold text-center">Cash on delivery</div>
                            </div>
                        </div>
                    </div>
                    <div className="payment-points">
                        { khalti && (
                        <div className="khalti-points" >
                            <div className="khalti-po-head">You will be redirected to your khalti account to complete your payment:</div>
                            <ol>
                                <li>Login to your khalti account using your khalti ID and your Password</li>
                                <li>Ensure your khalti account is active and has sufficient balance</li>
                                <li>Enter OTP (one time password) sent to your registered mobile number</li>
                            </ol>

                            <div className="khalti-warning"> ***Login with your khalti mobile and PASSWORD (not MPin)***</div>

                            <div className="pay-nowbtn btn text-capitalize" onClick={KhaltiPay}> pay now</div>
                        </div>)}
                        {
                            cod && (
                                <div className="COD">
                            <div className="cod-po-head">Cash On Devlivery</div>
                            <ol>
                                <li>Do pay your Amout while delivering.</li>
                            </ol>
                            <div className="pay-nowbtn btn text-capitalize" onClick={confirmOrder}> Confirm now</div>
                        </div>
                            )
                        }
                        
                    </div>
                </div>
                <div className="col-sm-5 col-xsm-12 my-4 order-2">
                    <div className="ordersummary">
                        <div className="fs-4 fw-bold text-capitalize" >order summary</div>
                                <div className="d-flex align-items-center justify-content-between">
                                <div className="po-title my-1">
                                subtotal (shipping fee included)
                                </div>
                                <div className="po-amt">Rs 9897</div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                <div className="po-total fs-4 text-success">Total </div>
                                <div className="po-total-amt fs-6 text-success">Rs {total_Amount}</div>
                                </div>
                    </div>
                </div>
            </div>
        </div>


        <Footer></Footer>
    </div>
  )
}
