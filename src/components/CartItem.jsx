import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/style/cart_item.sass";
import { Rating } from "@mui/material";
import { connect } from "react-redux";
import { removeBookFromCart } from "../redux/actions";
import LoadSpinner from "./LoadSpinner";

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { removeBookFromCart })(
  function CartItem({ item, removeBookFromCart, response }) {
    const [load, setload] = useState(false);

    useEffect(() => {
      setload(false);
    }, [response]);

    return (
      <div className="row align-items-center cart-item">
        <div className="col-5 item-info">
          <Link to={`/book/${item.item._id}`}>
            <img src={item.item.cover} alt="item-img" className="product-img" />
          </Link>
          <div className="product-info">
            <Link to={`/book/${item.item._id}`} className="book-title mb-1">
              {item.item.title}
            </Link>
            <Rating
              name="size-small"
              readOnly
              defaultValue={item.item.average_rating}
              size="small"
            />
          </div>
        </div>
        <div className="col-2 item-price">${item.item.price.toFixed(2)}</div>
        <div className="col-2 item-quantity">{item.quantity}</div>
        <div className="col-2 item-subtotal">${item.subtotal.toFixed(2)}</div>
        <div className="col-1 item-remove">
          <button
            className="delete-cart-item-btn"
            onClick={() => {
              setload(true);
              removeBookFromCart({ itemId: item._id });
            }}
          >
            {load ? (
              <LoadSpinner size={"15"} />
            ) : (
              <i className="fal fa-trash"></i>
            )}
          </button>
        </div>
      </div>
    );
  }
);
