import React from "react";
import "../assets/style/empty_cart_wrapper.sass";
import { Link } from "react-router-dom";

export default function EmptyWishlist() {
  return (
    <div id="empty-wishlist-wrapper">
      <i className="fal fa-heart"></i>
      <h6>your wishlist is empty now!</h6>
      <p>searching for ideas?</p>
      <Link to={"/shop"}>continue exploring books</Link>
    </div>
  );
}
