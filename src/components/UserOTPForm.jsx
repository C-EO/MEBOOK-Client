import React from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { verifyAccount } from "../redux/actions";

const mapStateToProps = (state) => {
  return state;
};

const onSubmit = (otp, dispatch) => {
  const [, , userId, token] = window.location.pathname.split("/");
  dispatch(verifyAccount(userId, token, otp));
};
export default reduxForm({ form: "otp-form", onSubmit })(
  connect(mapStateToProps, { verifyAccount })(function UserOTPForm({
    handleSubmit,
    formMsg,
  }) {
    return (
      <div className="form-area">
        <form onSubmit={handleSubmit}>
          <div className="row g-0">
            <div className="col">
              <Field
                name="otp"
                component="input"
                type="text"
                className="mebook-input"
                required
              />
            </div>
          </div>
          <div className="row g-0">
            <div className="col">
              <button type="submit" className="mebook-form-submit-btn">
                Verify
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  })
);
