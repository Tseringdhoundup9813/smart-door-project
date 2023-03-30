import React, { useState } from 'react'
import '../style/PlaceOrder.css';

//navbar
import Navbar from '../components/Navbar';
//footer
import Footer from '../components/Footer';

export default function PlaceOrder() {
    const [khalti, setKhalti]=useState(true);
    const [cod, setCod]=useState(false);

    const handle=()=>{
        setKhalti(true)
        setCod(false)
    }
    const clickcod=()=>{
        setCod(true)
        setKhalti(false)
        document.querySelector('.cod').style.background="#fff"
    }
  return (
    <div>
        <Navbar></Navbar>
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

                            <div className="pay-nowbtn btn text-capitalize"> pay now</div>
                        </div>)}
                        {
                            cod && (
                                <div className="COD">
                            <div className="cod-po-head">Cash On Devlivery</div>
                            <ol>
                                <li>Do pay your Amout while delivering.</li>
                            </ol>
                            <div className="pay-nowbtn btn text-capitalize"> Confirm now</div>
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
                                <div className="po-total-amt fs-6 text-success">Rs 9897</div>
                                </div>
                    </div>
                </div>
            </div>
        </div>


        <Footer></Footer>
    </div>
  )
}
