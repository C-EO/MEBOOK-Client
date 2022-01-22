import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { registerUser } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import _ from "lodash";

const onSubmit = (values, dispatch) => {
  dispatch(registerUser(values));
};

export default reduxForm({ form: "register-form", onSubmit })(
  connect((state) => state)(function UserRegisterForm({
    handleSubmit,
    response,
  }) {
    const navigate = useNavigate();
    const [state, setState] = useState(false);

    useEffect(() => {
      if (!_.isEmpty(response)) {
        if (response.status === 201) {
          const { userId, token } = response.data.data;
          setTimeout(() => {
            navigate(`/verify-account/${userId}/${token}`);
          }, 1000);
        }
      }
    }, [response, navigate]);

    useEffect(() => {
      setState(false);
    }, [response?.data?.msg]);

    return (
      <div className="form-area">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setState(true);
            handleSubmit();
          }}
        >
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
                {(() => {
                  if (!state) {
                    return <>register</>;
                  } else {
                    return (
                      <div
                        className="spinner-border"
                        style={{ width: "21px", height: "21px" }}
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    );
                  }
                })()}
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  })
);
