//CSS

//navlink
import "../style/auth.css"
import React,{useState,useContext} from "react";
import Register from './Register';
import Login from "./Login";
import { loginContext } from "./Context";


function Auth (props){


    const{setValidationBox} = useContext(loginContext);
    const[singup,setsingup]=useState(false);
        
    function closeAuth(){
      
        setValidationBox(false);

        document.querySelector('.heart-icon').style.color="#908778"
    }

    function ChangeToSingup(bol){
        setsingup(bol);
    }
    return(
        <div className="auth-background-container">

        <div className="auth-main-container">
            {/* close  */}
             <div className="sign-close "  onClick={closeAuth}>
                <i class="fa-solid fa-x"></i>
             </div>
             {/* ============= */}


    
        {

       singup? <Register changeSingup={ChangeToSingup}></Register>:<Login changeSingup={ChangeToSingup}></Login >
     
        }
        </div>
          
        </div>
    )
}
export default Auth;