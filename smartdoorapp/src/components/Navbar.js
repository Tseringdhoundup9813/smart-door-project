//import css
import '../style/Navbar.css';


import { useState } from 'react';

//router
import {NavLink} from 'react-router-dom'
function Navbar (){

    
    const searchbtn = () => {
        // search input 
       let searchInput=document.querySelector('.search-input')
       searchInput.style.display = "block" ;
        
       //close btn
       document.querySelector('.search-close').style.display="block";

       //navabr-ul
       document.querySelector('.navbar-ul').style.display="none"
       //width of searchicon
       document.querySelector('.search-icon').style.width="100%"
    }
    const searchClose=()=>{
       document.querySelector('.navbar-ul').style.display="block"  

        let self=document.querySelector('.search-icon')
        self.style.width="initial"
        console.log(self)

        var x = window.matchMedia("(max-width: 768px)")
        if (x.matches) { // If media query matches
            var nav = document.querySelector('.navbar-toggler')
            nav.click()
        } 
    }
    const navItem=()=>{
            var x = window.matchMedia("(max-width: 768px)")
              if (x.matches) { // If media query matches
                var nav = document.querySelector('.navbar-toggler')
                nav.click()
              } 
    }
    
    return(
        <div>
            <nav className="navbar navbar-expand-md bg-body-tertiary ">
                <div className="container-fluid navbar-container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand navbar-img" href="#">
                    </a>
                 
                    <div className="two-icon ms-auto order-md-3">
                       <div className="heart-icon fs-4"> <NavLink to="/login" className=" dropdown-item nav-link text-capitalize"><i class="fa-regular fa-user"></i></NavLink></div>

                        <div className="heart-icon fs-4"><i class="fa-regular fa-heart"></i></div>
                        
                        <div className="cart-icon fs-4"><NavLink to="/product-cart" className=" nav-link cart-icon"><i class="fa-solid fa-cart-shopping"></i></NavLink></div>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    {/* <div className="navbar-search-sm row d-flex align-items-center justify-content-center">
                        <div className="navbar-sm-search col-1"><i class="fa-solid fa-magnifying-glass"></i></div>
                        <div className="navbar-sm-input col-11"><input type="text" placeholder="search..."  /></div>
                    </div> */}
                    <ul className="navbar-nav navbar-ul">
                        <li className="nav-item" >
                        <NavLink to="/" className="nav-link text-capitalize" onClick={navItem}> home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to="/product" className="nav-link text-capitalize" onClick={navItem}>product</NavLink>
                        </li>
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            About
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                            <NavLink to="/about/our-vision" onClick={navItem} className=" dropdown-item nav-link text-capitalize">our vision</NavLink>
                            </li>
                            <li>
                            <NavLink to="/about/our-story" onClick={navItem} className=" dropdown-item nav-link text-capitalize">our story</NavLink>
                            </li>
                        </ul>
                        </li>
                        <li className="nav-item">
                        <NavLink to="/Faqs"  onClick={navItem} className="nav-link text-capitalize">FAQs</NavLink>

                        </li>
                        <li className="nav-item">
                        <NavLink to="/contact" onClick={navItem} className="nav-link text-capitalize">contact us</NavLink>
                        </li>
                    </ul>
                    </div>
                    <div className="search-icon"  onClick={searchbtn}>
                        <div className="search-i"><i class="fa-solid fa-magnifying-glass"></i></div>
                        <div  className="search-input bg-tertiary" >
                            <input type="text" placeholder="search..."  />
                        </div>
                        <div className="search-close" onClick={searchClose}><i class="fa-solid fa-xmark"></i></div>
                    </div>
                      
                      {/* <div  className="navbar-signbtn btn">membership</div>
                      <div  className="search-input bg-tertiary" >
                      <input type="text" placeholder="search..."  />
                      <div className="search-close" onClick={searchClose}><i class="fa-solid fa-xmark"></i></div>
                      </div> */}
                </div>
            </nav>
        </div>

    )
}
export default Navbar;