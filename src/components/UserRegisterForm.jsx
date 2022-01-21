import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { registerUser } from "../redux/actions";
import { useNavigate } from "react-router-dom";

const onSubmit = (values, dispatch) => {
  dispatch(registerUser(values));
};

export default reduxForm({ form: "register-form", onSubmit })(
  connect((state) => state)(function UserRegisterForm({
    handleSubmit,
    formMsg,
  }) {
    const navigate = useNavigate();

    useEffect(() => {
      if (formMsg) {
        if (
          formMsg.status === "success" &&
          formMsg.msg === "account created successfully ✅."
        ) {
          setTimeout(() => {
            navigate(
              `/verify-account/${formMsg.data.userID}/${formMsg.data.token}`
            );
          }, 1000);
        }
      }
    }, [formMsg, navigate]);

    return (
      <div className="form-area">
        <form onSubmit={handleSubmit}>
          <div className="row g-0">
            <div className="col-12 col-sm-6">
              <Field
                type="text"
                name="firstName"
                component="input"
                placeholder="First Name"
                className="mebook-input"
                autoComplete="username"
                required
              />
            </div>
            <div className="col-12 col-sm-6">
              <Field
                type="text"
                name="lastName"
                component="input"
                placeholder="Last Name"
                className="mebook-input"
                autoComplete="username"
                required
              />
            </div>
          </div>
          <div className="row g-0">
            <div className="col">
              <Field
                className="mebook-input"
                placeholder="Email"
                name="email"
                component="input"
                type="email"
                autoComplete="username"
                required
              />
            </div>
          </div>
          <div className="row g-0">
            <div className="col">
              <Field
                className="mebook-input"
                placeholder="Password"
                name="password"
                component="input"
                type="password"
                autoComplete="new-password"
                required
              />
            </div>
          </div>
          <div className="row g-0">
            <div className="col d-flex align-items-center justify-content-between">
              <div className="user-session">
                <Field
                  className="me-2"
                  type="checkbox"
                  component="input"
                  name="keepLogged"
                />
                <label>Keep me logged in</label>
              </div>
            </div>
          </div>
          <div className="row g-0">
            <div className="col">
              <button type="submit" className="mebook-form-submit-btn">
                register
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  })
);
