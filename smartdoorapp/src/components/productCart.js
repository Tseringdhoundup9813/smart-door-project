import '../style/productCart.css'

import {useState, useEffect, useId} from 'react'
import { NavLink } from 'react-router-dom';

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

//navbar
import Navbar from '../components/Navbar';
//footer
import Footer from '../components/Footer';
import CartButton from '../components/CartButton';
import axios from 'axios';

//cart quantity
import CartQty from '../components/cartQty'
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
    const[userId,setUserId] = useState();
    const[cartlist,setCartList] = useState([]);
    const [qty, setQty]=useState(1);
    const[deletecart,setdeletecart]= useState(false);

  


    async function productlistshow(){
        
        try{
            const product = await  axios.get(`http://localhost:3001/showCartlist/${localStorage.getItem("user_id")}`)
            setCartList(product.data.data);
            console.log(product.data);
         
          
        }catch(err){
            console.log(err);
        }

    }

    useEffect(()=>{
        setUserId(localStorage.getItem("user_id"));
        productlistshow();
        handlePrice();
        
    },[]);

    // product show 
    

    
  


    const itemprice=55;
    
    const handlePrice = ()=>{
        let ans =0;
            ans += qty * itemprice
        setPrice(ans);
    }
        // deleteCartlist=============
        async function deleteCartlist(key){
         
                try{
                    let dele =  await  axios.delete(`http://localhost:3001/deletecartlist/${key}/${localStorage.getItem("user_id")}`)
                 
                    productlistshow()
            
                  
                }catch(err){
                    console.log(err);
                }


        }   

        // ==============END=====================



        // change Rate =======================================
        function rateChange(rate){
            
            console.log(rate);
            
        }
        
    //    
  
        // ==================END+================================
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
            <Navbar></Navbar>
            <div id="cart-list">
                <div className="row row-cartList">
                    <div className="cartlist-container d-flex align-items-center">
                        <NavLink to="/product-cart" className="nav-link me-3 "><div className="cart-l-shopping text-capitalize ">shopping cart</div></NavLink>
                        <NavLink to="/product/order-tracking" className="nav-link"><div className="cart-l-shopping text-capitalize">order tracking</div></NavLink>
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

                        {/*  */}
                        {
                            cartlist?.map((product,key)=>{
                             
                              return  <div key ={key} className="cart-product-list">
                                <div className="cart-product-detail">
                                    <div className="cart-product-img" style={{backgroundImage:`url(${product.img[0]})`}}></div>
                                    <div className="cart-product-name text-capitalize">{product.categories}</div>
                                </div>
                                <div className="cart-product-amt">
                                    Rs.{product.price}
                                </div>
                                
                                
                                <div className="cart-product-quantity d-flex align-items-center">
                                    <div className="text-uppercase">qty:</div>
                                    <CartButton productrate={product.quantity} rateChange={rateChange} userKey={userId} product_id={product._id}></CartButton>
                                </div>

                                <div className="cart-product-price d-flex justify-content-around">
                                    <div className="cart-product-amount">
                                   <span className="cart-amt-sm">Grand Total</span> 
                                  
                                    </div>
                                    <div className="cart-product-remove" onClick={()=>deleteCartlist(product._id)}>
                                    <i class="fa-solid fa-trash-can"></i>
                                    </div>
                                </div>
                                <div className="cart-product-remove-sm"onClick={()=>deleteCartlist(key)}>
                                <i class="fa-solid fa-trash-can"></i>
                                </div>
                            </div>
    
                            })
                        }
                       
                        {/*  */}

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
                                <div className="btn coupon-cart-update update cart"><NavLink to="/product/buy-now" className="nav-link">proceed to checkout</NavLink></div>
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
                     {  likeimg.map((e,key)=>{
                        return<div key={key}>
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
            <Footer></Footer>
        </div>
    )
}
export default ProductCart;