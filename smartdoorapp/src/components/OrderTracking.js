import React from "react";
import "../style/OrderTracking.css";
//navbar
import Navbar from "./Navbar";
//footer
import Footer from "./Footer";
import "../style/productCart.css";

import { useState, useEffect, useId } from "react";
import { NavLink } from "react-router-dom";

//slick
import { Component } from "react";
import Slider from "react-slick";
import axios from "axios";

//slick  css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//product-img
import productimg from "../image/products/3d/SD110.jpeg";
import can from "../image/products/canadian/CD101.jpg";
import can1 from "../image/products/canadian/CD102.jpg";
import can2 from "../image/products/canadian/CD103.jpg";
import can3 from "../image/products/canadian/CD104.jpg";

import db from "../image/products/double/DDGK.jpg";

import mem from "../image/products/membrane/SD11.jpeg";
import mem1 from "../image/products/membrane/SD101.jpg";
import mem2 from "../image/products/membrane/SD102.jpg";
import mem3 from "../image/products/membrane/SD103.jpg";
import mem4 from "../image/products/membrane/SD104.jpg";
import mem5 from "../image/products/membrane/SD106.jpg";
import mem6 from "../image/products/membrane/SD115.jpg";

//cart quantity
import CartQty from "../components/cartQty";
import CartButton from "./CartButton";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "red",
        borderRadius: "50%",
        height: "30px",
        width: "30px",
        padding: "5px",
        fontSize: "20px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "red",
        borderRadius: "50%",
        height: "30px",
        width: "30px",
        padding: "5px",
        fontSize: "20px",
      }}
      onClick={onClick}
    />
  );
}
export default function OrderTracking() {
  const [price, setPrice] = useState(0);
  const [userId, setUserId] = useState();
  const [cartlist, setCartList] = useState([]);
  const [order_tracking_list, set_order_tracking_list] = useState();
  const [order_status_num, set_Order_status_num] = useState();
  const [order_status_word, set_order_status_word] = useState();

  useEffect(() => {
    handlePrice();
    OrderTracking();

    

   
  },[]);


  // condition =================
   const trackingwidth  = function(status){
        if(status===0){
         
          return 0;
        }
        else if(status===1){
          return 50;
        }
        else if(status===2){
          return 100;
        }
   }



  async function OrderTracking() {
    try {
      const order = await axios.get(
        `http://localhost:3001/ordertracking/${localStorage.getItem("user_id")}`
      );

      set_order_tracking_list(order.data.data);
      console.log(order);
      // set_Order_status_num(order.data.data[0].deliverystatus)
    } catch (err) {
      console.log(err);
    }
  }

  // order ===========================
   let order_text = function (order_status){
       if(order_status==0){
         return "order place";
       }
       if(order_status ==1){
        return "transit";
       }
       if(order_status==2){
         return "delivered"
       }
   }

  //

  const itemprice = 55;

  const handlePrice = () => {
    let ans = 0;
    ans += qty * itemprice;
    setPrice(ans);
  };

  function ViewOrderStatus(id) {
    console.log(id);
    let selectedorder = [];
    order_tracking_list &&
      order_tracking_list.map((order) => {
        if (order._id == id) {
          selectedorder.push(order);
        }
      });

    // set_order_status_num(selectedorder.deliverystatus)
    set_Order_status_num(selectedorder[0].deliverystatus);
    console.log(selectedorder[0]);
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
          dots: false,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const heart = () => {
    console.log("hi");
  };
  const likeimg = [
    { image: productimg, title: "3d ddors", price: "3800" },
    { image: can, title: "3d ddors", price: "3800" },
    { image: can1, title: "3d ddors", price: "3800" },
    { image: can2, title: "3d ddors", price: "3800" },
    { image: can3, title: "3d ddors", price: "3800" },
    { image: db, title: "3d ddors", price: "3800" },
    { image: mem, title: "3d ddors", price: "3800" },
    { image: mem1, title: "3d ddors", price: "3800" },
    { image: mem2, title: "3d ddors", price: "3800" },
    { image: mem3, title: "3d ddors", price: "3800" },
    { image: mem4, title: "3d ddors", price: "3800" },
    { image: mem5, title: "3d ddors", price: "3800" },
    { image: mem6, title: "3d ddors", price: "3800" },
  ];

  const [qty, setQty] = useState(1);
  const cartplus = () => {
    setQty(qty + 1);
  };
  const cartminus = () => {
    if (qty > 1) {
      setQty(qty - 1);
    } else {
      setQty(1);
    }
  };
  return (
    <div>
      <Navbar></Navbar>
      <div id="cart-list">
        <div className="row row-cartList">
          <div className="cartlist-container d-flex align-items-center">
            <NavLink to="/product-cart" className="nav-link me-3">
              <div className="cart-l-shopping text-capitalize ">
                shopping cart
              </div>
            </NavLink>
            <NavLink to="/product/order-tracking" className="nav-link">
              <div className="cart-l-shopping text-capitalize">
                order tracking
              </div>
            </NavLink>
          </div>
        </div>

        {/* ============Order-Tracker========= */}
        <div className="row row-tracker">
          <div className="col-11 tracker mx-auto">
            <div className="order-table-border">
              <div className="order-table order-table-head">
                <div className="fw-bold text-capitalize order-table-list text-center">
                  view
                </div>
                <div className="fw-bold text-capitalize order-table-list text-center">
                  order number
                </div>
                <div className="fw-bold text-capitalize order-table-list text-center">
                  order date
                </div>
                <div className="fw-bold text-capitalize order-table-list text-center">
                  Paid
                </div>
              </div>
              {order_tracking_list &&
                order_tracking_list.map((orderlist) => {
                  return (
                    <div>
                      <div className="order-table-para order-table">
                        <div
                          className="text-capitalize order-table-list text-center"
                          onClick={() => ViewOrderStatus(orderlist._id)}
                        >
                          <i className="fa-solid fa-eye"></i>
                        </div>
                        <div className="text-capitalize order-table-list text-center">
                          {orderlist._id.slice(0, 9)}.....
                        </div>
                        <div className="text-capitalize order-table-list text-center">
                          {orderlist.createdAt}
                        </div>
                        <div className="text-capitalize order-table-list text-center">
                          {orderlist.payment?"paid":"unpaid"}
                        </div>
                      </div>
                      <div className="order-view">
                        <div>
                          <table>
                            <tr>
                              <td>
                                <div className="track-status text-capitalize">
                                  status
                                </div>
                              </td>
                              <td className="px-2">:</td>
                              <td className="ps-3">
                                <span className="track-status-type">
                                {order_text(orderlist.deliverystatus)}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="track-location text-capitalize">
                                  delivery address
                                </div>
                              </td>
                              <td className="px-2">:</td>
                              <td className="ps-3">
                                <div className="track-address">
                                  {orderlist.location}
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="track-number text-capitalize">
                                  Phone Number
                                </div>
                              </td>
                              <td className="px-2">:</td>
                              <td className="ps-3">
                                <div className="track-number-type">
                                  {orderlist.number}
                                </div>
                              </td>
                            </tr>
                          </table>
                        </div>
                        <div className="row row-track-head">
                          <div className="col-12 track-div">
                            <div className="cart-heading">
                              <div className="cart-h text-uppercase">
                                Product
                              </div>
                              <div className="cart-h text-uppercase">price</div>
                              <div className="cart-h text-uppercase">
                                quantity
                              </div>
                              <div className="cart-h text-uppercase">
                                total price
                              </div>
                            </div>


                            {orderlist.productId.map((product)=>{
                              return <div className="cart-product-list">
                                   <div className="cart-product-detail">
                                     <div
                                       className="cart-product-img"
                                       style={{
                                         backgroundImage: `url(${product.mainproduct[0].img[0]})`
                                       }}
                                     ></div>
                                     <div className="cart-product-name text-capitalize">
                                     {product.mainproduct[0].categories}
                                     </div>
                                   </div>
                                   <div className="cart-product-amt d-flex">
                                     <div className="price-name"> Price : </div>
                                     {product.mainproduct[0].price}
                                   </div>
     
                                   <div className="cart-product-quantity d-flex align-items-center">
                                     <div className="price-qty"> QTY : </div>  {product.quantity}
                                   </div>
     
                                   <div className="cart-product-price d-flex justify-content-around">
                                     <div className="cart-product-amount">
                                       {/* <span className="cart-amt-sm">Grand Total</span>  */}
                                       <div className="cart-product-amount">
                                         <span className="cart-amt-sm">
                                           Grand Total
                                         </span>
                                         RS.{product.amount}
                                       </div>
                                     </div>
                                   </div>
                                 </div>
                            })}
                           





                          </div>
                        </div>
                        <div className="order-prog-title my-2">
                          {" "}
                          Your Order Progress :
                        </div>
                        <div className="order-progress ">
                          <div className="order-line">
                            <div
                          
                              className="order-progress-color"
                              style={{ width:`${trackingwidth(orderlist.deliverystatus)}%`,
                              }}
                            ></div>
                            <div className="circle circle1">
                              <i class="fa-solid fa-cart-shopping"></i>
                            </div>
                            <div className="circle circle2">
                              <i class="fa-solid fa-truck"></i>
                            </div>
                            <div className="circle circle3">
                              <i class="fa-solid fa-check"></i>
                            </div>
                            <div className="order-status order-placed">
                              {" "}
                              Order Placed
                            </div>
                            <div className="order-status in-transit">
                              In Transit
                            </div>
                            <div className="order-status completed">
                              completed
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        {/* ============End of Order-Tracker========= */}
{/* 
        <div className="row like-row">
          <div className="pl d-flex justify-content-between">
            <div className="pl-left">You may also Like</div>
            <div className="pl-right">View all</div>
          </div> */}
          {/* slick */}
          {/* <div>
            <Slider {...settings}>
              {likeimg.map((e, key) => {
                return (
                  <div key={key}>
                    <div className="like-card">
                      <div
                        className="like-img"
                        style={{
                          background: `url(${e.image})center/contain no-repeat`,
                        }}
                      >
                        <div className="heart" onClick={heart}>
                          <i class="fa-solid fa-heart"></i>
                        </div>
                      </div>
                      <div className="like-detail">
                        <div className="like-p-title">Premium Double Doors</div>
                        <div className="like-p-model">SD1103</div>
                        <div className="like-p-price">Rs. 2800/-</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div> */}

        
      </div>
      <Footer></Footer>
    </div>
  );
}
