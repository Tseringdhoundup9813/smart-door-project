import React from 'react'
//css
import '../style/BuyNow.css';

import { NavLink } from 'react-router-dom';
//navbar
import Navbar from '../components/Navbar';
//footer
import Footer from '../components/Footer';
export default function BuyNow() {
  return (
    <div>
        <Navbar></Navbar>
        <div id="buyNow">
            <div className="row row-buy">
                <div className="col-md-7 col-lg-8 col-sm-7 col-xsm-12">
                    <div className="buy-deliver">
                        <div className="b-deliver-to mb-1">
                            Deliver : Tenzin
                        </div>
                        <div className="b-d-address">
                            <div className="bd-address"> <span className="number">9861703322</span> Swoyambhu, swoyambhu-bhagwan pau</div>
                
                        </div>
                        <div className="b-billingadress my-1">
                            Bill to the same address <span className="edit-ba">Edit</span>
                        </div>
                        <div className="b-email">
                            Email to <span className="bemail">sangeylama1000@gmail.com</span> <span className="edit-email">Edit</span>
                        </div>
                    </div>
                    <div className="buy-cart">
                        <div className="buy-cart-head text-capitalize">orders</div>
                        <div className="buy-cart-container">
                            <div className="buy-cart-img"></div>
                            <div className="buy-cart-detail">
                                <div className="buy-cart-head">
                                    VGR 3d Doors
                                </div>
                                <div className="bu-cart-cat">
                                    category
                                </div>
                            </div>
                            <div className="buy-cart-qty">
                                Qty :1
                            </div>
                            <div className="buy-cart-price">
                                Rs. 1,480
                            </div>
                        </div>
                    <div className="buy-subtotal">
                        <span className="subtotal-item">1 items.</span>
                        Subtotal : <span className="main-subtotal">Rs. 1,555</span>
                    </div>
                    </div>
                </div>
                <div className="col-md-5 col-lg-4 col-sm-5 col-xsm-12">
                    <div className="buy-place-order">
                        <div className="po-head text-capitalize">Order summary</div>
                        <div className="order-summary">
                            <div className="items-total text-capitalize">Items Total</div>
                            <div className="items-total-amt text-end">Rs. 1490</div>
                            <div className="deliveryfee text-capitalize">Delivery Fee</div>
                            <div className="deliveryfeee-amt text-end">Rs.100</div>
                            <div className="total-pay text-capitalize">Total payment</div>
                            <div className="total-pay-amt text-end">Rd. 1,5656</div>
                        </div>
                        <div className="placeorder-btn btn text-capitalize"><NavLink to="/product/placeorder" className="nav-link">place order</NavLink></div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
  )
}
