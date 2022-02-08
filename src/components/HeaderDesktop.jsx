import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/api";
import logo from "../assets/img/brand/logo256.svg";
import Dropdown from "./Dropdown";
import { connect } from "react-redux";

export default connect((state) => state)(function HeaderDesktop({
  categories,
  user,
}) {
  return (
    <div id="header-desktop" className="d-none d-md-block">
      <div className="header-desktop-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-3 offset-lg-1 col-lg-2">
              <div className="app-brand">
                <Link to={"/"}>
                  <img src={logo} alt="brand-logo" width={"93%"} />
                </Link>
              </div>
            </div>
            <div className="col-6">
              <div className="quick-search-area">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  id="quick-search-form"
                >
                  <input
                    type="text"
                    name="search"
                    id="quick-search-input"
                    placeholder="Search for a book ..."
                  />
                  <button type="submit" id="quick-search-submit">
                    <i className="fal fa-search"></i>
                  </button>
                </form>
              </div>
            </div>
            <div className="col-3 col-lg-2">
              <div className="bookstore-actions text-end">
                <ul className="list">
                  <li className="list-item bookfinder">
                    <Link to="/admin">
                      <i className="fal fa-x mb-1 fa-cog"></i>
                      <span>Login As Admin</span>
                    </Link>
                  </li>
                  <li className="list-item ms-4">
                    <Link to="/cart">
                      <i className="fal me-2 fa-2_5x fa-shopping-bag"></i>
                      <span className="cart-q">
                        {user?.cart?.items_count || 0}
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-desktop-bottom py-3 styled">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6 d-flex align-items-center">
              <div className="categories-dropdown">
                <Dropdown label={"all categories"}>
                  {categories.length
                    ? categories.map((cat) => {
                        return (
                          <li key={cat._id} className="dropdown-item">
                            <Link to={`/shop/category/${cat.slug}`}>
                              {cat.title}
                            </Link>
                          </li>
                        );
                      })
                    : null}
                </Dropdown>
              </div>
              <div className="desktop-navigation">
                <nav>
                  <ul className="nav-list">
                    <li className="nav-item">
                      <Link to={"/"} className="nav-link">
                        home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to={"/shop"} className="nav-link">
                        shop
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-6 text-end">
              <div className="notice">
                <span>notice !</span>
                <p>App still in development stage</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
