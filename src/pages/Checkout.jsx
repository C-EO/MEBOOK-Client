import React, { useEffect } from "react";
import { connect } from "react-redux";
import EmptyCart from "../components/EmptyCart";
import CheckoutItem from "../components/CheckoutItem";
import SubmitBtn from "../components/SubmitBtn";
import "../assets/style/checkout-page.sass";

const mapStateToProps = (state) => state;
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function Checkout({ user }) {
  useEffect(() => {
    document.title = "MEBOOK | Checkout";
  }, []);

  if (!user?.cart?.items_count) {
    return <EmptyCart />;
  }
  return (
    <div id="checkout-page-area py-2">
      <div className="container py-5">
        <div className="row">
          <div className="col-8">XXX</div>
          <div className="col-4">
            <div className="cart-summary">
              <div className="container pt-4">
                <p className="title">Product</p>
              </div>
              <div className="container items-container">
                {user?.cart?.items.map((item) => {
                  return <CheckoutItem key={item._id} item={item} />;
                })}
              </div>
              <div className="container pt-4">
                <div className="info-item">
                  <div className="info-label">subtotal</div>
                  <p className="m-0 info-value">
                    ${user?.cart?.total?.toFixed(2)}
                  </p>
                </div>
                <div className="info-item">
                  <div className="info-label ">discount</div>
                  <p className="m-0 info-value discount">- $0</p>
                </div>
                <div className="info-item">
                  <div className="info-label">total</div>
                  <p className="m-0 info-value total">
                    ${user?.cart?.total?.toFixed(2)}
                  </p>
                </div>
              </div>
              <div className="container pb-4">
                <div className="row">
                  <div className="col">
                    <SubmitBtn value={"place an order"} />
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
