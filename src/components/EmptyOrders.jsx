import React from "react";
import "../assets/style/empty_cart_wrapper.sass";
import { Link } from "react-router-dom";

export default function EmptyOrders() {
  return (
    <div id="empty-orders-wrapper">
      <i className="fal fa-box-open"></i>
      <h6>you have no submitted orders yet!</h6>
      <p>searching for ideas?</p>
      <Link to={"/shop"}>continue shopping</Link>
    </div>
  );
}
