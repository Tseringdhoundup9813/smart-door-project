//CSS
import '../style/signin.css'

//navlink
import {NavLink} from 'react-router-dom'


function Signin (){
    return(
        <div>
            <div id="signin">
                <div className="row row-signin">
                        <div className="sign-close ">
                        <div className="sign-x-icon"><i class="fa-solid fa-x"></i></div>
                        </div>
                    <div className="col-12 signin-title text-capitalize d-flex">
                        <div className="sign-log">
                        please login <NavLink to="/signup" className="signupbtn btn">signup</NavLink>
                        to continue
                        </div>
                        
                    </div>
                    
                    <div className="col-12 text-center text-capitalize">
                        <span className="signup-email btn">
                        signUp with email
                        </span>
                    </div>
                <div className="col-12 text-center signin-or text-uppercase">
                        or
                </div>
                <div className="col-12 text-center signin-social text-uppercase">
                    <div className="signin-fb">
                    <i class="fa-brands fa-facebook"></i>
                    </div>
                    <div className="signin-google">
                    <i class="fa-brands fa-google"></i>
                    </div>
                </div>
                <div className="col-12 text-capitalize">
                    <form action="">
                        <div className="signin-grid align-items-center justify-content-start">
                            <div className="signin-label">
                                <label for="email" class="form-label">Email <span className="input-req">*</span></label>
                            </div>
                            <div className="signin-input">
                            <input type="email" placeholder="enter your email"/>
                            </div>
                        </div>
                        <div className="signin-grid align-items-center justify-content-start">
                            <div className="signin-label">
                                <label for="password" class="form-label">Password <span className="input-req">*</span></label>
                            </div>
                            <div className="signin-input">
                            <input type="password" placeholder="enter your password"/>
                            </div>
                        </div>
                    </form>
                    <div className="signin-btn d-flex  justify-content-between">
                       <div className="signin-forgot text-capitalize">forgot password ?</div>
                       <div className="signinmain-btn btn"><span >sign in</span></div>
                    </div>
                </div>
                <div className="col-12 text-center text-capitalize signin-agree">
                    By continuing i agree to smart doors
                </div>
                <div className="col-12 text-center text-capitalize d-flex align-items-center justify-content-center signin-agreelist">
                    <div className="agree-re">return policy</div>
                    <div className="agree-po">privacy policy</div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Signin;