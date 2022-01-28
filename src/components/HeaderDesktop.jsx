import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/img/brand/logo256.svg";
import Dropdown from "./Dropdown";

export default function HeaderDesktop() {
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
                <form id="quick-search-form">
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
                    <Link to="/">
                      <i className="fal fa-x fa-map-marker-alt"></i>
                      <span>Bookshop Finder</span>
                    </Link>
                  </li>
                  <li className="list-item ms-4">
                    <Link to="/">
                      <i className="fal me-2 fa-2_5x fa-shopping-bag"></i>
                      <span className="cart-q">0</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-3 d-none d-lg-block">
        <div className="row align-items-center">
          <div className="col-8 d-flex align-items-center">
            <div className="categories-dropdown">
              <Dropdown />
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
                  <li className="nav-item">
                    <Link to={"/"} className="nav-link">
                      blog
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/"} className="nav-link">
                      vendor
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-4 text-end">
            <div className="notice">
              <span>notice !</span>
              <p>App still in development stage</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
