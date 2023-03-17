// css
import '../style/Product-view.css';
import {useState} from 'react';

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
  
function Productview(){
    const [state, setState]=useState(false);
    const [size, setSize]= useState(false);
    const [share, setShare]= useState(false);
    console.log(state);
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
            {/* large screen */}

            <div className="row pv-row justify-content-around">
                <div className="col-sm-6 col-12">
                    <div className="row row-pvslider">
                        <div className="col-md-3 col-sm-12 order-2 order-md-1 pv-container">

                            {/* <!-- Indicator start --> */}
                            <div className="pvslider-indicators">
                                <div className='pv-img'>
                                <button type="button" data-bs-target="#pvslider" className=" border border-secondary active w-100 d-flex align-items-center justify-content-center"
                                    data-bs-slide-to="0">
                                <img src={likeimg[0].image}/>
                                </button>
                                </div>
                               <div className='pv-img'>
                               <button type="button" data-bs-target="#pvslider" className=" border border-secondary   w-100 d-flex align-items-center justify-content-center" data-bs-slide-to="1">
                                <img src={likeimg[1].image}/>
                                </button>
                               </div>
                                <div className='pv-img'>
                                <button type="button" data-bs-target="#pvslider" className=" border border-secondary   w-100 d-flex align-items-center justify-content-center" data-bs-slide-to="2">
                                <img src={likeimg[2].image}/>
                                </button>
                                </div>
                            </div>
                    {/* <!-- Indicator Close --> */}
                        </div>
                        <div className="col-sm-12 col-md-8 order-1 order-md-2 pv-main-img">
                            <div id="pvslider" className="carousel slide" data-bs-touch="true" data-bs-ride="carousel" >
                            <div className="carousel-inner pvslider-inner">
                                <div className="carousel-item pv-main-img active">
                                    <img src={likeimg[0].image} className=" w-100"/>
                                </div>
                                <div className="carousel-item pv-main-img">
                                <img src={likeimg[1].image} className=" w-100"/>

                                </div>
                                <div className="carousel-item pv-main-img">
                                <img src={likeimg[2].image} className=" w-100"/>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-12 pv-img-detail">
                    <div className="pv-heart-icon text-end">
                    <i class="fa-regular fa-heart"></i>
                    </div>
                    <div className="pv-title">
                        3D Doors
                    </div>
                    <div className="pv-sub-title">
                        smart doors
                    </div>
                    <div className="pv-price-detail d-flex">
                        <div className="pv-price">Rs. 4500 original detail </div>
                        <div className="pv-price-question"> <i class="fa-regular fa-circle-question"></i></div>
                    </div>

                    <div className="pv-more-ad">
                        <div className="d-flex align-items-center justify-content-center">
                        <div className="pv-more-checkbox"></div>
                        </div>   
                        <div className="d-flex align-items-center px-2 justify-content-between">
                            <div className="pv-more-detail ">
                           <div>
                           <div className="pv-sub-title ">
                                one-time order 
                            </div>
                            <div className="pv-more-p">
                                Order upto 10 doors for
                            </div>
                            <div className="pv-more-price">
                                Rs. 34000
                            </div>
                            </div>
                           </div>

                            <div className="pv-more-img">
                            <div className="pv-more-img-div"></div>
                        </div>
                        </div>
                        
                    </div>


                    <div className="pv-membrance">
                    <div className="pv-more-ad ">
                        <div className="d-flex align-items-center  justify-content-center">
                        <div className="pv-more-checkbox">
                            <div className="pv-more-dark"></div>
                        </div>
                        </div>   
                        <div className="d-flex align-items-center px-2 justify-content-between">
                        <div className="pv-more-detail">
                            <div className="pv-sub-title text-capitalize">
                                Membership
                            </div>
                            <div className="pv-more-p">
                                Get exclusive offer
                            </div>
                            <div className="pv-more-price">
                                Rs. 34000
                            </div>
                        </div>
                        <div>
                          <div className="pv-img-container">
                          <div className="d-flex">
                          <div className="pv-more-img2">
                                <div className="pv-more-img-div"></div>
                            </div>
                            <div className="pv-more-img2">
                                <div className="pv-more-img-div"></div>
                            </div>
                          </div>
                            <div className="d-flex">
                            <div className="pv-more-img2">
                                <div className="pv-more-img-div"></div>
                            </div>
                            <div className="pv-more-img2">
                                <div className="pv-more-img-div"></div>
                            </div>
                            </div>
                          </div>
                        </div>
                        </div>

                        
                    </div>
                    <div className="pv-more-code-d">
                            <div className="pv-more-code"> Code : SD123 RW</div>
                            <div className="ul pv-ul">
                                <li className="pv-list">Get your own customization</li>
                                <li className="pv-list">Free shipping</li>
                                <li className="pv-list">Door to door delivery</li>
                                <li className="pv-list">Pause or cancel anytime</li>
                            </div>

                            <div className="pv-more-explore pv-sub-title">
                                <span>Explore Membership</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="pv-more-ad ">
                        <div className="d-flex align-items-center  justify-content-center">
                        <div className="pv-more-checkbox">
                            <div className="pv-more-dark"></div>
                        </div>
                        </div>   
                        <div className="d-flex align-items-center px-2 justify-content-between">
                        <div className="pv-more-detail">
                            <div className="pv-sub-title text-capitalize">
                                buy now
                            </div>
                            <div className="pv-more-p">
                                Pre-loved item excellent condition
                            </div>
                            <div className="pv-more-price">
                                Rs. 3800
                            </div>
                        </div>
                        </div>

                        
                    </div>


                    <div id="pv-more-detail">
                       <div className="pv-product-detail  d-flex justify-content-between">
                       <div className="pv-title">Product Details</div>
                        <div className="pv-product-detail-icon" onClick={plusIcon}>
                            {
                                state? "-" : "+"
                            }
                        </div>
                       </div>

                        <div className="pv-detail-para">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, sint? Quisquam possimus laudantium iusto repellat praesentium sapiente dolore eos. Est laboriosam nemo recusandae?
                        </div>
                    </div>

                    <div id="pv-more-detail">
                       <div className="pv-product-detail  d-flex justify-content-between">
                       <div className="pv-title">size</div>
                        <div className="pv-product-detail-icon" onClick={sizeIcon}>
                            {
                                size? "-" : "+"
                            }
                        </div>
                       </div>

                        <div className="pv-detail-size">
                            <ul>
                                <li> <input type="radio" name="size" /> 80 <i class="fa-solid fa-xmark"></i> 32</li>
                                <li> <input type="radio" name="size" /> 80 <i class="fa-solid fa-xmark"></i> 26</li>
                                <li> <input type="radio" name="size" /> 75 <i class="fa-solid fa-xmark"></i>  26</li>
                            </ul>
                        </div>
                    </div>

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
            
            <div className="row look-row text-center ">
                <div className="">
                <div className="look-head">What are you looking for ?</div>
                <div className="look-para">We'll help you find a perfect door for your house.</div>
                <div className='look-btn-container'><span className="look-btn">see more</span></div>
                </div>
            </div>
            <div className="pv-testo">
            <div id="testomial" class="carousel slide" data-bs-ride="carousel" >
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000" >
                        <div className="row row-carousel-item">
                            <div className="col-md-4  col-sm-12 testomial-img"></div>
                            <div className="col-md-8 col-sm-12 testomial-detail">
                                <div className="testo-quote-left"><i class="fa-solid fa-quote-left"></i></div>
                                <div className="testomial-title">
                                    <div className="testo-name">ram babu gurung</div>
                                    <div className="testo-position"> - businessman</div>
                                </div>
                                <div className="testo-head">amazing customer service</div>
                                <div className="testo-para">
                                    
                                We have purchased this for our office space and are extremely thankful for an entire team for their patience and information provided for our purchase related decisions. Material hardness can be ensured on the spot and every doors are perfectly...
                                <div className="testo-quote-right"><i class="fa-solid fa-quote-right"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item"  data-bs-interval="2000" >
                        <div className="row row-carousel-item">
                                <div className="col-md-4  col-sm-12 testomial-img"></div>
                                <div className="col-md-8 col-sm-12 testomial-detail">
                                    <div className="testo-quote-left"><i class="fa-solid fa-quote-left"></i></div>
                                    <div className="testomial-title">
                                        <div className="testo-name">ram babu gurung</div>
                                        <div className="testo-position"> - businessman</div>
                                    </div>
                                    <div className="testo-head">amazing customer service</div>
                                    <div className="testo-para">
                                        
                                    We have purchased this for our office space and are extremely thankful for an entire team for their patience and information provided for our purchase related decisions. Material hardness can be ensured on the spot and every doors are perfectly...
                                    <div className="testo-quote-right"><i class="fa-solid fa-quote-right"></i></div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div class="carousel-item">
                        <div className="row row-carousel-item">
                                <div className="col-md-4  col-sm-12 testomial-img"></div>
                                <div className="col-md-8 col-sm-12 testomial-detail">
                                    <div className="testo-quote-left"><i class="fa-solid fa-quote-left"></i></div>
                                    <div className="testomial-title">
                                        <div className="testo-name">ram babu gurung</div>
                                        <div className="testo-position"> - businessman</div>
                                    </div>
                                    <div className="testo-head">amazing customer service</div>
                                    <div className="testo-para">
                                        
                                    We have purchased this for our office space and are extremely thankful for an entire team for their patience and information provided for our purchase related decisions. Material hardness can be ensured on the spot and every doors are perfectly...
                                    <div className="testo-quote-right"><i class="fa-solid fa-quote-right"></i></div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#testomial" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon fa-solid fa-chevron-left testo-prev" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#testomial" data-bs-slide="next">
                    <span class="carousel-control-next-icon fa-solid fa-chevron-right testo-prev" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        </div>
    )
}

export default Productview;