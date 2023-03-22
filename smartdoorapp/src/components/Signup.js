//css
import  '../style/signup.css'

function Signup (){
    return(
        <div>
            <div id="signup">
                <div className="row row-signup">
                    <form action="">
                        {/* <div className="signup-name">
                            <label for="name">Full name <span className="input-req">*</span></label>
                            </div>
                            <div className="signup-input">
                            <input type="text" placeholder="enter your full name"/>
                        </div> */}

                        <div className="form-container">
                            <div className="signup-left">
                                
                                <div className="signup-name">
                                <label for="name">Full name <span className="input-req">*</span></label>
                                </div>
                                <div className="signup-input">
                                <input type="text" placeholder="Enter your Full Name"/>
                                </div> 

                                <div className="signup-password">
                                <label for="name">Password <span className="input-req">*</span></label>
                                </div>
                                <div className="signup-input">
                                <input type="passwword" placeholder="Minmun 6 characters with a number and a letter"/>
                                </div> 

                                <div className="signup-password">
                                <label for="name">Password <span className="input-req">*</span></label>
                                </div>
                                <div className="signup-input">
                                <input type="passwword" placeholder="Minmun 6 characters with a number and a letter"/>
                                </div> 

                                
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup;