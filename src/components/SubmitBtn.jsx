import React from "react";
import LoadSpinner from "./LoadSpinner";

export default function SubmitBtn({
  value,
  load,
  type,
  onClick,
  invert,
  disabled,
}) {
  return (
    <button
      type={!type ? `submit` : null}
      className={`${disabled ? "disabled" : ""} ${
        invert ? "invert" : ""
      } mebook-form-submit-btn`}
      onClick={type ? onClick : null}
      disabled={load || disabled}
    >
      {(() => {
        if (!load) {
          return <>{value}</>;
        } else {
          return <LoadSpinner size="21" />;
        }
      })()}
    </button>
  );
}
