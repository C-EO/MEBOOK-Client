import React from "react";
import "../assets/style/empty_cart_wrapper.sass";
import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <div id="empty-cart-wrapper">
      <i className="fal fa-shopping-cart"></i>
      <h6>your cart is empty now!</h6>
      <p>searching for ideas?</p>
      <Link to={"/shop"}>continue shopping</Link>
    </div>
  );
}
