import React from "react";
import { reduxForm, Field } from "redux-form";

const onSubmit = (values, dispatch) => {
  console.log(values);
};

export default reduxForm({ form: "forgot-password-form", onSubmit })(
  function UserForgotPasswordForm({ handleSubmit }) {
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
  }
);
