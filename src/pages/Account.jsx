import React, { useEffect, useState, useRef } from "react";
import "../assets/style/account-page.sass";
import avatar from "../assets/img/avatar.png";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { upperFirst } from "lodash";
import { updateAvatar } from "../redux/actions";
import LoadSpinner from "../components/LoadSpinner";
import moment from "moment";
const routes = [
  { name: "account", path: "/account", icon: "user" },
  { name: "orders", path: "/account/orders", icon: "box" },
  { name: "notifications", path: "/account/notifications", icon: "bell" },
  // { name: "wishlist", path: "/account/wishlist", icon: "heart" },
  // { name: "cart", path: "/account/cart", icon: "shopping-bag" },
  { name: "logout", path: "/logout", icon: "power-off" },
];

const mapStateToProps = (state) => state;
const mapDispatchToProps = { updateAvatar };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function Account({ user, children, response, updateAvatar }) {
  const [path, setPath] = useState("");
  const [load, setLoad] = useState(false);
  const location = useLocation();
  const inputMob = useRef(null);
  const inputPc = useRef(null);

  useEffect(() => {
    setLoad(false);
  }, [response]);

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
      <div className="container py-md-5">
        <div className="row py-5">
          <div className="offset-md-1 col-md-10 p-0">
            <div className="account-page-area">
              <div className="container p-0">
                <div className="row">
                  <div className="col-3 col-md-4 pe-0">
                    <div className="account-sidebar py-md-5">
                      <div className="user_summary pb-5 d-none d-md-flex">
                        <div className="user-avatar">
                          <img src={user?.avatar || avatar} alt="user-avatar" />
                          <form
                            formEncType="multipart/form-data"
                            onChange={(e) => {
                              setLoad(true);
                              e.preventDefault();
                              const form = new FormData();
                              form.append("avatar", inputPc.current.files[0]);
                              updateAvatar(form);
                            }}
                          >
                            <div
                              className="update-avatar-btn"
                              title="Update your avatar"
                            >
                              <label htmlFor="avatar">
                                {load ? (
                                  <LoadSpinner size={15} />
                                ) : (
                                  <i className="fal fa-pen"></i>
                                )}
                              </label>
                              <input
                                required
                                className="d-none"
                                id="avatar"
                                ref={inputPc}
                                type="file"
                                accept="image/*"
                                name="avatar"
                                onChange={(e) => {
                                  setLoad(true);
                                }}
                              />
                            </div>
                          </form>
                        </div>
                        <div className="user-fullname">
                          {user?.firstName} {user?.lastName}
                        </div>
                        <p className="user-joined-at">
                          Joined {moment(user?.account_created_at).fromNow()}
                        </p>
                      </div>
                      <ul className="user-settings-list">
                        {routes.map((route) => {
                          return (
                            <li
                              key={route.name}
                              className={`list-item ps-sm-3 ps-md-4 ${
                                path === route.name ? "active" : ""
                              }`}
                            >
                              <Link
                                className="justify-content-center py-4 p-md-0 justify-content-sm-start"
                                to={route.path}
                              >
                                <i
                                  className={`ms-md-2 me-sm-2 me-md-4 fal fa-${route.icon}`}
                                ></i>
                                <span className="d-none d-sm-block">
                                  {route.name}
                                </span>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                  <div className="col-9 col-md-8 ps-0">
                    <div
                      className={`user_summary d-md-none py-5 bordered ${
                        path !== "account" ? "d-none" : ""
                      }`}
                    >
                      <div className="user-avatar">
                        <img src={user?.avatar || avatar} alt="user-avatar" />
                        <form
                          formEncType="multipart/form-data"
                          onChange={(e) => {
                            setLoad(true);
                            e.preventDefault();
                            const form = new FormData();
                            form.append("avatar", inputMob.current.files[0]);
                            updateAvatar(form);
                          }}
                        >
                          <div
                            className="update-avatar-btn"
                            title="Update your avatar"
                          >
                            <label htmlFor="avatar">
                              {load ? (
                                <LoadSpinner size={15} />
                              ) : (
                                <i className="fal fa-pen"></i>
                              )}
                            </label>
                            <input
                              required
                              className="d-none"
                              id="avatar"
                              ref={inputMob}
                              type="file"
                              accept="image/*"
                              name="avatar"
                              onChange={(e) => {
                                setLoad(true);
                              }}
                            />
                          </div>
                        </form>
                      </div>
                      <div className="user-fullname">
                        {user?.firstName} {user?.lastName}
                      </div>
                      <p className="user-joined-at">
                        Joined {moment(user?.account_created_at).fromNow()}
                      </p>
                    </div>
                    <div className="account-actions-area p-4">{children}</div>
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
