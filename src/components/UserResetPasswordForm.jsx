import React from "react";
import { reduxForm, Field } from "redux-form";

const onSubmit = (values, dispatch) => {
  console.log(values);
};
export default reduxForm({ form: "reset-password-form", onSubmit })(
  function UserResetPasswordForm({ handleSubmit }) {
    return (
      <div className="form-area">
        <form onSubmit={handleSubmit}>
          <div className="row g-0">
            <div className="col">
              <Field
                type="password"
                className="mebook-input"
                placeholder="New Password"
                autoComplete="new-password"
                name="newPassword"
                component="input"
                required
              />
            </div>
          </div>
          <div className="row g-0">
            <div className="col">
              <Field
                component="input"
                type="password"
                className="mebook-input"
                autoComplete="new-password"
                placeholder="New Password Confirmation"
                name="newPasswordConfirmation"
                required
              />
            </div>
          </div>
          <div className="row g-0">
            <div className="col">
              <button type="submit" className="mebook-form-submit-btn">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
);
