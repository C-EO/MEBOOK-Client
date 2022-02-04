import React, { useRef, useEffect } from "react";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle";
import logo from "../assets/img/brand/logo128.svg";
import { connect } from "react-redux";
import _ from "lodash";

export default connect((state) => state)(function Notification({
  notification,
}) {
  const ref = useRef();
  useEffect(() => {
    if (!_.isEmpty(notification)) {
      new bootstrap.Toast(ref.current).show();
    }
  }, [notification]);
  return (
    <>
      <div
        className="position-fixed bottom-0 end-0 p-2"
        style={{ zIndex: "13", width: "320px" }}
      >
        <div
          ref={ref}
          id="liveToast"
          className="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          data-bs-delay="2500"
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
              notification.status === "success" ? "success" : "danger"
            }`}
          >
            {notification.msg}
          </div>
        </div>
      </div>
    </>
  );
});
