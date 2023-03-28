import React,{useState,useEffect} from 'react'

import '../style/Register.css'
import axios from 'axios';


const Register = (props) => {
    function ChangeTologin(bool){
        props.changeSingup(bool);
    }





    const[formdata,setformdata]= useState({username:"",email:"",password:""});
    const[confirmPassword,setConfirmPassword] = useState("");
    const[Message,setMessage]=useState("");
    const[signupSucess,setSingupSucess] = useState(false);
    const[passwordView,setPasswordView] = useState(false);
    const[passwordViewTwo,setPasswordViewTwo] = useState(false);
    
    
    const[usernameCheck,setusernameCheck] = useState(false);
    const[emailCheck,setemailCheck] = useState(false);
    const[passwordCheck,setpasswordCheck] = useState(false);
    const[confirmPasswordCheck,setConfirmPasswordCheck] = useState(false);
    


    async function SubmitForm(event){
        event.preventDefault();
        if(usernameCheck&&emailCheck&&passwordCheck&&confirmPassword){

            try{
                let response = await axios.post("http://localhost:3001/register",formdata);
                setMessage(response.data.message);
                // console.log(response.data.message);
                setSingupSucess(response.data.success);
                console.log(response.data)
                

            }catch(err){
                console.log(err.response.data.message);
                setMessage(err.response.data.message)
            }
     }
        

        // message go out after a second
        
       
    }
useEffect(()=>{

    // redirect to login when sucess
   
    // ============
    if(signupSucess===true){
        setTimeout(function(){
            setMessage("");
        },9000)
        setTimeout(function(){
            ChangeTologin(false);

        },4000)
    }

    // 
    let password = document.querySelector(".password");
    if(!formdata.password.length < 6){
        password.style.color ="red";
    }
    else{
        password.style.color ="blue";

    }
    // username check====================
    if(formdata.username.length > 5){
        let username = document.querySelector(".username");
        username.style.color = "lightgreen";
        setusernameCheck(true);
    }
    else if(formdata.username.length <=0){
        let username = document.querySelector(".username");
        username.style.color = "";
        setusernameCheck(false);

    }else{
        let username = document.querySelector(".username");
        username.style.color = "red";
        setusernameCheck(false);

    }
    // end ================

    // email check ==========================
    if(formdata.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
       
        let email = document.querySelector(".email");
        email.style.color = "lightgreen";
        setemailCheck(true);
    }
    else if(formdata.email.length <= 0){
        let email = document.querySelector(".email");
        email.style.color = "";
        setemailCheck(false);
    }
    else{
        let email = document.querySelector(".email");
        email.style.color = "red";
        setemailCheck(false);
    }
    

    // /end ====================

    // password validation ===========
    if(formdata.password.length > 5){
        let password = document.querySelector(".password");
        password.style.color = "lightgreen";
        setpasswordCheck(true);
    }
    else if(formdata.password.length <=0){
        let password = document.querySelector(".password");
        password.style.color = "";
        setpasswordCheck(false);

    }else{
        let password = document.querySelector(".password");
        password.style.color = "red";
        setpasswordCheck(false);

    }
    // end of password--===========

    // confirm password==================
   
    if(confirmPassword === formdata.password && confirmPassword.length > 0){
        let confirm_password = document.querySelector(".confirm_password");
        confirm_password.style.color = "lightgreen";
        setConfirmPasswordCheck(true);
        console.log("green");
    }
    else if(confirmPassword.length <= 0){
        let confirm_password = document.querySelector(".confirm_password");
        confirm_password.style.color = "";
        setConfirmPasswordCheck(false);
 
    }
    else{
        let confirm_password = document.querySelector(".confirm_password");
        confirm_password.style.color = "red";
        setConfirmPasswordCheck(false);
        console.log("red");

    }
    // -==============================
},[formdata,confirmPassword,usernameCheck,emailCheck,passwordCheck,confirmPasswordCheck,signupSucess])


return (
    <div className='register-container'>
        <div className="register-title">
            <h1>Please Signup to Continue</h1>
        </div>

       

    {/* message sucess and fail */}
    {   
        Message?
        <div className="message">
            { <h1 style={{backgroundColor:`${signupSucess?"rgb(196, 196, 255)":"rgb(251, 152, 152)"}`}}>{Message}</h1> }    
        </div>
        :""
    }
           
    {/* end ============== */}

        <div className="google-facebook">
            <div className="google">
            <i class="fa-brands fa-google-plus"></i>
            </div>
            <div className="facebook">
            <i class="fa-brands fa-facebook"></i>
            </div>
        </div>
        <form onSubmit={SubmitForm}>
        <div className="input-container">
            <div>
                <li className='username'></li>
                 <input type="text" onChange={(e)=>setformdata({...formdata,username:e.target.value})} placeholder='enter username' />
            </div>
            <div>
                <li className='email'></li>
             <input type="text"  onChange={(e)=>setformdata({...formdata,email:e.target.value})} placeholder='enter email' />

            </div>
            <div>
                 <li className='password'></li>
                 <input className='password' type={passwordView?"text":"password"} onChange={(e)=>setformdata({...formdata,password:e.target.value})} placeholder='enter password' />
                 <div onClick={()=>setPasswordView((prev)=>!prev)}><i class="fa-solid fa-eye"></i></div>
            </div>
            <div>
                 <li className='confirm_password'></li>
                <input  type={passwordViewTwo?"text":"password"} onChange={(e)=>setConfirmPassword(e.target.value)}placeholder='enter Confirm password' />
                <div onClick={()=>setPasswordViewTwo((prev)=>!prev)}><i class="fa-solid fa-eye"></i></div>
            </div>

            <button style={{backgroundColor:`${usernameCheck&&emailCheck&&passwordCheck&&confirmPasswordCheck?"tomato":"rgb(204, 204, 204)"}`}}onClick={SubmitForm}>Singup</button>

        </div>
        </form>

        {/* password verication  */}


        {/* end of verication */}
        <div className="forgetpassword">
          
            <p onClick={()=>ChangeTologin(false)}>already have account login</p>
        </div>
        <div className="policy-container">
            <p>By Continuning|Argee to smart doors</p>
            <div>
                <p>Privacy|</p> <p>Privacy</p>
            </div>
            
        </div>
    </div>
  )
}

export default Register