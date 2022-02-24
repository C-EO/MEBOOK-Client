import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import SubmitBtn from "./SubmitBtn";
import { deleteUser } from "../redux/actions";
const onSubmit = (values, dispatch) => {
  // if (window.confirm("Are you sure you want delete your account")) {
  dispatch(deleteUser(values));
  // }
};

export default reduxForm({ form: "user-delete-form", onSubmit })(
  connect((state) => state)(function UserDeleteAccount({
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
            e.preventDefault();

            if (window.confirm("Are you sure you want delete your account")) {
              setLoad(true);
              handleSubmit();
            }
          }}
        >
          <div className="row g-0">
            <div className="col">
              <Field
                type="password"
                className="mebook-input"
                placeholder="Password"
                autoComplete="current-password"
                name="password"
                component="input"
                required
              />
            </div>
          </div>
          <div className="row g-0">
            <div className="col">
              <SubmitBtn value={"Delete"} load={load} />
            </div>
          </div>
        </form>
      </div>
    );
  })
);
