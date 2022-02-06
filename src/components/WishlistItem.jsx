import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
import { connect } from "react-redux";
import { addBookToCart, addBookToWishList } from "../redux/actions";

const mapStateToProps = (state) => state;
export default connect(mapStateToProps, { addBookToWishList, addBookToCart })(
  function WishlistItem({ item, response, addBookToWishList, addBookToCart }) {
    const [cartLoad, setCartLoad] = useState(false);
    const [wishLoad, setWishLoad] = useState(false);

    useEffect(() => {
      setCartLoad(false);
      setWishLoad(false);
    }, [response]);

    return (
      <div className="wishlist-item">
        <div className="container px-4">
          <div className="row  align-items-center">
            <div className="col-1">
              <button
                className="remove-wishlist-btn"
                onClick={() => {
                  setWishLoad(true);
                  addBookToWishList({ bookId: item._id });
                }}
              >
                {wishLoad ? (
                  <div
                    className="spinner-border"
                    style={{ width: "21px", height: "21px" }}
                    role="status"
                  ></div>
                ) : (
                  <i className="fal fa-times"></i>
                )}
              </button>
            </div>
            <div className="col-9 item-info">
              <Link to={`/book/${item._id}`}>
                <img src={item.cover} alt="item-img" className="product-img" />
              </Link>
              <div className="product-info">
                <Link to={`/book/${item._id}`} className="book-title mb-1">
                  {item.title}
                </Link>
                <Rating
                  name="size-small"
                  readOnly
                  defaultValue={item.average_rating}
                  size="small"
                />
                <div className="product-price">
                  <span className="last-price">
                    ${item.last_price.toFixed(2)}
                  </span>
                  <span className="price">${item.price.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="product-actions">
                <button
                  className="add-to-cart"
                  onClick={() => {
                    setCartLoad(true);
                    addBookToCart({ bookId: item._id, quantity: 1 });
                  }}
                >
                  {cartLoad ? (
                    <div
                      className="spinner-border"
                      style={{ width: "21px", height: "21px" }}
                      role="status"
                    ></div>
                  ) : (
                    <i className="fal fa-shopping-bag"></i>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
