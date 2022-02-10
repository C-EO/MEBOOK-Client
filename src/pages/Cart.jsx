import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import EmptyCart from "../components/EmptyCart";
import "../assets/style/cart_page.sass";
import CartItem from "../components/CartItem";
import SubmitBtn from "../components/SubmitBtn";
import { Link, useNavigate } from "react-router-dom";
import { setCustomAlert } from "../redux/actions";

export default connect((state) => state, { setCustomAlert })(function Cart({
  user,
  setCustomAlert,
}) {
  const [cartItems, setcartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "MEBOOK | Cart";
  }, []);

  useEffect(() => {
    setcartItems(user?.cart?.items);
  }, [user?.cart?.items]);

  if (!user?.cart?.items_count) {
    return <EmptyCart />;
  }
  return (
    <>
      <div className="shopping-cart-items-container py-2">
        <div className="container py-5">
          <div className="row mb-4">
            <p className="cart-heading">
              SHOPPING CART ({user?.cart?.items_count})
            </p>
          </div>
          <div className="row">
            <div className="col-12 col-lg-8">
              <div className="cart-items-table">
                <div className="container py-3 cart-item-labels">
                  <div className="row">
                    <div className="col-5">PRODUCT</div>
                    <div className="col-2 d-none d-md-block">PRICE</div>
                    <div className="col-2 d-none d-md-block">QUANTITY</div>
                    <div className="col-2 d-none d-md-block">SUBTOTAL</div>
                  </div>
                </div>
                <div className="container items-container">
                  {cartItems.reverse().map((item) => {
                    return <CartItem key={item?._id} item={item} />;
                  })}
                </div>
                <div className="container py-3 cart-actions-area">
                  <div className="row align-items-center">
                    <div className="col-12 col-md-6">
                      <div className="apply-coupon-form">
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            setCustomAlert(
                              "error",
                              "discount coupons not implemented yet"
                            );
                          }}
                        >
                          <input
                            type="text"
                            name="coupon"
                            placeholder="coupon code"
                          />
                          <SubmitBtn value={"Apply Coupon"} />
                        </form>
                      </div>
                    </div>
                    <div className="col-6">
                      <Link to={"/shop"}>Continue Shopping</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="checkout-area">
                <div className="container cart-info py-3">
                  <span className="cart-total-head">CART TOTALS</span>
                </div>
                <div className="container">
                  <div className="row align-item-center my-4">
                    <div className="col-6 cart-info-item ">items : </div>
                    <div className="col-6 cart-info-value">
                      {user?.cart?.items_count}
                    </div>
                  </div>
                  <div className="row align-item-center my-4">
                    <div className="col-6 cart-info-item ">subtotal : </div>
                    <div className="col-6 cart-info-value subtotal_price">
                      ${user?.cart?.total.toFixed(2)}
                    </div>
                  </div>
                  <div className="row align-item-center my-4">
                    <div className="col-6 cart-info-item ">discount : </div>
                    <div className="col-6 cart-info-value discount">
                      - $0.00
                    </div>
                  </div>
                  <div className="row align-item-center my-4">
                    <div className="col-6 cart-info-item">total : </div>
                    <div className="col-6 cart-info-value total_price">
                      ${user?.cart?.total.toFixed(2)}
                    </div>
                  </div>
                  <div className="row align-item-center my-4">
                    <div className="col">
                      <SubmitBtn
                        value={"Proceed to checkout"}
                        type
                        onClick={() => navigate("/checkout")}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
