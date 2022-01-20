import React from "react";
import { Link } from "react-router-dom";

import { Field, reduxForm } from "redux-form";

const onSubmit = (values, dispatch) => {
  console.log(values);
};

export default reduxForm({ form: "login-form", onSubmit })(
  function UserLoginForm({ handleSubmit }) {
    return (
      <div className="form-area">
        <form onSubmit={handleSubmit}>
          <div className="row g-0">
            <div className="col">
              <Field
                component="input"
                name="email"
                type="email"
                className="mebook-input"
                placeholder="Email"
                autoComplete="username"
                required
              />
            </div>
          </div>
          <div className="row g-0">
            <div className="col">
              <Field
                component="input"
                name="password"
                type="password"
                className="mebook-input"
                placeholder="Password"
                required
                autoComplete="current-password"
              />
            </div>
          </div>
          <div className="row g-0">
            <div className="col d-flex align-items-center">
              <Field
                className="me-2"
                type="checkbox"
                component="input"
                name="keepLogged"
              />
              <label>Keep me logged in</label>
            </div>
            <div className="col text-end">
              <Link to={"/forgot-password"}>Forgot Password?</Link>
            </div>
          </div>
          <div className="row g-0">
            <div className="col">
              <button type="submit" className="mebook-form-submit-btn">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
);
