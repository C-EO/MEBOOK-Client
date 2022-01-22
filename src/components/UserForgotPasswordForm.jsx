import React from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { forgotPassword } from "../redux/actions";

const onSubmit = (values, dispatch) => {
  dispatch(forgotPassword(values));
};

const mapStateToProps = (state) => {
  return state;
};

export default reduxForm({ form: "forgot-password-form", onSubmit })(
  connect(mapStateToProps, { forgotPassword })(function UserForgotPasswordForm({
    handleSubmit,
    forgotPassword,
  }) {
    return (
      <div className="form-area">
        <form onSubmit={handleSubmit}>
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
              <button type="submit" className="mebook-form-submit-btn">
                Send me email
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  })
);
