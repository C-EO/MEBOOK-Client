import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import EmptyCart from "../components/EmptyCart";
import "../assets/style/cart_page.sass";
import CartItem from "../components/CartItem";

export default connect((state) => state)(function Cart({ user }) {
  const [cartItems, setcartItems] = useState([]);

  useEffect(() => {
    document.title = "MEBOOK | Cart";
  }, []);

  useEffect(() => {
    setcartItems(user?.cart?.items);
  }, [user?.cart?.items]);

  if (!user.cart.items_count) {
    return <EmptyCart />;
  }
  return (
    <>
      <div className="shopping-cart-items-container py-2">
        <div className="container py-5">
          <div className="row mb-4">
            <p className="cart-heading">
              SHOPPING CART ({user.cart.items_count})
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
                    return <CartItem key={item._id} item={item} />;
                  })}
                </div>
                <div className="container py-3 cart-actions-area">
                  <div className="row align-items-center">
                    <div className="col-12 col-md-6">
                      <div className="apply-coupon-form">
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                          }}
                        >
                          <input
                            type="text"
                            name="coupon"
                            placeholder="coupon code"
                          />
                          <button type="submit">Apply Coupon</button>
                        </form>
                      </div>
                    </div>
                    {/* <div className="col-6">SUBTOTAL</div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              {/* <div className="checkout-area">...</div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
