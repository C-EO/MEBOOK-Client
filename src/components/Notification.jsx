import React, { useRef, useEffect } from "react";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle";
import logo from "../assets/img/brand/logo128.svg";
import { connect } from "react-redux";

export default connect((state) => state)(function Notification({ formMsg }) {
  const ref = useRef();
  useEffect(() => {
    if (formMsg) {
      new bootstrap.Toast(ref.current).show();
    }
  }, [formMsg]);
  return (
    <>
      <div
        className="position-fixed bottom-0 end-0 p-2"
        style={{ zIndex: "11" }}
      >
        <div
          ref={ref}
          id="liveToast"
          className="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header">
            <img src={logo} className="rounded me-auto" alt="logo" />
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div
            className={`toast-body text-white bg-${
              formMsg.status === "success" ? "success" : "danger"
            }`}
          >
            {formMsg.msg}
          </div>
        </div>
      </div>
    </>
  );
});
