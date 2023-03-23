import React,{useState,useEffect} from 'react'
import '../style/Register.css'
import axios from 'axios';


const Register = (props) => {
    function ChangeTologin(){
        props.changeSingup(false);
    }
    const[formdata,setformdata]= useState({username:"",email:"",password:""});
    const[Message,setMessage]=useState("");
    const[signupSucess,setSingupSucess] = useState(false);
    const[passwordView,setPasswordView] = useState(false);
    const[passwordViewTwo,setPasswordViewTwo] = useState(false);


    async function SubmitForm(){
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

        // message go out after a second
        
       
    }
useEffect(()=>{
    if(signupSucess===true){
        setTimeout(function(){
            setMessage("");
        },9000)
    }
    let password = document.querySelector(".password");
    if(formdata.password.length < 6){
        password.style.color ="red";
    }
    else{
        password.style.color ="blue";

    }
    console.log(formdata.password);
},[formdata.password])

// password validation 

function PasswordValidation(e){
    console.log(e);
}
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
        <div className="input-container">
            <input type="text" onChange={(e)=>setformdata({...formdata,username:e.target.value})} placeholder='enter username' />
            <input type="text"  onChange={(e)=>setformdata({...formdata,email:e.target.value})} placeholder='enter email' />
            <div>
                 <input className='password' type={passwordView?"text":"password"} onChange={(e)=>setformdata({...formdata,password:e.target.value})} placeholder='enter password' />
                 <div onClick={()=>setPasswordView((prev)=>!prev)}><i class="fa-solid fa-eye"></i></div>
            </div>
            <div>
             <input  type={passwordViewTwo?"text":"password"} placeholder='enter Confirm password' />
                <div onClick={()=>setPasswordViewTwo((prev)=>!prev)}><i class="fa-solid fa-eye"></i></div>
            </div>

            <button onClick={SubmitForm}>Singup</button>

        </div>

        {/* password verication  */}


        {/* end of verication */}
        <div className="forgetpassword">
          
            <p onClick={ChangeTologin}>already have account login</p>
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