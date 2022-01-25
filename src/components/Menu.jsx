import React from "react";
import { Link } from "react-router-dom";
import "../assets/style/menu.sass";

export default function Menu() {
  return (
    <div id="footer-menu">
      <div className="container py-5">
        <div className="row">
          <div className="mb-5 mb-lg-0 col-12 col-sm-6 col-lg-3">
            <div className="menu-col">
              <p className="col-label">NEED HELP?</p>
              <ul className="menu-list p-0 m-0">
                <li className="menu-list-item">
                  <Link className="menu-list-link" to="/">
                    Help Center
                  </Link>
                </li>
                <li className="menu-list-item">
                  <Link className="menu-list-link" to="/">
                    Shipping FAQs
                  </Link>
                </li>
                <li className="menu-list-item">
                  <Link className="menu-list-link" to="/">
                    Pick Up In Store
                  </Link>
                </li>
                <li className="menu-list-item">
                  <Link className="menu-list-link" to="/">
                    Order Status
                  </Link>
                </li>
                <li className="menu-list-item">
                  <Link className="menu-list-link" to="/">
                    Product Recalls
                  </Link>
                </li>
                <li className="menu-list-item">
                  <Link className="menu-list-link" to="/">
                    Corrections & Updates
                  </Link>
                </li>{" "}
                <li className="menu-list-item">
                  <Link className="menu-list-link" to="/">
                    Gift Cards
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-5 mb-lg-0 col-12 col-sm-6 col-lg-3">
            <div className="menu-col">
              <p className="col-label">ABOUT US</p>
              <ul className="menu-list p-0 m-0">
                <li className="menu-list-item">
                  <Link className="menu-list-link" to="/">
                    Contact Us
                  </Link>
                </li>
                <li className="menu-list-item">
                  <Link className="menu-list-link" to="/">
                    Track Your Order
                  </Link>
                </li>
                <li className="menu-list-item">
                  <Link className="menu-list-link" to="/">
                    Returns Policy
                  </Link>
                </li>
                <li className="menu-list-item">
                  <Link className="menu-list-link" to="/">
                    Delivery Information
                  </Link>
                </li>
                <li className="menu-list-item">
                  <Link className="menu-list-link" to="/">
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
                <li className="menu-list-item">
                  <Link className="menu-list-link" to="/">
                    Help Center
                  </Link>
                </li>
                <li className="menu-list-item">
                  <Link className="menu-list-link" to="/">
                    Shipping FAQs
                  </Link>
                </li>
                <li className="menu-list-item">
                  <Link className="menu-list-link" to="/">
                    Pick Up In Store
                  </Link>
                </li>
                <li className="menu-list-item">
                  <Link className="menu-list-link" to="/">
                    Order Status
                  </Link>
                </li>
                <li className="menu-list-item">
                  <Link className="menu-list-link" to="/">
                    Product Recalls
                  </Link>
                </li>
                <li className="menu-list-item">
                  <Link className="menu-list-link" to="/">
                    Corrections & Updates
                  </Link>
                </li>{" "}
                <li className="menu-list-item">
                  <Link className="menu-list-link" to="/">
                    Gift Cards
                  </Link>
                </li>
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
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
