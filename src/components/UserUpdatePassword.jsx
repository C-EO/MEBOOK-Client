import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import SubmitBtn from "./SubmitBtn";
import { changeUserPassword } from "../redux/actions";

const onSubmit = (values, dispatch) => {
  dispatch(changeUserPassword(values));
};

export default reduxForm({ form: "user-password-form", onSubmit })(
  connect((state) => state, { changeUserPassword })(
    function UserUpdatePassword({ handleSubmit, response }) {
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
                  type="password"
                  className="mebook-input"
                  placeholder="Current Password"
                  autoComplete="current-password"
                  name="password"
                  component="input"
                  required
                />
              </div>
            </div>
            <div className="row g-0">
              <div className="col-12 col-md-6">
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
              <div className="col-12 col-md-6">
                <Field
                  type="password"
                  className="mebook-input"
                  placeholder="Confirm New Password"
                  autoComplete="new-password"
                  name="newPasswordConfirmation"
                  component="input"
                  required
                />
              </div>
            </div>
            <div className="row g-0">
              <div className="col">
                <SubmitBtn value={"Update password"} load={load} />
              </div>
            </div>
          </form>
        </div>
      );
    }
  )
);
