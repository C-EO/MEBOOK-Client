import React from "react";
import "../assets/style/empty_cart_wrapper.sass";
import { Link } from "react-router-dom";

export default function NoNotifications() {
  return (
    <div id="empty-orders-wrapper">
      <i className="fal fa-bell"></i>
      <h6>you have no notifications 😉</h6>
      <Link to={"/account"}>back to main settings</Link>
    </div>
  );
}
