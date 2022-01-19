import React from "react";

export default function HeaderTopBar() {
  return (
    <div id="header-topbar" className="d-none d-md-block">
      <div className="container">
        <div className="row align-items-center">
          <div className="col">
            <div className="topbar-left">
              <ul className="list">
                <li className="list-item">
                  <a href="/">MEMBERSHIP</a>
                </li>
                <li className="list-item">
                  <a href="/">COUPONS & DEALS</a>
                </li>
                <li className="list-item">
                  <a href="/">BESTSELLERS</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="topbar-right text-end">
              <ul className="list">
                <li className="list-item">
                  <a href="/">
                    <i className="me-2 fal fa-user"></i>
                    MY ACCOUNT
                  </a>
                </li>
                <li className="list-item">
                  <a href="/">
                    <i className="me-2 fal fa-heart"></i>
                    WISHLIST
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
