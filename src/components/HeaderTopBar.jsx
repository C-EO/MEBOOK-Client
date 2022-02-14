import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import avatar from "../assets/img/avatar.png";
import _ from "lodash";
import { HashLink } from "react-router-hash-link";

export default connect((state) => state)(function HeaderTopBar({ user }) {
  return (
    <div
      id="header-topbar"
      className={` ${!_.isEmpty(user) ? "logged-in" : null} d-none d-md-block`}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col">
            <div className="topbar-left">
              <ul className="list">
                <li className="list-item">
                  <HashLink to="/#footer-menu">trendings</HashLink>
                </li>
                <li className="list-item">
                  <HashLink to="/# ">top of the month</HashLink>
                </li>
                <li className="list-item">
                  <HashLink to="/# ">happy clients</HashLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="topbar-right">
              <ul className="list">
                {_.isEmpty(user) ? (
                  <li className="list-item">
                    <Link to="/register">
                      <i className="me-2 fal fa-user"></i>
                      REGISTER / LOG IN
                    </Link>
                  </li>
                ) : (
                  <>
                    <li className="list-item">
                      <Link to="/account" className="d-flex user-account">
                        <div className="user-avatar me-2">
                          <img src={user.avatar || avatar} alt="user_avatar" />
                        </div>
                        <span className="username">{user.firstName}</span>
                      </Link>
                    </li>
                    <li className="list-item">
                      <Link to="/logout">
                        <i className="fal fa-power-off"></i>
                      </Link>
                    </li>
                  </>
                )}
                <li className="list-item">
                  <Link to="/wishlist">
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
});
