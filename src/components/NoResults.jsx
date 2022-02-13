import React from "react";
import "../assets/style/empty_cart_wrapper.sass";
import { Link } from "react-router-dom";

export default function NoResults() {
  return (
    <div id="empty-orders-wrapper">
      <i className="fal fa-question-circle"></i>
      <h6>No results matches your current filters</h6>
      <p>Try removing some of them to get better results</p>
    </div>
  );
}
