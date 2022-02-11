import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import EmptyCart from "../components/EmptyCart";
import CheckoutItem from "../components/CheckoutItem";
import SubmitBtn from "../components/SubmitBtn";
import "../assets/style/checkout-page.sass";
import { reduxForm, Field } from "redux-form";
import CheckoutInput from "../components/CheckoutInput";
import { placeNewOrder } from "../redux/actions";

const mapStateToProps = (state, props) => {
  return { ...state, ...props };
};
const onSubmit = (values, dispatch, { user }) => {
  let data = {
    user: user?._id,
    items: user?.cart?.items,
    quantity: user?.cart?.items_count,
    total_price: user?.cart?.total,
    billing_details: values,
  };
  dispatch(placeNewOrder(data));
};
export default reduxForm({ form: "checkout-form", onSubmit })(
  connect(mapStateToProps)(function Checkout({ handleSubmit, response, user }) {
    const [load, setLoad] = useState(false);

    useEffect(() => {
      setLoad(false);
    }, [response]);

    useEffect(() => {
      document.title = "MEBOOK | Checkout";
    }, []);

    if (!user?.cart?.items_count) {
      return <EmptyCart />;
    }
    return (
      <div id="checkout-page-area">
        <div className="container py-3 py-lg-5">
          <form
            onSubmit={(e) => {
              setLoad(true);
              e.preventDefault();
              handleSubmit();
            }}
          >
            <div className="row">
              <div className="col-12 col-lg-8 py-3 py-lg-4">
                <h4 className="mb-5">Billing Details</h4>
                <div className="container p-0">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <Field
                        inputText
                        name="firstName"
                        required
                        label="First Name"
                        component={CheckoutInput}
                        type="text"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <Field
                        inputText
                        name="lastName"
                        defvalue={user?.lastName}
                        component={CheckoutInput}
                        type="text"
                        required
                        label="Last Name"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <Field
                        inputText
                        name="address"
                        component={CheckoutInput}
                        type="address"
                        label="Street Address"
                        autoComplete={"address-line1"}
                        required
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <Field
                        inputText
                        name="city"
                        component={CheckoutInput}
                        type="text"
                        label="Town / City"
                        required
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <Field
                        inputText
                        name="postCode"
                        required
                        label="Post Code"
                        component={CheckoutInput}
                        type="postal-code"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <Field
                        inputText
                        name="phone"
                        required
                        label="Phone Number"
                        component={CheckoutInput}
                        type="tel"
                      />
                    </div>
                    <div className="col-12">
                      <Field
                        inputText
                        name="email"
                        label="Email Address"
                        component={CheckoutInput}
                        type="email"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <Field
                        inputText
                        name="note"
                        label="Order Notes"
                        textarea
                        component={CheckoutInput}
                      />
                    </div>
                    {/* <div className="col-12">
                      <Field
                        name="country"
                        label="Country"
                        required
                        select
                        component={CheckoutInput}
                      />
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4 pb-5 py-lg-4">
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
                        <SubmitBtn load={load} value={"place an order"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  })
);
