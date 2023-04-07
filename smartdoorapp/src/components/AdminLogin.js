import React from "react";
import "../style/aadmin.css";
export default function AdminLogin() {
  return (
    <div id="adminlogin">
      <div className="row row-adminlogin">
        <div className="admin-title text-center my-2 text-primary">
          <h3>Admin Dashboard Login</h3>
        </div>
        <div className="login-container">
          <label htmlFor="username" className="text-capitalize">
            username / email address
          </label>
          <input type="text" id="username" className="form-control" />

          <label htmlFor="password" className="text-capitalize">
            Password
          </label>
          <input type="password" id="password" className="form-control" />

          <div className="btn btn-login">Login</div>
        </div>
        <div className="backlink">
          <i class="fa-solid fa-arrow-left"></i> smartdoorsLimited
        </div>
      </div>
    </div>
  );
}
