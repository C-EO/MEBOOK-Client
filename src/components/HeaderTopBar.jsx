// import React, { useEffect } from "react";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import jwtDecode from "jwt-decode";
import { updateUser } from "../redux/actions";
import _ from "lodash";

const mapSteteToProp = (state) => {
  return state;
};
export default connect(mapSteteToProp, { updateUser })(function HeaderTopBar({
  user,
  updateUser,
}) {
  // useEffect(() => {
  // if (document.cookie) {
  // const decoded = jwtDecode(document.cookie.slice(4));
  // updateUser(decoded.user);
  // }
  // }, [document.cookie]);

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
                      <Link to="/account">{user.firstName}</Link>
                    </li>
                    <li className="list-item">
                      <Link to="/logout">
                        <i className="fal fa-power-off"></i>
                      </Link>
                    </li>
                  </>
                )}
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
});
