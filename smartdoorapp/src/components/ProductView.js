// css
import '../style/Product-view.css';
import {useEffect, useState,useContext} from 'react';

import { json, NavLink, Link,useParams ,Navigate} from 'react-router-dom';
import axios from 'axios';

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


// global varaible 
import { loginContext } from './Context';
function SampleNextArrow(props) {

    // product id


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
  
function Productview(){

    const {productId} = useParams();
    const[product,setproduct]=useState("");
    const[userId,setUserId] = useState("");
    const[cartlist,setCartList] = useState([]);
    const[productAddedMessage,setProductAddedMessage] = useState(false);
    const[buyNow,setBuyNow] = useState(false);

    const{setValidationBox} = useContext(loginContext);
    
    
   


    async function productDetail(){ 
        try{
            const product = await  axios.get(`http://localhost:3001/productdetail/${productId}`)
        
            setproduct(product.data.data);
  
        
        }catch(err){
            console.log(err);
        }
       

    }

 


// add to cart list ============================================================================================================================
    async function AddTocart(){
        
        
        try{
            const product = await  axios.post(`http://localhost:3001/addtocart`,{product_id:productId,userId:userId})
            console.log(product);
            if(product.data.cartexist){
                console.log("add already");
            }else{
               
                console.log("not add")
            }
           

        }catch(err){
            console.log(err);
        }
       
    }
    // add to cart list =============================f;asdf;sldkaf=================================================
  
    useEffect(()=>{ 
        // =========================
        if(localStorage.getItem("cart") !== null){

         setCartList(JSON.parse(localStorage.getItem("cart")));
        }else{
            setCartList([]);

        }
        // =================set USerID=============================
          setUserId(localStorage.getItem("user_id"));

        // =================END+==============================
        // ======================
        // product detail fetch from server==============================================
            productDetail();
            
        //===============END=========================/
 

     

        
    
        
    },[])

    // buynow function =======================================================
       async function buyNowFunction(){
          setUserId(localStorage.getItem("user_id"));
          console.log(userId);
            
            try{
                const buynowproduct = await axios.get(`http://localhost:3001/buynowproduct/${productId}/${userId}`)
            
                console.log(buynowproduct);
      
            
            }catch(err){
                console.log(err);
            }
        }       

    // ====================END+++++++++++++++====================================
    // show login page===============================================
    function ShowLoginPageFunction(){
        setValidationBox(true);
       
    }
    // ==========END=============================

   

  
    const [share, setShare]= useState(false);
  
   
    const shareIcon=()=>{
        setShare( !share);
        const ishare= document.querySelector('.pv-detail-share');
        ishare.style.display=`${share?"none":"flex"}`
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
    return(
        <div id="pv-view"> 
            <Navbar></Navbar>

             {/*product add to the cart message =------------------------------  */}
                {
                    productAddedMessage.length > 0?<div style={{transform:"TranslateX(0px)"}} className="product_add">
                    <p>{productAddedMessage}</p>
                    </div>:""
                }
              
             {/* ==========================END========================================= */}

            {/* large screen */}

            <div className="row pv-row ">
                <div className="col-sm-5 col-12">
                    <div className="row row-pvslider">
                        <div className="col-md-3 col-sm-12 order-2 order-md-1 pv-container">

                            {/* <!-- Indicator start --> */}

                            
                            <div className="pvslider-indicators">


                                {product?product.img.map((img,index)=>{
                                    return <div className='indicator-img'>
                                        <button type="button" data-bs-target="#pvslider" className=" active w-100 d-flex align-items-center justify-content-center"
                                            data-bs-slide-to={index}>
                                             <img src={img}/>
                                        </button>
                                    </div>
                                    })
                                    :""
                                   
                                }
                            
                            </div>
                    {/* <!-- Indicator Close --> */}
                        </div>
                        <div className="col-sm-12 col-md-9 order-1 order-md-2 pv-main-img">
                            <div id="pvslider" className="carousel slide" data-bs-touch="true" data-bs-ride="carousel" >
                            <div className="carousel-inner pvslider-inner">
                                <div className="carousel-item pv-main-img active">
                                    <img src={product?product.img[0]:""} className=" w-100"/>
                                </div>
                                <div className="carousel-item pv-main-img">
                                <img src={product?product.img[1]:""} className=" w-100"/>

                                </div>
                               
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-7 col-12 pv-img-detail">
                    
                        {/* // favourite */}
                         {/* <div className="pv-heart-icon text-end">
                            <i class="fa-regular fa-heart"></i>
                        </div> */}
                        {/* // end  */}
                    
                       
                    <div className="pv-title door-title">
                       <h1> {product?product.categories:""}</h1> 
                       <h2>{product?product.name:""}</h2>
                    </div>
               
                    <div className="pv-price-detail d-flex">
                        <div className="pv-price">Rs. {product?product.price:""}</div>
                    </div>
                    <div className="show-card-discount">Rs. <span className="price-cut">1,299 <div className="price-line"></div></span>  -31%</div>


                 


                    <div id="pv-more-detail">
                       <div className="pv-product-detail  d-flex justify-content-between">
                       <div className="pv-title">Product Details</div>
                     
                       </div>

                        <div className="pv-detail-para">
                          <p> {product?product.description:""}</p>  
                        </div>
                    </div>

                    <div id="pv-more-detail">
                       <div className="pv-product-detail  d-flex justify-content-between">
                       <div className="pv-title">size</div>
                       
                       </div>

                        <div className="pv-detail-size">
                            <h6>{product?product.size:""}inches</h6>
                          
                        </div>
                    </div>
                       {/* add to cart and buy button */}
                       <div className="cart-buy-button ">
                        <div onClick={AddTocart}className="btn add-to-cart-btn">Add to cart
                        </div>
                        <div className="buy-box">
                            <NavLink to="/product/buy-now" className="nav-link buynow-btn btn">Buy Now</NavLink>
                        </div>
                    </div>
                    {/* -================= */}

                    <div id="pv-more-detail">
                       <div className="pv-product-detail  d-flex justify-content-between">
                       <div className="pv-title">Share</div>
                        <div className="pv-product-detail-icon" onClick={shareIcon}>
                            {
                                share? "-" : "+"
                            }
                        </div>
                       </div>

                        <div className="pv-detail-share">
                            <div className="pv-fb"><i class="fa-brands fa-facebook"></i></div>
                            <div className="pv-linked"><i class="fa-brands fa-linkedin"></i></div>
                            <div className="pv-linked"><i class="fa-brands fa-linkedin"></i></div>
                            <div className="pv-linked"><i class="fa-brands fa-linkedin"></i></div>
                            <div className="pv-linked"><i class="fa-brands fa-linkedin"></i></div>
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
                                <div className="like-img" style={{background: `url(${product?product.img:""}})center/contain no-repeat`}}>
                                    <div className="heart" onClick={heart}><i class="fa-solid fa-heart"></i></div>
                                </div>
                                <div className="like-detail">
                                    {
                                        product?<div className="like-p-title">{product.name}</div>:<h1>no product</h1>

                                    }
                                    <div className="like-p-model">SD1103</div>
                                    <div className="like-p-price">{product?product.price:""}</div>
                                </div>
                            </div>
                        </div>
                        })
                     }
                    </Slider>
                </div>
            </div>                   
            
            {/* <div className="row look-row text-center ">
                <div className="">
                <div className="look-head">What are you looking for ?</div>
                <div className="look-para">We'll help you find a perfect door for your house.</div>
                <div className='look-btn-container'><span className="look-btn">see more</span></div>
                </div>
            </div> */}
        <Footer></Footer>
        </div>
    )
}

export default Productview;