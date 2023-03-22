//CSS

//navlink
import "../style/auth.css"
import React,{useState} from "react";
import Register from './Register';
import Login from "./Login";

function Auth (props){
    const[singup,setsingup]=useState(false);
        
    function closeAuth(){
        props.getdisplay(false);
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