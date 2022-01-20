import React from "react";
import "../assets/style/auth_form_area.sass";
import logo from "../assets/img/brand/logo256.svg";

export default function UserAuthFormArea({ label, children }) {
  return (
    <div id="auth-form-area">
      <div className="container">
        <div className="row">
          <div className="col-12 offset-md-2 offset-lg-3 col-lg-6 col-md-8">
            <div className="auth-form-container">
              <div className="auth-form-header">
                <img className="mb-1" src={logo} alt="logo" width={175} />
                <p className="m-0 form-label">{label}</p>
              </div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
