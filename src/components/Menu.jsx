import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/brand/logo256.svg";
import "../assets/style/menu.sass";
import {connect} from 'react-redux'

export default connect(state=>state)(function Menu({categories}) {
  return (
    <div id="footer-menu">
      <div className="container py-5">
        <div className="row">
          <div className="mb-5 mb-lg-0 col-12 col-sm-6 col-lg-3">
            <div className="menu-col">
              <img className="mb-4" src={logo} alt="logo" width={180} />
              <ul className="menu-list p-0 m-0">
                <li className="menu-list-item">
                  <p className="m-0">
                    <span>
                      <i className="fal me-2 fa-map-marker-alt"></i>
                      head office:
                    </span>
                    Cairo, EG
                  </p>
                </li>
                <li className="menu-list-item">
                  <p className="m-0">
                    <span>
                      <i className="fal me-2 fa-phone-alt"></i>
                      tel:
                    </span>
                    01099617776
                  </p>
                </li>
                <li className="menu-list-item">
                  <p className="m-0">
                    <span>
                      <i className="fal me-2 fa-envelope"></i>
                      email:
                    </span>
                    mebook@info.fake
                  </p>
                </li>
                <li className="menu-list-item">
                  <ul className="social-links">
                    <li className="social-item">
                      <a href="/# " target={"_blank"}>
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="social-item">
                      <a href="/# " target={"_blank"}>
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li className="social-item">
                      <a href="/# " target={"_blank"}>
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="social-item">
                      <a href="/# " target={"_blank"}>
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-5 mb-lg-0 col-12 col-sm-6 col-lg-3">
            <div className="menu-col">
              <p className="col-label">ABOUT US</p>
              <ul className="menu-list p-0 m-0">
                <li className="menu-list-item">
                  <Link className="menu-list-link" to="/# ">
                    Contact Us
                  </Link>
                </li>
                <li className="menu-list-item">
                  <Link className="menu-list-link" to="/# ">
                    Track Your Order
                  </Link>
                </li>
                <li className="menu-list-item">
                  <Link className="menu-list-link" to="/# ">
                    Returns Policy
                  </Link>
                </li>
                <li className="menu-list-item">
                  <Link className="menu-list-link" to="/# ">
                    Delivery Information
                  </Link>
                </li>
                <li className="menu-list-item">
                  <Link className="menu-list-link" to="/# ">
                    Loyalty Program
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-5 mb-md-0 col-12 col-sm-6 col-lg-3">
            <div className="menu-col">
              <p className="col-label">CATEGORIES</p>
              <ul className="menu-list p-0 m-0">
                {categories.length
                  ? categories.map((cat) => {
                      return (
                        <li key={cat._id} className="menu-list-item">
                          <Link
                            className="menu-list-link"
                            to={`/category/${cat.slug}`}
                          >
                            {cat.title}
                          </Link>
                        </li>
                      );
                    })
                  : null}
              </ul>
            </div>
          </div>
          <div className="mb-md-0 col-12 col-sm-6 col-lg-3">
            <div className="menu-col">
              <p className="col-label">OUR NEWSLETTER</p>
              <ul className="menu-list p-0 m-0">
                <li className="menu-list-item">
                  Sign up for our latest news and offers:
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="my-4 newsletter-form"
                  >
                    <input
                      type="email"
                      autoComplete="email"
                      className="newsletter-email"
                      placeholder="Your email address..."
                    />
                    <button type="submit">
                      <i className="fal fa-envelope"></i>
                    </button>
                  </form>
                </li>
                <li className="menu-list-item">
                  <ul className="payment-methods">
                    <li className="payment">
                      <i className="fab fa-paypal"></i>
                    </li>
                    <li className="payment">
                      <i className="fab fa-cc-visa"></i>
                    </li>
                    <li className="payment">
                      <i className="fab fa-stripe"></i>
                    </li>
                    <li className="payment">
                      <i className="fab fa-cc-mastercard"></i>
                    </li>
                    <li className="payment">
                      <i className="fab fa-amazon-pay"></i>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
)