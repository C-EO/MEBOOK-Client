import React from "react";
import "../assets/style/empty_cart_wrapper.sass";
import { Link } from "react-router-dom";

export default function NoResults() {
  return (
    <div id="empty-orders-wrapper">
      <i className="fal fa-question-circle"></i>
      <h6>No results matched your search query</h6>
      <p>try query again</p>
    </div>
  );
}
