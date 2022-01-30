import React from "react";
import "../assets/style/dropdown.sass";

export default function Dropdown({ label, children }) {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle shadow-none"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="fal fa-align-left"></i>
        <span className="mx-3">{label}</span>
        <i className="fal fa-chevron-down"></i>
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        {children}
      </ul>
    </div>
  );
}
