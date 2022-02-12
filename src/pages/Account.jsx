import React, { useEffect, useState } from "react";
import "../assets/style/account-page.sass";
import avatar from "../assets/img/avatar.png";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { upperFirst } from "lodash";

const routes = [
  { name: "account", path: "/account", icon: "user" },
  { name: "orders", path: "/account/orders", icon: "box" },
  { name: "notifications", path: "/account/notifications", icon: "bell" },
  { name: "logout", path: "/logout", icon: "power-off" },
];

const mapStateToProps = (state) => state;
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function Account({ user, children }) {
  const [path, setPath] = useState("");
  const location = useLocation();

  useEffect(() => {
    setPath(location?.pathname?.split("/")[2] || "account");
  }, [location]);

  useEffect(() => {
    if (path) {
      document.title = `MEBOOK | ${upperFirst(path)}`;
    }
  }, [path]);

  return (
    <div id="account-page">
      <div className="container py-5">
        <div className="row py-5">
          <div className="offset-1 col-10">
            <div className="account-page-area">
              <div className="container p-0">
                <div className="row">
                  <div className="col-4">
                    <div className="account-sidebar py-5">
                      <div className="user_summary">
                        <div className="user-avatar">
                          <img src={user?.avatar || avatar} alt="user-avatar" />
                          <button
                            className="update-avatar-btn"
                            title="Update your avatar"
                          >
                            <span></span>
                          </button>
                        </div>
                        <div className="user-fullname">
                          {user?.firstName} {user?.lastName}
                        </div>
                      </div>
                      <ul className="user-settings-list">
                        {routes.map((route) => {
                          return (
                            <li
                              key={route.name}
                              className={`list-item ${
                                path === route.name ? "active" : ""
                              }`}
                            >
                              <Link to={route.path}>
                                <i className={`fal fa-${route.icon}`}></i>
                                <span>{route.name}</span>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="account-actions-area ">{children}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
