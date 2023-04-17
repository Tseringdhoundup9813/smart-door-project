import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { loginContext } from "./Context";

const Login = (props) => {
  // login check
  const { setSuccessLogin } = useContext(loginContext);
  const { setValidationBox } = useContext(loginContext);
  // end====================
  // ===================

  const [formdata, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [loginSuccess, setLoginSucess] = useState(false);

  // ===================

  function ChangeToSingup() {
    props.changeSingup(true);
  }

  useEffect(() => {
    if (message.length > 0) {
      setTimeout(function () {
        if (loginSuccess == true) {
          setMessage("");
          setSuccessLogin(true);
          setValidationBox(false);
        }
      }, 1500);
    }
  }, [message, loginSuccess]);

  // submit form ==========================
  async function SubmitForm(event) {
    event.preventDefault();

    try {
      let response = await axios.post("http://localhost:3001/login", formdata);
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user_id", response.data.id);
      localStorage.setItem("username", response.data.username);
      localStorage.setItem("email_verify", response.data.email_verify);
      localStorage.setItem("loginSucess", true);
      setMessage(response.data.message);
      setLoginSucess(response.data.success);
    } catch (err) {
      console.log(err.response.data.message);
    }
  }
  //  -========================

  return (
    <div className="register-container">
      <div className="register-title">
        <h1>Please Login to Continue</h1>
      </div>
      {/* message =========== */}
      {message ? (
        <div className="message">
          <h1
            style={{
              backgroundColor: `${loginSuccess ? "dodgerblue" : "tomato"}`,
            }}
          >
            {message}
          </h1>
        </div>
      ) : (
        ""
      )}

      {/* end ============= */}
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
          <input
            onChange={(e) =>
              setFormData({ ...formdata, email: e.target.value })
            }
            type="text"
            placeholder="enter email"
          />
          <input
            onChange={(e) =>
              setFormData({ ...formdata, password: e.target.value })
            }
            type="password"
            placeholder="enter password"
          />
          <button style={{ backgroundColor: "dodgerblue" }}>Login</button>
        </div>
      </form>
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
  );
};

export default Login;
