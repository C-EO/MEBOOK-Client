import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { loginUser, loginAdmin } from "../redux/actions";
import { Link } from "react-router-dom";
import SubmitBtn from "./SubmitBtn";

const onSubmit = (values, dispatch, { restrict_to }) => {
  restrict_to && !restrict_to.includes("user")
    ? dispatch(loginAdmin(values))
    : dispatch(loginUser(values));
};

export default reduxForm({ form: "login-form", onSubmit })(
  connect((state) => state)(function UserLoginForm({
    handleSubmit,
    response,
    restrict_to,
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
            <div className="col">
              <Field
                component="input"
                name="email"
                type={
                  restrict_to && !restrict_to.includes("user")
                    ? "text"
                    : "email"
                }
                className="mebook-input"
                placeholder={
                  restrict_to && !restrict_to.includes("user")
                    ? "Username"
                    : "Email"
                }
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
          {restrict_to && !restrict_to.includes("user") ? (
            <div className="row g-0">
              <div className="col text-center">
                You know how to login as "admin" 😉
              </div>
            </div>
          ) : (
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
          )}
          <div className="row g-0">
            <div className="col">
              <SubmitBtn value={"login"} load={load} />
            </div>
          </div>
        </form>
      </div>
    );
  })
);
