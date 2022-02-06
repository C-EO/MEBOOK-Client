import React from "react";

export default function LoadSpinner({ size }) {
  return (
    <div
      className="spinner-border"
      style={{ width: `${size}px`, height: `${size}px` }}
      role="status"
    ></div>
  );
}
