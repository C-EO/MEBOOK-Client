import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { updateUser } from "../redux/actions";
import avatar from "../assets/img/avatar.png";
import { withCookies } from "react-cookie";
import _ from "lodash";

const mapSteteToProp = (state) => {
  return state;
};
export default withCookies(
  connect(mapSteteToProp, { updateUser })(function HeaderTopBar({
    user,
    updateUser,
    response,
    cookies,
  }) {
    useEffect(() => {
      // SET JWT COOKIE
      if (response.status === 201 && response?.data?.data?.jwt) {
        cookies.set("user", response.data.data.jwt, {
          path: "/",
          maxAge: 259200,
          secure: true,
          httpOnly: false,
          sameSite: "none",
        });
      }
      // GET JWT COOKIE
      const user = cookies.get("user");
      if (user === "undefined" || user === undefined) {
        updateUser();
      } else {
        const decoded = jwtDecode(user);
        updateUser(decoded.user);
      }
    }, [response]);
    return (
      <div
        id="header-topbar"
        className={` ${
          !_.isEmpty(user) ? "logged-in" : null
        } d-none d-md-block`}
      >
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
                            <img
                              src={user.avatar || avatar}
                              alt="user_avatar"
                            />
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
  })
);
