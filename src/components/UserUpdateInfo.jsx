import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import SubmitBtn from "./SubmitBtn";
import { changeUserInformation } from "../redux/actions";

const onSubmit = (values, dispatch) => {
  dispatch(changeUserInformation(values));
};

export default reduxForm({ form: "user-info-form", onSubmit })(
  connect((state) => state, {
    changeUserInformation,
  })(function UserUpdateInfo({ handleSubmit, response }) {
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
            <div className="col-12 col-md-6">
              <Field
                type="text"
                name="firstName"
                component="input"
                placeholder="First Name"
                className="mebook-input"
                autoComplete="username"
              />
            </div>
            <div className="col-12 col-md-6">
              <Field
                type="text"
                name="lastName"
                component="input"
                placeholder="Last Name"
                className="mebook-input"
                autoComplete="username"
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
                autoComplete="email"
              />
            </div>
          </div>
          <div className="row g-0">
            <div className="col">
              <SubmitBtn value={"Update information"} load={load} />
            </div>
          </div>
        </form>
      </div>
    );
  })
);
