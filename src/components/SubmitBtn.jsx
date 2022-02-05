import React from "react";

export default function SubmitBtn({ value, load, type, onClick }) {
  return (
    <button
      type={!type ? `submit` : null}
      type="submit"
      className="mebook-form-submit-btn"
      onClick={type ? onClick : null}
    >
      {(() => {
        if (!load) {
          return <>{value}</>;
        } else {
          return (
            <div
              className="spinner-border"
              style={{ width: "21px", height: "21px" }}
              role="status"
            ></div>
          );
        }
      })()}
    </button>
  );
}
