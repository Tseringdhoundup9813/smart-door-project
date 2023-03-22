import React from 'react'

const Login = (props) => {

    function ChangeToSingup(){
        props.changeSingup(true);
    }
  return (
    <div className='register-container'>
    <div className="register-title">
        <h1>Please Login to Continue</h1>
    </div>
    <div className="google-facebook">
        <div className="google">
        <i class="fa-brands fa-google-plus"></i>
        </div>
        <div className="facebook">
        <i class="fa-brands fa-facebook"></i>
        </div>
    </div>
    <div className="input-container">
   
        <input type="text" placeholder='enter email' />
        <input type="text" placeholder='enter password' />
        <button style={{backgroundColor:"dodgerblue"}}>Login</button>

    </div>
    <div className="forgetpassword">
        <p>forget password</p>
        <p onClick={ChangeToSingup}>Don't have account sign up</p>
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

export default Login