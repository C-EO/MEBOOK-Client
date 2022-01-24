import React from "react";

export default function SubmitBtn({ value, load }) {
  return (
    <button type="submit" className="mebook-form-submit-btn">
      {(() => {
        if (!load) {
          return <>{value}</>;
        } else {
          return (
            <div
              className="spinner-border"
              style={{ width: "21px", height: "21px" }}
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          );
        }
      })()}
    </button>
  );
}
