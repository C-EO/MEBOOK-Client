import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { registerUser } from "../redux/actions";
import SubmitBtn from "./SubmitBtn";

const onSubmit = (values, dispatch) => {
  dispatch(registerUser(values));
};

export default reduxForm({ form: "register-form", onSubmit })(
  connect((state) => state)(function UserRegisterForm({
    handleSubmit,
    response,
  }) {
    const [load, setLoad] = useState(false);

    useEffect(() => {
      setLoad(false);
    }, [response]);

    return (
      <div className="form-area">
        <form
          onSubmit={(e) => {
            setLoad(true);
            e.preventDefault();
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
              <SubmitBtn value={"register"} load={load} />
            </div>
          </div>
        </form>
      </div>
    );
  })
);
