import '../style/productCart.css'

import {useState, useEffect} from 'react'

//slick
import React, { Component } from "react";
import Slider from "react-slick";


//slick  css
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

//product-img
import productimg from "../image/products/3d/SD110.jpeg";
import can from '../image/products/canadian/CD101.jpg';
import can1 from '../image/products/canadian/CD102.jpg';
import can2 from '../image/products/canadian/CD103.jpg';
import can3 from '../image/products/canadian/CD104.jpg';

import db from '../image/products/double/DDGK.jpg';

import mem from '../image/products/membrane/SD11.jpeg';
import mem1 from '../image/products/membrane/SD101.jpg';
import mem2 from '../image/products/membrane/SD102.jpg';
import mem3 from '../image/products/membrane/SD103.jpg';
import mem4 from '../image/products/membrane/SD104.jpg';
import mem5 from '../image/products/membrane/SD106.jpg';
import mem6 from '../image/products/membrane/SD115.jpg';


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red",borderRadius:"50%", height:"30px",width:"30px",padding:"5px",fontSize:"20px" }}
        onClick={onClick}
      />
    );
  }


  
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red",borderRadius:"50%", height:"30px",width:"30px",padding:"5px",fontSize:"20px" }}
        onClick={onClick}
      />
    );
  }
function ProductCart (){
    const [price, setPrice] = useState(0);
    const [amount, setAmount]=useState(1)
    const itemprice=55;
    
    const handlePrice = ()=>{
        let ans =0;
            ans += amount * itemprice
        setPrice(ans);
    }
    const cartplus=()=>{
        setAmount(amount + 1)
    }
    const cartminus=()=>{
        if (amount>1){
            setAmount(amount - 1);
        }else{
            setAmount(1)
        }
    }
    useEffect(()=>{
        handlePrice();
    })

    //slick 
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
                dots: false
              }
            },
            
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };
    
    const heart=()=>{
        console.log('hi')
    }
    const likeimg=[
        {image:productimg, title:"3d ddors", price:"3800"},
        {image:can, title:"3d ddors", price:"3800"},
        {image:can1, title:"3d ddors", price:"3800"},
        {image:can2, title:"3d ddors", price:"3800"},
        {image:can3, title:"3d ddors", price:"3800"},
        {image:db, title:"3d ddors", price:"3800"},
        {image:mem, title:"3d ddors", price:"3800"},
        {image:mem1, title:"3d ddors", price:"3800"},
        {image:mem2, title:"3d ddors", price:"3800"},
        {image:mem3, title:"3d ddors", price:"3800"},
        {image:mem4, title:"3d ddors", price:"3800"},
        {image:mem5, title:"3d ddors", price:"3800"},
        {image:mem6, title:"3d ddors", price:"3800"},
    ]
    return(
        <div>
            <div id="cart-list">
                <div className="row row-cartList">
                    <div className="cartlist-container d-flex justify-content-between align-items-center">
                        <div className="cart-l-shopping text-capitalize">shopping cart</div>
                        <div className="cart-l-shopping text-capitalize">whistlist</div>
                        <div className="cart-l-shopping text-capitalize">order tracking</div>
                        <div className="cart-l-shopping text-capitalize">login</div>
                    </div> 
                </div>
                <div className="row row-cart-table">
                    <div className="col-12">
                        <div className="cart-heading">
                            <div className="cart-h text-uppercase">Product</div>
                            <div className="cart-h text-uppercase">price</div>
                            <div className="cart-h text-uppercase">quantity</div>
                            <div className="cart-h text-uppercase">subtotal</div>
                        </div>
                        <div className="cart-product-list">
                            <div className="cart-product-detail">
                                <div className="cart-product-img"></div>
                                <div className="cart-product-name text-capitalize">canadian door 
                                
                                </div>
                            </div>
                            <div className="cart-product-amt">
                                Rs.{itemprice}/-
                            </div>
                            
                            <div className="cart-product-quantity d-flex align-items-center">
                                <div className="text-uppercase">qty:</div>
                                <div className="cart-product-incerase align-items-center ">
                                    <div className="cart-product-minus" onClick={cartminus}><i class="fa-solid fa-minus"></i></div>
                                    <div className="cart-product-number">{amount} </div>
                                    <div className="cart-product-plus" onClick={cartplus}><i class="fa-solid fa-plus"></i></div>
                                </div>
                            </div>
                            <div className="cart-product-price d-flex justify-content-around">
                                <div className="cart-product-amount">
                               <span className="cart-amt-sm">Grand Total</span>  Rs. {price}/-
                                </div>
                                <div className="cart-product-remove">
                                <i class="fa-solid fa-xmark"></i>
                                </div>
                            </div>
                            <div className="cart-product-remove-sm">
                                <i class="fa-solid fa-xmark"></i>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row row-cart-coupon">
                    <div className="col-12 coupon-container">
                        <div className="coupon-name text-capitalize">
                            coupon
                        </div>
                        <div>
                            <div className="coupon-code d-flex align-items-center justify-content-around">
                                <div className="coupon-input"><input type="text" placeholder="Coupon Code" /></div>
                                <div className="coupon-btn btn text-uppercase">apply code</div>
                            </div>
                            <div className="coupon-cart">
                                <div className="btn coupon-cart-update update cart">update cart</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row row-cart-coupon">
                    <div className="col-12 coupon-container">
                        <div className="coupon-name text-capitalize">
                            cart totals
                        </div>
                        <div>
                            <div className="cart-total">
                                <div className="cart-total-head text-capitalize">subtotal</div>
                                <div className="cart-total-amt"> Rs.{price}/-</div>
                            </div>
                            <div className="cart-total">
                                <div className="cart-total-head text-capitalize">shipping</div>
                                <div className="cart-shipp">Enter your shipping address</div>
                            </div>
                            <div className="cart-total">
                                <div className="cart-total-head text-capitalize">total</div>
                                <div className="cart-total-amt"> Rs.{price}/-</div>
                            </div>
                            <div className="coupon-cart">
                                <div className="btn coupon-cart-update update cart">proceed to checkout</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row like-row">
                <div className="pl d-flex justify-content-between">
                    <div className="pl-left">You may also Like</div>
                    <div className="pl-right">View all</div>
                </div>
                {/* slick */}
                <div>
                  
                    <Slider {...settings}>
                     {  likeimg.map((e)=>{
                        return<div>
                            <div className="like-card">
                                <div className="like-img" style={{background: `url(${e.image})center/contain no-repeat`}}>
                                    <div className="heart" onClick={heart}><i class="fa-solid fa-heart"></i></div>
                                </div>
                                <div className="like-detail">
                                    <div className="like-p-title">Premium Double Doors</div>
                                    <div className="like-p-model">SD1103</div>
                                    <div className="like-p-price">Rs. 2800/-</div>
                                </div>
                            </div>
                        </div>
                        })
                     }
                    </Slider>
                </div>
            </div> 
            </div>
        </div>
    )
}
export default ProductCart;