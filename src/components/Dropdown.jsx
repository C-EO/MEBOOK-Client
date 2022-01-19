import React from "react";
import "../assets/style/dropdown.sass";

export default function Dropdown() {
  return (
    <div class="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle shadow-none"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="fal fa-align-left"></i>
        <span className="mx-3">all departments</span>
        <i className="fal fa-chevron-down"></i>
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li>
          <a className="dropdown-item" href="/">
            Action
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/">
            Another action
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/">
            Something else here
          </a>
        </li>
      </ul>
    </div>
  );
}
