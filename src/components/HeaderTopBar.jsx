import React from "react";
import { Link } from "react-router-dom";

export default function HeaderTopBar() {
  return (
    <div id="header-topbar" className="d-none d-md-block">
      <div className="container">
        <div className="row align-items-center">
          <div className="col">
            <div className="topbar-left">
              <ul className="list">
                <li className="list-item">
                  <Link to="/">MEMBERSHIP</Link>
                </li>
                <li className="list-item">
                  <Link to="/">COUPONS & DEALS</Link>
                </li>
                <li className="list-item">
                  <Link to="/">BESTSELLERS</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="topbar-right text-end">
              <ul className="list">
                <li className="list-item">
                  <Link to="/register">
                    <i className="me-2 fal fa-user"></i>
                    REGISTER / LOG IN
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="/">
                    <i className="me-2 fal fa-heart"></i>
                    WISHLIST
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
