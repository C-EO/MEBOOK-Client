import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/brand/logo256.svg";

export default function HeraderMob() {
  return (
    <div id="header-mob" className="d-md-none">
      <div className="top-sticky-header-mob">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-2">
              <button>
                <i className="fal fa-align-left"></i>
              </button>
            </div>
            <div className="col-8 text-center">
              <div className="app-brand  d-flex justify-content-center align-items-center">
                <Link to={"/"}>
                  <img src={logo} alt="brand-logo" width={150} />
                </Link>
              </div>
            </div>
            <div className="col-2 text-end">
              <Link to="/">
                <i className="fal me-2 fa-shopping-bag"></i>
                <span className="cart-q">0</span>
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
            <li className="mob-nav-item">
              <Link to="/register" className="mov-nav-link">
                <i className="fal fa-user"></i>
              </Link>
            </li>
            <li className="mob-nav-item">
              <Link to="/" className="mov-nav-link">
                <i className="fal fa-search"></i>
              </Link>
            </li>
            <li className="mob-nav-item">
              <Link to="/" className="mov-nav-link">
                <i className="fal fa-heart"></i>
              </Link>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}
