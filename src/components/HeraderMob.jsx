import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../assets/img/brand/logo256.svg";
import _ from "lodash";
import avatar from "../assets/img/avatar.png";

export default connect((state) => state)(function HeraderMob({ user }) {
  return (
    <div id="header-mob" className="d-md-none">
      <div className="top-sticky-header-mob">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-2">
              <Link to="/shop">
                <i className="fal fa-store"></i>
              </Link>
            </div>
            <div className="col-8 text-center">
              <div className="app-brand  d-flex justify-content-center align-items-center">
                <Link to={"/"}>
                  <img src={logo} alt="brand-logo" width={150} />
                </Link>
              </div>
            </div>
            <div className="col-2 text-end">
              <Link to="/cart">
                <i className="fal me-2 fa-shopping-bag"></i>
                <span className="cart-q">{user?.cart?.items_count || 0}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-fixed-header-mob">
        <div className="container">
          <div className="mob-nav-list">
            <li className="mob-nav-item">
              <Link to="/" className="mov-nav-link">
                <i className="fal fa-home"></i>
              </Link>
            </li>
            {_.isEmpty(user) ? (
              <li className="mob-nav-item">
                <Link to="/register" className="mov-nav-link">
                  <i className="fal fa-user"></i>
                </Link>
              </li>
            ) : (
              <>
                <li className="mob-nav-item">
                  <Link to="/logout" className="mov-nav-link">
                    <i className="fal fa-power-off"></i>
                  </Link>
                </li>

                <li className="mob-nav-item">
                  <Link to="/account" className="d-flex user-account">
                    <div className="user-avatar">
                      <img src={user.avatar || avatar} alt="user_avatar" />
                    </div>
                  </Link>
                </li>
              </>
            )}

            <li className="mob-nav-item">
              <Link to="/search" className="mov-nav-link">
                <i className="fal fa-search"></i>
              </Link>
            </li>
            <li className="mob-nav-item">
              <Link to="/wishlist" className="mov-nav-link">
                <i className="fal fa-heart"></i>
              </Link>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
});
