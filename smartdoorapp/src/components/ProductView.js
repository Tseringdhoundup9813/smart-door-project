// css
import '../style/Product-view.css';
import {useEffect, useState} from 'react';

import { json, Link,useParams } from 'react-router-dom';
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
   


    async function productDetail(){ 
     
        try{
            const product = await  axios.get(`http://localhost:3001/productdetail/${productId}`)
          
            setproduct(product.data.data);
        
        }catch(err){
            console.log(err);
        }
       

    }

 


// add to cart list ============================================================================================================================
    function AddTocart(){
        if(JSON.parse(localStorage.getItem("cart")) !==null){
           
            const checkExists = cartlist.filter((item)=>{
                if(item._id == product._id){
                    return true;
                }else{
                    return false;
                }
            })
            if(checkExists.length > 0){
                console.log("already add to cart");
                setProductAddedMessage("already added to cart");
                
                setTimeout(function(){
                    setProductAddedMessage("");
                },1200)
            }
            else{
                localStorage.setItem("cart",JSON.stringify([...cartlist,product]));
                    setCartList([...cartlist,product]);
                    // product add to cart message ========================
                    setProductAddedMessage("added to cart");
                   
                    setTimeout(function(){
                        setProductAddedMessage("");
                    },1200)
            }
           

            // if(cartlist.includes(product)){
            //     console.log("already add to cart");
            // }
            // else{
               
            //     localStorage.setItem("cart",JSON.stringify([...cartlist,product]));
            //     setCartList([...cartlist,product]);
            //     // product add to cart message ========================
            //     setProductAdded(true);
            //     setTimeout(function(){
            //         setProductAdded(false);  
            //     },1200)

                       
            // } 
        }
        else{
            localStorage.setItem("cart",JSON.stringify([...cartlist,product]));
            setCartList([...cartlist,product]);
            console.log("last one work too");
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
        // ======================
     
        // check product add to cart or not
        productDetail();

        
    
        
    },[ ])

   

    const [state, setState]=useState(false);
    const [size, setSize]= useState(false);
    const [share, setShare]= useState(false);
  
    const plusIcon=()=>{
        setState( !state);
        const para= document.querySelector('.pv-detail-para');
        para.style.display=`${state?"none":"block"}`
    }
    const sizeIcon=()=>{
        setSize( !size);
        const psize= document.querySelector('.pv-detail-size');
        psize.style.display=`${size?"none":"block"}`
    }
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
        <div> 
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
                <div className="col-sm-4 col-12">
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
                <div className="col-sm-8 col-12 pv-img-detail">
                    
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
                        <div className="pv-price"><h1>Rs. {product?product.price:""}</h1></div>
                    </div>


                 


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
                            <h1>{product?product.size:""}inches</h1>
                          
                        </div>
                    </div>
                       {/* add to cart and buy button */}
                       <div className="cart-buy-button ">
                        <div onClick={AddTocart}className="add-to-cart-box">
                            <p>Add to cart</p>
                        </div>
                        <div className="buy-box">
                            <p>Buy</p>
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