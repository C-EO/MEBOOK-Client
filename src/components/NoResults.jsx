import React from "react";
import "../assets/style/empty_cart_wrapper.sass";
import { connect } from "react-redux";

export default connect(
  (state) => state,
  {}
)(function NoResults({}) {
  return (
    <div id="empty-orders-wrapper">
      <i className="fal fa-question-circle"></i>
      <h6>No results matches your current filter</h6>
      <p>Try removing it to get better results</p>
      <button>clear filters</button>
    </div>
  );
});
