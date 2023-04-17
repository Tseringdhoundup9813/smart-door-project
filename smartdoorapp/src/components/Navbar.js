//import css
import '../style/Navbar.css';
import { useState,useContext,useEffect, useId} from 'react';
import Auth from './Auth';
import { loginContext } from './Context';

//router
import {NavLink} from 'react-router-dom'
import axios from 'axios';


import logo from '../image/logo/smart-doors-logo.png'
function Navbar (){

    // login sucuessfull or not ----------
    const{successLogin} = useContext(loginContext);
    const{validationBox,setValidationBox} = useContext(loginContext);
    const[token,setToken] = useState("");
    const[totalCartList,setTotalCartList] = useState();
    const[Email_verify_message,set_Email_Verify_message] = useState(); 
    const[userid,setuserid]=useState();

  

// ===============================
useEffect(()=>{
    setToken(localStorage.getItem("token"));
    if(localStorage.getItem("cartcount")==null||localStorage.getItem("cartcount")==undefined){
        localStorage.setItem("cartcount",0)
    }else{
        setTotalCartList(localStorage.getItem("cartcount"));

    }
    // totalcartlistshow-------------------------------------------------
    if(localStorage.getItem("user_id")!==null||localStorage.getItem("user_id")!==undefined){
        setuserid(localStorage.getItem("user_id"));
        // totalcartlistcount();
       

        setTotalCartList(localStorage.getItem("cartcount"));
    }
  
    
    
    // end-----------------------------------------------------
    
},[localStorage.getItem("cartcount")]);


// customerhaslogout}===========================================================================flaskdflkasdlfkdslf
function customerhaslogout(){

    localStorage.setItem("token","");
    setToken(localStorage.getItem("token"))
    localStorage.setItem("user_id","");
    localStorage.setItem("username","");
    localStorage.removeItem("email_verify");
    localStorage.removeItem("loginSucess");
    localStorage.removeItem("token");


}
function clickedUser(){
    var x=document.querySelector('.logout-text');
    var userName=document.querySelector('.logout-username')

    if (x.style.display === "flex") {
        x.style.display = "none";
        userName.style.color="grey";
    } else {
        x.style.display = "flex";
        userName.style.color="black";
      }
}

// totalcartlistshow=====================



// totalcartlist how=============================
  async function totalcartlistcount(){
    try{
        let carttotal=  await  axios.get(`http://localhost:3001/totalcartlistcount/${localStorage.getItem("user_id")}`)
        
        setTotalCartList(carttotal.data.totalcartlist)
       
    }catch(err){
        console.log(err);
    }

  }
// ===================fkasdlfklsd afds-----------------========================================
  
// login and signup ===========
    const[auth,setAuth] = useState(false);
// end ===================
    
    const searchbtn = () => {
        // search input 
       let searchInput=document.querySelector('.search-input')
       searchInput.style.display = "block" ;
        
       //close btn
       document.querySelector('.search-close').style.display="block";

    //    //navabr-ul
    //    document.querySelector('.navbar-ul').style.display="none"
        let a =  document.querySelector('.navbar-ul');
        a.style.border ="2px solid green";
       //width of searchicon
       document.querySelector('.search-icon').style.width="100%"
    }
    const searchClose=()=>{
      let a =  document.querySelector('.navbar-ul');
      a.style.border ="2px solid red";
      a.style.backgroundColor = "red";
      

       let searchInput=document.querySelector('.search-input')
       searchInput.style.display = "none" ;
        

        let self=document.querySelector('.search-icon')
        self.style.width="auto"
      

        let icon=document.querySelector('.search-icon');
        icon.style.width="auto"
        
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

    // AuthenticationSystem========================
  
    function authdisplay(props){
        setAuth(props);
    }
    // end ===================================

    // verify email send ======================================
   
    async function VerifyEmailSend(){
        console.log((localStorage.getItem("user_id")));
        const verifySend = await axios.get(`http://localhost:3001/verifyEmail/${(localStorage.getItem("user_id"))}`)
        console.log(verifySend.data);
        set_Email_Verify_message(verifySend.data.message);
        
    }


    // ++++++==============END+====================================
    
    // click login
    function clickLogin(){
        setValidationBox(true)
        document.querySelector('.heart-icon').style.color="black"
    }
    return(
        <div>

            {/* email verfication notification ================================================== */}
            {   
                Email_verify_message?<div className='email-verification-notification'><div>{Email_verify_message}</div><div className='email-red'>Send Email Again</div></div>:

                JSON.parse(localStorage.getItem("email_verify"))||JSON.parse(localStorage.getItem("email_verify"))==null?"":
                <div className="email-verification-notification">
                <div>{(localStorage.getItem("username"))} You need to  Verify your Email</div>
                <div className="email-red" onClick={VerifyEmailSend}>Send Verification code to email</div> 
                </div>
            }

               
            {/* ===============END+================================================ */}



            {/* singup and signin ==================== */}
                {
                 validationBox?<Auth ></Auth>:""

                }
            {/* =============================== */}
            <nav className="navbar navbar-expand-md bg-body-tertiary ">
                <div className="container-fluid navbar-container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <NavLink className="navbar-brand navbar-img" to="/">
                        <img src={logo} alt="logo" className='logo-img' />
                    </NavLink>

                   
                    <div className="two-icon order-md-3">


                        {/* loin and signup ====================*/}
                        {
                        token?<div id="logout" >
                                <div className="logout-username " onClick={clickedUser}><span className="me-2 text-capitalize">{localStorage.getItem("username")} </span> <i class="fa-solid fa-caret-down"></i>
                                </div>
                                <div onClick={customerhaslogout} className="logout-text">
                                Logout
                                </div>
                            </div>:
                        <div className="heart-icon d-flex align-items-center justify-content-center text-capitalize nav-item" id="logout" onClick={clickLogin}>login </div>
                        }
                       
                        {/* end ================= */}

                        {/* <div className="heart-icon fs-4"><i class="fa-regular fa-heart"></i></div> */}
                        
                        <div className="cart-icon fs-4"><p className='totalcartlistCount'>{totalCartList}</p><NavLink to="/product-cart" className=" nav-link cart-icon"><i class="fa-solid fa-cart-shopping"></i></NavLink></div>
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
                    {/* <div className="search-icon"  onClick={searchbtn}>
                        <div className="search-i"><i class="fa-solid fa-magnifying-glass"></i></div>
                        <div  className="search-input bg-tertiary" >
                            <input type="text" placeholder="search..."  />
                        </div>
                        <div className="search-close" onClick={searchClose}><i class="fa-solid fa-xmark"></i></div>
                    </div> */}
                      
                    
                </div>
            </nav>
        </div>

    )
}
export default Navbar;