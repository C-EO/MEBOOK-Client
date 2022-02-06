import React from "react";
import LoadSpinner from "./LoadSpinner";

export default function SubmitBtn({ value, load, type, onClick }) {
  return (
    <button
      type={!type ? `submit` : null}
      className="mebook-form-submit-btn"
      onClick={type ? onClick : null}
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
