import React from "react";
import { Link } from "react-router-dom";

export default function AccordionItem({ parent, id, label, children }) {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <Link to={`/shop/category/${id}`}>{label}</Link>
        <button
          className="accordion-button collapsed shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${id}`}
          aria-expanded="false"
          aria-controls={`${id}`}
        >
          <i className="fal fa-plus"></i>
        </button>
      </h2>
      <div
        id={`${id}`}
        className="accordion-collapse collapse"
        aria-labelledby="headingOne"
        // data-bs-parent={`#${parent}`}
      >
        <div className="accordion-body">{children}</div>
      </div>
    </div>
  );
}
