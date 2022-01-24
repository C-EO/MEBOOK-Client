import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { forgotPassword } from "../redux/actions";
import SubmitBtn from "./SubmitBtn";

const onSubmit = (values, dispatch) => {
  dispatch(forgotPassword(values));
};

const mapStateToProps = (state) => {
  return state;
};

export default reduxForm({ form: "forgot-password-form", onSubmit })(
  connect(mapStateToProps, { forgotPassword })(function UserForgotPasswordForm({
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
            <div className="col">
              <Field
                name="email"
                component="input"
                type="email"
                className="mebook-input"
                placeholder="Email"
                required
                autoComplete="username"
              />
            </div>
          </div>
          <div className="row g-0">
            <div className="col">
              <SubmitBtn value={"Send me email"} load={load} />
            </div>
          </div>
        </form>
      </div>
    );
  })
);
