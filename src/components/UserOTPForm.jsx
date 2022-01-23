import React, { useState } from "react";
import { connect } from "react-redux";
import { verifyAccount } from "../redux/actions";
import OtpInput from "react-otp-input";
import "../assets/style/otp-form.sass";

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { verifyAccount })(
  function UserOTPForm({ verifyAccount, userId, token }) {
    const [otp, setOtp] = useState("");

    const onSubmit = (event) => {
      event.preventDefault();
      verifyAccount(userId, token, { otp });
    };

    return (
      <div className="form-area">
        <form
          onSubmit={(e) => {
            onSubmit(e);
          }}
        >
          <OtpInput
            className="col-2 px-sm-3"
            value={otp}
            onChange={(otp) => setOtp(otp)}
            numInputs={6}
            isInputNum
            shouldAutoFocus
            hasErrored
            containerStyle="otp-form-container p-sm-0 row g-0 mt-3 mb-4"
            inputStyle="otp-input-field"
            focusStyle="otp-input-field-focus"
          />
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
  }
);
