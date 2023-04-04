import React from 'react'
//navbar
import Navbar from './Navbar';
//footer
import Footer from './Footer';
import '../style/productCart.css'

import {useState, useEffect, useId} from 'react'
import { NavLink } from 'react-router-dom';

//slick
import{ Component } from "react";
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
export default function OrderTracking() {
  const [price, setPrice] = useState(0);
  const[userId,setUserId] = useState();
  const[cartlist,setCartList] = useState([]);
  const[deletecartlist,setdeletecartlist] = useState();



  useEffect(()=>{

      setCartList(JSON.parse(localStorage.getItem("cart")));
      handlePrice();
      
  },[]);
  



  const itemprice=55;
  
  const handlePrice = ()=>{
      let ans =0;
          ans += qty * itemprice
      setPrice(ans);
  }


 
      // deleteCartlist=============
      function deleteCartlist(key){
          
        
        let deletecart = JSON.parse(localStorage.getItem("cart")).filter((item,index,array)=>{
              if(index !==key){
                  return item;
              }
        })

        localStorage.setItem("cart",JSON.stringify(deletecart));
       setCartList(JSON.parse(localStorage.getItem("cart")));

      
        
      //   console.log(deletecart);

 
      }
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
  
  const [qty, setQty]=useState(1);
  const cartplus=()=>{
      setQty(qty + 1)
  }
  const cartminus=()=>{
      if (qty>1){
          setQty(qty - 1);
      }else{
          setQty(1)
      }
  } 
  return (
    <div>
      <Navbar></Navbar>
      <div id="cart-list">
                <div className="row row-cartList">
                    <div className="cartlist-container d-flex align-items-center">
                    <NavLink to="/product-cart" className="nav-link me-3"><div className="cart-l-shopping text-capitalize ">shopping cart</div></NavLink>
                    <NavLink to="/product/order-tracking" className="nav-link"><div className="cart-l-shopping text-capitalize">order tracking</div></NavLink>
                    </div> 
                </div>

{/* ============Order-Tracker========= */}
                <div className="row row-tracker">
                  <div className="col-10  tracker mx-auto">
                  <div className="order-table-border">
                  <div className="order-table order-table-head">
                      <div className="fw-bold text-capitalize order-table-list text-center">view</div>
                      <div className="fw-bold text-capitalize order-table-list text-center">order number</div>
                      <div className="fw-bold text-capitalize order-table-list text-center">order date</div>
                      <div className="fw-bold text-capitalize order-table-list text-center">Product Name</div>

                   
                    </div>
                    <div className="order-table">
                    <div className="text-capitalize order-table-list text-center"><i className="fa-solid fa-eye"></i></div>
                      <div className="text-capitalize order-table-list text-center">1232134214</div>
                      <div className="text-capitalize order-table-list text-center">7 feb 2023</div>
                      <div className="text-capitalize order-table-list text-center">3d doorr-Sd102</div>

                    </div>
                  </div>
                    <div className="order-view">
                    <div >
                      <table>
                        <tr>
                          <td><div className="track-status text-capitalize">status </div></td>
                          <td className='px-2'>:</td>
                          <td className='ps-3'><div className="track-status-type"> Deliverd</div></td>
                        </tr>
                      </table>
                      
                      
                    </div>
                      <div className="order-prog-title my-2"> Your Order Progress :</div>
                    <div className="order-progress ">
                      <div className="order-line">
                      <div className="order-progress-color"></div>
                      <div className="circle circle1"><i class="fa-solid fa-cart-shopping"></i></div>
                      <div className="circle circle2"><i class="fa-solid fa-truck"></i></div>
                      <div className="circle circle3"><i class="fa-solid fa-check"></i></div>
                      <div className="order-status order-placed"> Order Placed</div>
                      <div className="order-status in-transit">In Transit</div>
                      <div className="order-status completed">completed</div>
                      </div>
                    </div>
                    </div>
                    
                  </div>
                </div>
{/* ============End of Order-Tracker========= */}

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
